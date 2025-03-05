import { ListInventoryItem } from './types';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { ListPriceView } from '../../pages/ListPrice/ListPriceView';
export const MenuOptions: ListInventoryItem[] = [
  { text: "Lista de precio", to: "/app/price-list", relativePath: "price-list", icon: PriceChangeIcon, view: <ListPriceView/>, hidden: false },
];
