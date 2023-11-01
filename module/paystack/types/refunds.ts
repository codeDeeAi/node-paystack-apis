import { BasicRes } from "./common";

export interface CreateRefundReq {
    transaction: string;
    amount: number;
    currency: string;
    customer_note: string;
    merchant_note: string;
}

export interface CreateRefundRes extends BasicRes {
    data: {
        transaction: {
            id: number;
            domain: string;
            reference: string;
            amount: number;
            paid_at: string;
            channel: string;
            currency: string;
            authorization: {
                exp_month: null | string;
                exp_year: null | string;
                account_name: null | string;
            };
            customer: {
                international_format_phone: null | string;
            };
            plan: any;
            subaccount: {
                currency: any;
            };
            split: any;
            order_id: any;
            paidAt: string;
            pos_transaction_data: any;
            source: any;
            fees_breakdown: any;
        };
        integration: number;
        deducted_amount: number;
        channel: string | null;
        merchant_note: string;
        customer_note: string;
        status: string;
        refunded_by: string;
        expected_at: string;
        currency: string;
        domain: string;
        amount: number;
        fully_deducted: boolean;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export interface ListRefundsReq {
    reference: string;
    currency: string;
    from: string; // Accepts date strings in YYYY-MM-DD format
    to: string;   // Accepts date strings in YYYY-MM-DD format
    perPage: number;
    page: number;
}

export interface SingleRefundInList {
    id: number;
    integration: number;
    domain: string;
    transaction: number;
    dispute: number;
    amount: number;
    deducted_amount: number;
    currency: string;
    channel: string;
    fully_deducted: number;
    refunded_by: string;
    refunded_at: string
    expected_at: string
    settlement: any;
    customer_note: string;
    merchant_note: string;
    created_at: string
    updated_at: string
    status: string
}

export interface ListRefundsRes extends BasicRes {
    data: Array<SingleRefundInList>
}

export interface SingleRefund {
    integration: number;
    transaction: number;
    dispute: any;
    settlement: any;
    domain: string;
    amount: number;
    deducted_amount: number;
    fully_deducted: boolean;
    currency: string;
    channel: string;
    status: string;
    refunded_by: string;
    refunded_at: string;
    expected_at: string;
    customer_note: string;
    merchant_note: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface SingleRefundRes extends BasicRes {
    data: SingleRefund
}