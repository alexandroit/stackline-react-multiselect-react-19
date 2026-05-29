import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { initialPeople, allPeople, lazySelectedInitial, lazySettings } from './lazy-loading.data';
import './lazy-loading.component.css';

export default function LazyLoadingExample() {
  const [initialPeople, setInitialPeople] = useState(() => [...initialPeople]);
  const [lazySelected, setLazySelected] = useState(() => [...lazySelectedInitial]);
  const { events, record } = useExampleEvents();

  function appendNextChunk() {
    const next = allPeople.slice(initialPeople.length, initialPeople.length + 20);
    if (!next.length) {
      record('lazy', 'no more rows');
      return;
    }
    setInitialPeople((current) => current.concat(next));
    record('lazy', next.length + ' rows');
  }

  return (
    <ExampleLayout slug="lazy-loading" eyebrow="Lazy data" title="Lazy Loading" description="Append more rows when the dropdown scroll reaches the end." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={initialPeople}
          selectedItems={lazySelected}
          onChange={(items) => {
            setLazySelected(items);
            record('change', items);
          }}
          settings={lazySettings}
          onScrollToEnd={appendNextChunk}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">Loaded rows: {initialPeople.length}</p>
      </div>
    </ExampleLayout>
  );
}
