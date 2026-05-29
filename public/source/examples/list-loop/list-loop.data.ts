import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const dropdownGroups = [
  { id: 'countries', label: 'Countries', items: [
  { id: 1, itemName: 'Brazil', name: 'BR', capital: 'Brasilia', region: 'South America', category: 'Americas' },
  { id: 2, itemName: 'Canada', name: 'CA', capital: 'Ottawa', region: 'North America', category: 'Americas' },
  { id: 3, itemName: 'Portugal', name: 'PT', capital: 'Lisbon', region: 'Europe', category: 'Europe' },
  { id: 4, itemName: 'United States', name: 'US', capital: 'Washington, DC', region: 'North America', category: 'Americas' },
  { id: 5, itemName: 'Argentina', name: 'AR', capital: 'Buenos Aires', region: 'South America', category: 'Americas' },
  { id: 6, itemName: 'Germany', name: 'DE', capital: 'Berlin', region: 'Europe', category: 'Europe' },
  { id: 7, itemName: 'Mexico', name: 'MX', capital: 'Mexico City', region: 'North America', category: 'Americas' },
  { id: 8, itemName: 'Colombia', name: 'CO', capital: 'Bogota', region: 'South America', category: 'Americas' }
].slice(0, 4) },
  { id: 'regions', label: 'Regions', items: [{ id: 101, itemName: 'Americas' }, { id: 102, itemName: 'Europe' }] },
  { id: 'skills', label: 'Skills', items: [{ id: 201, itemName: 'React' }, { id: 202, itemName: 'TypeScript' }, { id: 203, itemName: 'CSS' }] }
];

export const loopSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Select values',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  enableSearchFilter: false
};
