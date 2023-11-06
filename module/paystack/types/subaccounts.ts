import { BasicRes, AllNumberMeta } from "./common";

export type SettlementSchedule = "auto" | "weekly" | "monthly" | "manual";

export interface Subaccount {
    integration: number;
    domain: string;
    subaccount_code: string;
    business_name: string;
    description: null | string;
    primary_contact_name: null | string;
    primary_contact_email: null | string;
    primary_contact_phone: null | string;
    metadata: any;
    percentage_charge: number;
    is_verified: boolean;
    settlement_bank: string;
    account_number: string;
    settlement_schedule: string | SettlementSchedule;
    active: boolean;
    migrate: boolean;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateSubacountReq {
    business_name: string; // Name of business for subaccount
    settlement_bank: string; // Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
    account_number: string; // Bank Account Number
    percentage_charge: number; // The default percentage charged when receiving on behalf of this subaccount
    description: string; // A description for this subaccount
    primary_contact_email?: string; // A contact email for the subaccount
    primary_contact_name?: string; // A name for the contact person for this subaccount
    primary_contact_phone?: string; // A phone number to call for this subaccount
    metadata?: string; // Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name":
}

export interface CreateSubacountRes extends BasicRes {
    data: Subaccount;
}

export interface ListSubaccountsReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing subaccounts e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; // A timestamp at which to stop listing subaccounts e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface ListSubaccountsRes extends BasicRes {
    data: Array<Subaccount>;
    meta: AllNumberMeta
}

export interface FetchSubaccountRes extends BasicRes {
    data: Subaccount;
}

export interface UpdateSubaccountReq {
    business_name: string; // Name of business for subaccount
    settlement_bank: string; // Bank Code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint.
    account_number?: string; // Bank Account Number
    active?: boolean; // Activate or deactivate a subaccount. Set value to true to activate subaccount or false to deactivate the subaccount.
    percentage_charge?: number; // The default percentage charged when receiving on behalf of this subaccount
    description?: string; // A description for this subaccount
    primary_contact_email?: string; // A contact email for the subaccount
    primary_contact_name?: string; // A name for the contact person for this subaccount
    primary_contact_phone?: string; // A phone number to call for this subaccount
    settlement_schedule?: SettlementSchedule; // Any of auto, weekly, `monthly`, `manual`. Auto means payout is T+1 and manual means payout to the subaccount should only be made when requested. Defaults to auto
    metadata: string; // Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name":
}

export interface UpdateSubaccountRes extends BasicRes {
    data: Subaccount;
}