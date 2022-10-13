// export fetch all api types
export interface AllObject {
    message: string;
    products: ProductType[];
}

// export fetch product api types
export interface ProductObject {
    message: string;
    product: ProductType;
}

export interface ProductType {
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