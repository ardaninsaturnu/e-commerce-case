// export fetch all api types
export interface AllObject {
  message: string;
  products: ProductType[];
}

// export category list
export interface CategoryObject {
  message: string;
  categories: Category[];
}

// export fetch product api types
export interface ProductObject {
  message: string;
  product: ProductType;
}

// export create product
export interface CreateObject {
  message: string;
  statusCode: number;
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

export interface Category {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

