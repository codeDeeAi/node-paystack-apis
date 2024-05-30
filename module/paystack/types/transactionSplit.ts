import { BasicRes, AllNumberMeta } from "./common";

export type SplitType = "percentage" | "flat";

export type BearerType = "subaccount" | "account" | "all-proportional" | "all";

export interface SubaccountAndShare {
    subaccount: string;
    share: number;
}

export interface Subaccount {
    id: number;
    subaccount_code: string;
    business_name: string;
    description: string;
    primary_contact_name: null | string;
    primary_contact_email: null | string;
    primary_contact_phone: null | string;
    metadata: null | string;
    percentage_charge: number;
    settlement_bank: string;
    account_number: string;
}

export interface CreateSplitReq {
    name: string; // Name of the transaction split
    type: SplitType; // The type of transaction split you want to create. You can use one of the following: percentage | flat
    currency: string; // Any of the supported currency
    subaccounts: Array<SubaccountAndShare> // A list of object containing subaccount code and number of shares: [{ subaccount: ‘ACT_xxxxxxxxxx’, share: xxx}, { ...}]
    bearer_type: BearerType; // Any of subaccount | account | all - proportional | all
    bearer_subaccount: string; // Subaccount code
}

export interface CreateSplitRes extends BasicRes {
    data: {
        id: number;
        name: string;
        type: string;
        currency: string;
        integration: number;
        domain: string;
        split_code: string;
        active: true,
        bearer_type: string | BearerType;
        bearer_subaccount: number;
        createdAt: string;
        updatedAt: string;
        subaccounts: Array<{ subaccount: Subaccount; share: number; }>
        total_subaccounts: number;
    }
}


export interface ListSplitsReq {
    name: string; // The name of the split
    active: boolean; // Any of true or false
    sort_by?: string; // Sort by name, defaults to createdAt date
    perPage?: number; // Number of splits per page. If not specify we use a default value of 50.
    page?: number; // Page number to view. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing splits e.g. 2019-09-24T00:00:05.000Z, 2019-09-21
    to?: string;// A timestamp at which to stop listing splits e.g. 2019-09-24T00:00:05.000Z, 2019-09-21
}

export interface Split {
    id: number;
    name: string;
    split_code: string;
    integration: number;
    domain: string;
    type: string | SplitType;
    active: number;
    currency: string;
    bearer_type: string | BearerType;
    bearer_subaccount: number;
    created_at: string;
    updated_at: string;
    subaccounts: Array<{ subaccount: Subaccount; share: number; }>;
    total_subaccounts: number;
}

export interface ListSplitsRes extends BasicRes {
    data: Array<Split>;
    meta: AllNumberMeta;
}

export interface FetchSplitRes extends BasicRes {
    data: Split;
}

export interface UpdateSplitReq {
    name: string;  // Name of the transaction split
    active: boolean; // True or False
    bearer_type?: BearerType; // Any of the following values: subaccount | account | all-proportional | all
    bearer_subaccount?: string; // Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount
}

export interface UpdateSplitRes extends BasicRes {
    data: Split
}

export interface AddOrUpdateSplitSubaccountReq {
    subaccount: string; // This is the sub account code
    share: number; // This is the transaction share for the subaccount
}

export interface AddOrUpdateSplitSubaccountRes extends BasicRes {
    data: Split;
}