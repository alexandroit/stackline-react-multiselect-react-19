import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const countries: DemoItem[] = [
  {
    id: 1,
    itemName: "Brazil",
    name: "BR",
    capital: "Brasilia",
    region: "South America",
    category: "Americas"
  },
  {
    id: 2,
    itemName: "Canada",
    name: "CA",
    capital: "Ottawa",
    region: "North America",
    category: "Americas"
  },
  {
    id: 3,
    itemName: "Portugal",
    name: "PT",
    capital: "Lisbon",
    region: "Europe",
    category: "Europe"
  },
  {
    id: 4,
    itemName: "United States",
    name: "US",
    capital: "Washington, DC",
    region: "North America",
    category: "Americas"
  },
  {
    id: 5,
    itemName: "Argentina",
    name: "AR",
    capital: "Buenos Aires",
    region: "South America",
    category: "Americas"
  },
  {
    id: 6,
    itemName: "Germany",
    name: "DE",
    capital: "Berlin",
    region: "Europe",
    category: "Europe"
  }
];

export const createdSelectedInitial: DemoItem[] = [
  {
    id: 1,
    itemName: "Brazil",
    name: "BR",
    capital: "Brasilia",
    region: "South America",
    category: "Americas"
  },
  {
    id: 2,
    itemName: "Canada",
    name: "CA",
    capital: "Ottawa",
    region: "North America",
    category: "Americas"
  }
];

export const createdSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Add country",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic",
  addNewItemOnFilter: true,
  addNewButtonText: "Add country"
};

export function createCountryFromQuery(query: string, currentLength: number): DemoItem {
  return {
    id: currentLength + 100,
    itemName: query,
    name: query.slice(0, 2).toUpperCase(),
    capital: query,
    region: 'Custom',
    category: 'Custom'
  };
}
