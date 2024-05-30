import { AllNumberMeta, BasicRes } from "./common";
import { Authorization } from "./plans";

export interface Customer {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    metadata: any;
    domain: string;
    customer_code: string;
    risk_action: string;
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
}

export interface Plan {
    domain: string;
    name: string;
    plan_code: string;
    description: string;
    amount: number;
    interval: string;
    send_invoices: boolean;
    send_sms: boolean;
    hosted_page: boolean;
    hosted_page_url: string | null;
    hosted_page_summary: string | null;
    currency: string;
    migrate: any; // You may want to change this to the correct type if applicable
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
}

export interface Subscription {
    customer: Customer;
    plan: Plan;
    integration: number;
    authorization: Authorization;
    domain: string;
    start: number;
    status: string;
    quantity: number;
    amount: number;
    subscription_code: string;
    email_token: string;
    easy_cron_id: string;
    cron_expression: string;
    next_payment_date: string;
    open_invoice: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateSubscriptionReq {
    customer: string; // Customer's email address or customer code
    plan: string; // Plan code
    authorization?: string; // If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used
    start_date?: string; // Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00
}

export interface CreateSubscriptionRes extends BasicRes {
    data: {
        customer: number;
        plan: number;
        integration: number;
        domain: string;
        start: number;
        status: string;
        quantity: number;
        amount: number;
        authorization: Authorization;
        subscription_code: string;
        email_token: string;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export interface ListSubscriptionReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page?: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    customer?: number; // Filter by Customer ID
    plan?: number; // Filter by Plan ID
}

export interface ListSubscriptionRes extends BasicRes {
    data: Array<Subscription>;
    meta: AllNumberMeta;
}

export interface FetchSubscriptionRes extends BasicRes {
    data: {
        invoices: any[];
        customer: Customer;
        plan: Plan;
        integration: number;
        authorization: Authorization;
        domain: string;
        start: number;
        status: string;
        quantity: number;
        amount: number;
        subscription_code: string;
        email_token: string;
        easy_cron_id: string | null;
        cron_expression: string;
        next_payment_date: string;
        open_invoice: string | null;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export interface GenerateUpdateSubscriptionLinkInterface extends BasicRes {
    data: {
        link: string;
    }
}