import { AllNumberMeta, BasicRes } from "./common";

export interface Product {
    name: string;
    description: string;
    currency: string;
    price: number;
    quantity: number;
    is_shippable: boolean;
    unlimited: boolean;
    integration: number;
    domain: string;
    metadata: {
        background_color: string;
    };
    slug: string;
    product_code: string;
    quantity_sold: number;
    type: string;
    shipping_fields: {
        delivery_note: string;
        shipping_fees?: {
            region: string;
            fee: number;
            currency: string;
        }[];
    };
    active: boolean;
    in_stock: boolean;
    minimum_orderable: number;
    maximum_orderable: number | null;
    low_stock_alert: boolean;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface File {
    key: string;
    type: string;
    path: string;
    original_filename: string;
}

export interface ProductInList extends Product {
    files: File[];
    success_message: string;
    redirect_url: string;
    split_code: null | any;
    notification_emails: null | any;
    digital_assets: any[];
    variant_options: any[];
}

export interface CreateProductReq {
    name: string; // Name of product
    description: string; // A description for this product
    price: number; // Price should be in the subunit of the supported currency
    currency: string; // Currency in which price is set
    unlimited?: boolean; // Set to true if the product has unlimited stock. Leave as false if the product has limited stock
    quantity?: number; // Number of products in stock. Use if unlimited is false
}

export interface CreateProductRes extends BasicRes {
    data: Product;
}

export interface ListProductsReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing product e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; // A timestamp at which to stop listing product e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface ListProductsRes extends BasicRes {
    data: Array<ProductInList>;
    meta: AllNumberMeta
}

export interface FetchProductRes extends BasicRes {
    data: {
        digital_assets: any[];
        integration: number;
        name: string;
        description: string;
        product_code: string;
        price: number;
        currency: string;
        quantity: number;
        quantity_sold: number | null;
        type: string;
        files: null | any;
        file_path: null | string;
        is_shippable: boolean;
        shipping_fields: { [key: string]: any; };
        unlimited: boolean;
        domain: string;
        active: boolean;
        features: null | any;
        in_stock: boolean;
        metadata: {
            background_color: string;
        };
        slug: string;
        success_message: null | string;
        redirect_url: null | string;
        split_code: null | any;
        notification_emails: null | any;
        minimum_orderable: number;
        maximum_orderable: number | null;
        low_stock_alert: boolean;
        stock_threshold: null | any;
        expires_in: null | any;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export interface UpdateProductReq {
    name: string; // Name of product
    description?: string; // A description for this product
    price: number; // Price should be in the subunit of the supported currency
    currency: string; // Currency in which price is set
    unlimited?: boolean; // Set to true if the product has unlimited stock. Leave as false if the product has limited stock
    quantity?: number; // Number of products in stock. Use if unlimited is false
}

export interface UpdateProductRes extends BasicRes {
    data: {
        name: string;
        description: string;
        product_code: string;
        price: number;
        currency: string;
        quantity: number;
        quantity_sold: number | null;
        type: string;
        image_path: string;
        file_path: string;
        is_shippable: boolean;
        unlimited: boolean;
        domain: string;
        active: boolean;
        features: null | any;
        in_stock: boolean;
        metadata: null | any;
        id: number;
        integration: number;
        createdAt: string;
        updatedAt: string;
    }
}