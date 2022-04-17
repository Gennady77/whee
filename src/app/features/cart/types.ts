import { ListItem } from "src/app/types";

export type CartItem = ListItem & {
    price: number;
};

export type StateCartItem = {
    id: number;
    price: number;
    quantity: number;
};
