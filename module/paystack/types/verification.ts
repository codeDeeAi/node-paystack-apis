import { BasicRes } from "./common";

export interface ResolveAccountRes extends BasicRes {
    data: {
        account_number: string;
        account_name: string;
    }
}

export interface ValidateAccountReq {
    account_name: string;
    account_number: string;
    account_type: "personal" | "business";
    bank_code: string;
    country_code: string;
    document_type: "identityNumber" | "passportNumber" | "businessRegistrationNumber";
    document_number?: string;
}

export interface ValidateAccountRes extends BasicRes {
    data: {
        verified: boolean;
        verificationMessage: string;
    }
}

export interface ResolveCardBINRes extends BasicRes {
    data: {
        bin: string;
        brand: string;
        sub_brand: string;
        country_code: string;
        country_name: string;
        card_type: string;
        bank: string;
        linked_bank_id: number;
    }
}