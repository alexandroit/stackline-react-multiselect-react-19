import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const overlayCountries: DemoItem[] = [
  {
    id: 42,
    itemName: "Brazil",
    name: "BR",
    capital: "Brasilia",
    region: "South America",
    category: "Americas"
  },
  {
    id: 43,
    itemName: "Canada",
    name: "CA",
    capital: "Ottawa",
    region: "North America",
    category: "Americas"
  },
  {
    id: 44,
    itemName: "Portugal",
    name: "PT",
    capital: "Lisbon",
    region: "Europe",
    category: "Europe"
  },
  {
    id: 45,
    itemName: "United States",
    name: "US",
    capital: "Washington, DC",
    region: "North America",
    category: "Americas"
  }
];

export const dialogSelectedInitial: DemoItem[] = [
  {
    id: 42,
    itemName: "Brazil",
    name: "BR",
    capital: "Brasilia",
    region: "South America",
    category: "Americas"
  }
];

export const dialogSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Dialog dropdown",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 2,
  maxHeight: 180,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "material",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom"
};
