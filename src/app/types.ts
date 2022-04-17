export type CartItem = {
    id: number;
    title: string;
    description: string;
    avatar: string;
    price: number;
};

export type StateCartItem = {
    id: number;
    price: number;
    quantity: number;
};
