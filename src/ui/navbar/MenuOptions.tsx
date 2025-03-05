
import InventoryIcon from '@mui/icons-material/Inventory';
import { ListInventoryItem } from './types';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
export const MenuOptions: ListInventoryItem[] = [
  { text: "Lista de precio", to: "/app/price-list", relativePath: "price-list", icon: InventoryIcon, view: <PriceChangeIcon/> },
];
