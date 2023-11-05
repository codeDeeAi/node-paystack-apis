import { RiskActionEnum, BasicRes } from "./common"; 

export interface CreateCustomerReq {
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
    metadata?: { [key: string]: any };
}

export interface CreateCustomerRes extends BasicRes {
    data: {
        email: string;
        integration: number | string;
        domain: string;
        customer_code: string;
        id: number | string;
        identified: boolean;
        identifications: any;
        createdAt: string;
        updatedAt: string;
    }
}

export interface ListCustomersReq {
    perPage?: number;
    page: number;
    from: string;
    to: string;
}

export interface SingleCustomer {
    integration: number | string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    phone: string | null;
    metadata: any;
    domain: string;
    customer_code: string;
    risk_action: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateSingleCustomer extends SingleCustomer {
    identified: boolean;
    identifications: any;
    transactions: Array<any>;
    subscriptions: Array<any>;
    authorizations: Array<any>;
}
export interface ListCustomersRes extends BasicRes {
    data: Array<SingleCustomer>;
    meta: {
        next: null | string;
        previous: null | string;
        perPage: number | string;
    }
}

export interface SingleCustomerAuthorizationInterface {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name: null | string;
}
export interface SingleCustomerDetInterface {
    transactions: Array<any>;
    subscriptions: Array<any>;
    authorizations: Array<SingleCustomerAuthorizationInterface>;
    first_name: string | null;
    last_name: string | null;
    email: string;
    phone: string | null;
    metadata: any;
    domain: string;
    customer_code: string;
    risk_action: string;
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
    created_at: string;
    updated_at: string;
    total_transactions: number;
    total_transaction_value: Array<any>,
    dedicated_account: any;
    identified: boolean;
    identifications: any;
}
export interface CustomerDetInterface extends BasicRes {
    data: SingleCustomerDetInterface;
}

export interface UpdateCustomerReq {
    first_name: string;
    last_name: string;
    phone?: string;
    metadata?: { [key: string]: any };
}
export interface UpdateCustomerRes extends BasicRes {
    data: UpdateSingleCustomer;
}

export interface ValidateCustomerReq {
    first_name: string;
    middle_name?: string;
    last_name: string;
    type: string;
    value: string;
    country: string;
    bvn: string;
    bank_code: string;
    account_number: string;
}
export interface ValidateCustomerRes {
    status: boolean;
    message: string;
}

export interface WhitelistOrBlacklistCustomerReq {
    customer: string;
    risk_action?: typeof RiskActionEnum[keyof typeof RiskActionEnum];
}
export interface WhitelistOrBlacklistCustomerRes extends BasicRes {
    data: {
        first_name: string | null;
        last_name: string | null;
        email: string;
        phone: string | null;
        metadata: any;
        domain: string;
        identified: boolean;
        identifications: any;
        customer_code: string;
        risk_action: string;
        id: number | string;
        integration: number | string;
        createdAt: string;
        updatedAt: string;
    }
}
