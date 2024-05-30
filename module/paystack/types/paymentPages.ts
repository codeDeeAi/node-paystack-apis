import { BasicRes } from "./common";

interface Object {
    [key: string | number]: any;
}

export interface CreatePageReq {
    name: string; // Name of page
    description?: string; // A description for this page
    amount?: number; // Amount should be in the subunit of the supported currency
    split_code?: string; // The split code of the transaction split. e.g. SPL_98WF13Eb3w
    slug?: string; // URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]
    metadata?: Object; // Extra data to configure the payment page including subaccount, logo image, transaction charge
    redirect_url?: string; // If you would like Paystack to redirect someplace upon successful payment, specify the URL here.
    custom_fields?: any[]; // If you would like to accept custom fields, specify them here.
}

export interface CreatePageRes extends BasicRes {
    data: {
        name: string;
        description: string;
        amount: number;
        split_code: string;
        integration: number;
        domain: string;
        slug: string;
        currency: string;
        type: string;
        collect_phone: boolean;
        active: boolean;
        published: boolean;
        migrate: boolean;
        id: number;
        createdAt: string;
        updatedAt: string;
    };
}

export interface ListPagesReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing page e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; // A timestamp at which to stop listing page e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface ListPagesRes extends BasicRes {
    data: {
        integration: number;
        plan: null | number;
        domain: string;
        name: string;
        description: null | string;
        amount: null | number;
        currency: string;
        slug: string;
        custom_fields: null | { display_name: string; variable_name: string }[];
        redirect_url: string;
        active: boolean;
        migrate: null | any;
        id: number;
        createdAt: string;
        updatedAt: string;
    }[];
    meta: {
        total: number;
        skipped: number;
        perPage: string;
        page: number;
        pageCount: number;
    }
}

export interface FetchPageRes extends BasicRes {
    data: {
        integration: number;
        domain: string;
        name: string;
        description: null | string;
        amount: null | number;
        currency: string;
        slug: string;
        active: boolean;
        id: number;
        createdAt: string;
        updatedAt: string;
        products: {
            product_id: number;
            name: string;
            description: string;
            product_code: string;
            page: number;
            price: number;
            currency: string;
            quantity: number;
            type: string;
            features: null | any;
            is_shippable: number;
            domain: string;
            integration: number;
            active: number;
            in_stock: number;
        }[];
    }
}

export interface AddProductRes extends BasicRes {
    data: {
        integration: number;
        domain: string;
        name: string;
        description: null | string;
        amount: null | number;
        currency: string;
        slug: string;
        active: boolean;
        id: number;
        createdAt: string;
        updatedAt: string;
        custom_fields: any[];
        type: string;
        redirect_url: null | string;
        success_message: null | string;
        collect_phone: boolean;
        published: boolean;
        migrate: boolean;
        notification_email: null | string;
        metadata: Object;
        products:
        {
            product_id: number;
            name: string;
            description: string;
            product_code: string;
            page: number;
            price: number;
            currency: string;
            quantity: number;
            type: string;
            features: null | any;
            is_shippable: number;
            domain: string;
            integration: number;
            active: number;
            in_stock: number;
        }[];
    }
}