import { BasicRes, AllNumberMeta } from "./common";

export type SettlementStatus = "success" | "processing" | "pending" | "failed";

export interface Customer {
    id: number;
    first_name: null | string;
    last_name: null | string;
    email: string;
    customer_code: string;
    phone: null | string;
    metadata: any;
    risk_action: string;
    international_format_phone?: null | string;
}

export interface Authorization {
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

export interface TransactionSource {
    source: string;
    type: string;
    identifier: null | any;
    entry_point: string;
}

export interface CustomField {
    value: string;
    display_name: string;
    variable_name: string;
}

export interface Metadata {
    custom_fields: CustomField[];
}

export interface SettlementTrans {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: Metadata;
    log: null | any;
    fees: number;
    fees_split: null | any;
    customer: Customer;
    authorization: Authorization;
    plan: any;
    split: any;
    subaccount: any;
    order_id: null;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
    source: TransactionSource;
    pos_transaction_data: null | any;
}

export interface Settlement {
    id: number;
    domain: string;
    status: string;
    currency: string;
    integration: number;
    total_amount: number;
    effective_amount: number;
    total_fees: number;
    total_processed: number;
    deductions: null | number;
    settlement_date: string;
    settled_by: null | string | number;
    createdAt: string;
    updatedAt: string;
};

export interface ListSettlementsReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    status?: SettlementStatus; // Fetch settlements based on their state. Value can be one of success, processing, pending or failed.
    subaccount?: string; //   Provide a subaccount ID to export only settlements for that subaccount. Set to none to export only transactions for the account.
    from?: string; //  A timestamp from which to start listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; //  A timestamp at which to stop listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface ListSettlementsRes extends BasicRes {
    data: Array<Settlement>;
    meta: AllNumberMeta;
}

export interface ListSettlementsTransReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing settlement transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; // A timestamp at which to stop listing settlement transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface ListSettlementsTransRes extends BasicRes {
    data: SettlementTrans[];
    meta: AllNumberMeta;
}