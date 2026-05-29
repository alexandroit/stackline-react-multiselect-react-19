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

export const counterSelectedInitial: DemoItem[] = [
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
  }
];

export const counterSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "All selected visible",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: false,
  searchPlaceholderText: "Search",
  badgeShowLimit: 10,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic"
};
