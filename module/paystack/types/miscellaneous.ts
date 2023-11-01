import { BasicRes } from "./common"; 

export interface Country {
    id: number | string,
    name: string;
    iso_code: string;
    default_currency_code: string;
    integration_defaults: any;
    relationships: {
        currency: {
            type: string;
            data: Array<string>;
        },
        integration_feature: {
            type: string;
            data: Array<any>
        },
        integration_type: {
            type: string;
            data: Array<string>;
        },
        payment_method: {
            type: string;
            data: Array<string>;
        }
    }

}

export interface ListCountryRes extends BasicRes {
    data: Array<Country>;
}

export interface State {
    name: string;
    slug: string;
    abbreviation: string;
}

export interface ListStatesRes extends BasicRes {
    data: Array<State>;
}

export interface Bank {
    name: string;
    slug: string;
    code: string | number;
    longcode: string | number;
    gateway: any,
    pay_with_bank: boolean;
    active: boolean;
    is_deleted: boolean;
    country: string;
    currency: string;
    type: string;
    id: string | number;
    createdAt: string;
    updatedAt: string;

}
export interface ListBanksRes extends BasicRes {
    data: Array<Bank>;
    meta: {
        next: string | number | null,
        previous: string | number | null,
        perPage: number | string
    }
}

export interface ListBanksReq {
    country: string;
    use_cursor: boolean;
    perPage: number;
    pay_with_bank_transfer?: boolean;
    pay_with_bank?: boolean;
    next?: string;
    previous?: string;
    gateway?: string;
    type?: string;
    currency?: string;
}