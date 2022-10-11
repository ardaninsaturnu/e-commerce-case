export interface Product {
    _id: string;
    name: string;
    avatar: string;
    description: string;
    price: number;
    category: string;
    developerEmail: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface RootObject {
    message: string;
    products: Product[];
}