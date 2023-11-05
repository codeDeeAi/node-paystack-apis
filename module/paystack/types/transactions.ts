import { BasicRes } from "./common";
import { RiskActionEnum, AllNumberMeta } from "./common";

export type PaymentChannel = "card" | "bank" | "ussd" | "qr" | "mobile_money" | "bank_transfer" | "eft";

export type TransactionStatus = "failed" | "success" | "abandoned";

export interface InitializeTransReq {
    amount: string; // Amount should be in the subunit of the supported currency
    email: string; // Customer's email address
    currency?: string; // The transaction currency. Defaults to your integration currency.
    reference?: string; // Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
    callback_url?: string; // Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction
    plan?: string; // If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount
    invoice_limit?: number; // Number of times to charge customer during subscription to plan
    metadata?: string; // Stringified JSON object of custom data. Kindly check the Metadata page for more information.
    channels?: Array<PaymentChannel>; // An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
    split_code?: string; // The split code of the transaction split. e.g. SPL_98WF13Eb3w
    subaccount?: string; // The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
    transaction_charge?: number; // An amount used to override the split configuration for a single split payment. If set, the amount specified goes to the main account regardless of the split configuration.
    bearer?: string; // Who bears Paystack charges? account or subaccount (defaults to account).
}

export interface InitializeTransRes extends BasicRes {
    data: {
        authorization_url: string;
        access_code: string;
        reference: string;
    }
}

export interface LogHistory {
    type: string;
    message: string;
    time: number;
}

export interface Log {
    start_time: number;
    time_spent: number;
    attempts: number;
    errors: number;
    success: boolean;
    mobile: boolean;
    input: Array<any>;
    history: Array<LogHistory>
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
    reusable?: boolean;
    signature?: string;
    account_name: null | string;
}

export interface Customer {
    id: number;
    first_name: null | string;
    last_name: null | string;
    email: string;
    customer_code: string;
    phone: null | string;
    metadata: any;
    risk_action: typeof RiskActionEnum[keyof typeof RiskActionEnum];
    international_format_phone?: null | string;
}

export interface VerifyTransactionRes extends BasicRes {
    data: {
        id: number;
        domain: string;
        status: string;
        reference: string;
        amount: number;
        message: null | string;
        gateway_response: string;
        paid_at: string;
        created_at: string;
        channel: string;
        currency: string;
        ip_address: string;
        metadata: string;
        log: Log,
        fees: number;
        fees_split: any;
        authorization: Authorization
        customer: Customer,
        plan: any;
        split: any;
        order_id: null | string | number;
        paidAt: string;
        createdAt: string;
        requested_amount: number;
        pos_transaction_data: any;
        source: any;
        fees_breakdown: any;
        transaction_date: string;
        plan_object: any;
        subaccount: any;
    }
}


export interface ListTransReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    customer?: number; // Specify an ID for the customer whose transactions you want to retrieve
    terminalid?: string; // The Terminal ID for the transactions you want to retrieve
    status?: TransactionStatus; //  Filter transactions by status ('failed', 'success', 'abandoned')
    from?: string; // A timestamp from which to start listing transaction e.g. 2016 -09 - 24T00:00:05.000Z, 2016 -09 - 21
    to?: string; // A timestamp at which to stop listing transaction e.g. 2016 -09 - 24T00:00:05.000Z, 2016 -09 - 21
    amount?: number; // Filter transactions by amount using the supported currency code
}

export interface TransInList {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: null | string;
    gateway_response: string;
    paid_at: null | string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: null | string,
    metadata: any;
    log?: any;
    timeline?: any;
    fees: any;
    paidAt: string;
    createdAt: string;
    authorization: Authorization,
    customer: Customer;
    plan?: any;
    requested_amount: number;
}

export interface ListTransRes extends BasicRes {
    data: Array<TransInList>;
    meta: AllNumberMeta
}

export interface FetchTransRes extends BasicRes {
    data: {
        id: number;
        domain: string;
        status: string;
        reference: string;
        amount: number;
        message: null | string;
        gateway_response: string;
        paid_at: string;
        created_at: string;
        channel: string;
        currency: string;
        ip_address: string;
        metadata: any;
        log: Log,
        fees: number;
        fees_split: any;
        authorization: Authorization
        customer: Customer;
        plan: any;
        subaccount: any;
        order_id: null | string | number;
        paidAt: string;
        createdAt: string;
        requested_amount: number;
    }
}

export interface ChargeAuthorizationReq {
    amount: string; // Amount should be in the subunit of the supported currency
    email: string; // Customer's email address
    authorization_code: string; // Valid authorization code to charge
    reference?: string; // Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
    currency?: string; // Currency in which amount should be charged.
    metadata?: string; // Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard. Sample: {"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}
    channels?: Array<'card' | 'bank'>; // Send us 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying
    subaccount?: string; // The code for the subaccount that owns the payment. e.g. ACCT_8f4s1eq7ml6rlzj
    transaction_charge?: number; // A flat fee to charge the subaccount for this transaction in the subunit of the supported currency. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates (since subaccount creation only allows for percentage split).
    bearer?: "account" | "subaccount"; // Who bears Paystack charges? account or subaccount (defaults to account).
    queue?: boolean; // If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. Send queue:true to take advantage of our queued charging.
}

export interface ChargeAuthorizationRes extends BasicRes {
    data: {
        amount: number;
        currency: string;
        transaction_date: string;
        status: string;
        reference: string;
        domain: string;
        metadata: string;
        gateway_response: string;
        message: null | string;
        channel: string;
        ip_address: null | string;
        log: null | Log,
        fees: number;
        authorization: Authorization;
        customer: Customer;
        plan: any;
        id: number;
    }
}

export interface ViewTransactionTimelineRes extends BasicRes {
    data: {
        time_spent: number;
        attempts: number;
        authentication: any;
        errors: number;
        success: boolean;
        mobile: boolean;
        input: Array<any>;
        channel: string;
        history: Array<LogHistory>
    }
}

export interface TransactionTotalsReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    from?: string; // A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
    to?: string; // A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21
}

export interface CurrencyAmount {
    currency: string;
    amount: number;
}

export interface TransactionTotalsRes extends BasicRes {
    data: {
        total_transactions: number;
        unique_customers: number;
        total_volume: number;
        total_volume_by_currency: Array<CurrencyAmount>;
        pending_transfers: number;
        pending_transfers_by_currency: Array<CurrencyAmount>;
    }
}

export interface ExportTransactionsReq extends TransactionTotalsReq {
    customer?: number; // Specify an ID for the customer whose transactions you want to retrieve
    status?: TransactionStatus; // Filter transactions by status ('failed', 'success', 'abandoned')
    currency?: string; // Specify the transaction currency to export
    amount?: number; // Filter transactions by amount, using the supported currency
    settled?: boolean; // Set to true to export only settled transactions. false for pending transactions. Leave undefined to export all transactions
    settlement?: number; // An ID for the settlement whose transactions we should export
    payment_page?: number; // Specify a payment page's id to export only transactions conducted on said page
}

export interface ExportTransactionsRes extends BasicRes {
    data: {
        path: string;
    }
}


export interface PartialDebitReq {
    authorization_code: string; // Authorization Code
    currency: string; // Specify the currency you want to debit. Allowed values are NGN or GHS.
    amount: string; // Amount should be in the subunit of the supported currency
    email: string; // Customer's email address (attached to the authorization code)
    reference?: string; // Unique transaction reference. Only -, ., = and alphanumeric characters allowed.
    at_least?: string; // Minimum amount to charge
}

export interface PartialDebitRes extends BasicRes {
    data: {
        amount: number;
        currency: string;
        transaction_date: string;
        status: string;
        reference: string;
        domain: string;
        metadata: string;
        gateway_response: string;
        message: null,
        channel: string;
        ip_address: null,
        log: null | Log,
        fees: number;
        authorization: Authorization;
        customer: Customer;
        plan: number;
        requested_amount: number;
        id: number;
    }
}