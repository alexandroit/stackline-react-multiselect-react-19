import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const countries: DemoItem[] = [
  { id: 1, itemName: 'Brazil', name: 'BR', capital: 'Brasilia', region: 'South America', category: 'Americas' },
  { id: 2, itemName: 'Canada', name: 'CA', capital: 'Ottawa', region: 'North America', category: 'Americas' },
  { id: 3, itemName: 'Portugal', name: 'PT', capital: 'Lisbon', region: 'Europe', category: 'Europe' },
  { id: 4, itemName: 'United States', name: 'US', capital: 'Washington, DC', region: 'North America', category: 'Americas' },
  { id: 5, itemName: 'Argentina', name: 'AR', capital: 'Buenos Aires', region: 'South America', category: 'Americas' },
  { id: 6, itemName: 'Germany', name: 'DE', capital: 'Berlin', region: 'Europe', category: 'Europe' },
  { id: 7, itemName: 'Mexico', name: 'MX', capital: 'Mexico City', region: 'North America', category: 'Americas' },
  { id: 8, itemName: 'Colombia', name: 'CO', capital: 'Bogota', region: 'South America', category: 'Americas' }
];

export const disabledSelectedInitial: DemoItem[] = [countries[1]];

export const disabledSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Disabled dropdown',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  disabled: true
};
