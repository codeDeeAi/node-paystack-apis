import { BasicRes } from "./common";

export type PlanInterval = "daily" | "weekly" | "monthly" | "quarterly" | "biannually" | "annually";

export interface CreatePlanReq {
    name: string; // Name of plan
    amount: number; // Amount should be in the subunit of the supported currency
    interval: PlanInterval;
    description?: string; // A description for this plan
    send_invoices?: boolean; // Set to false if you don't want invoices to be sent to your customers
    send_sms?: string; // Set to false if you don't want text messages to be sent to your customers
    currency?: string; // Currency in which amount is set
    invoice_limit?: number; // Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing.
}

export interface CreatePlanRes extends BasicRes {
    data: {
        name: string;
        amount: number;
        interval: string;
        integration: number;
        domain: string;
        plan_code: string;
        send_invoices: boolean;
        send_sms: boolean;
        hosted_page: boolean;
        currency: string;
        id: number;
        createdAt: string;
        updatedAt: string;
    }
}

export interface ListPlanReq {
    perPage: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    page: number; // Specify exactly what page you want to retrieve. If not specify we use a default value of 1.
    status?: string; // Filter list by plans with specified status
    interval?: PlanInterval; // Filter list by plans with specified interval
    amount?: number; // Filter list by plans with specified amount using the supported currency
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
    account_name: string;
}

export interface Subscription {
    customer: number;
    plan: number;
    integration: number;
    domain: string;
    start: number;
    status: string;
    quantity: number;
    amount: number;
    subscription_code: string;
    email_token: string;
    authorization: Authorization;
    easy_cron_id: null | string | number;
    cron_expression: string;
    next_payment_date: string;
    open_invoice: any;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface Plan {
    subscriptions: Array<Subscription>
    integration: string;
    domain: string;
    name: string;
    plan_code: string;
    description: null | string;
    amount: number;
    interval: PlanInterval | string;
    send_invoices: boolean;
    send_sms: boolean;
    hosted_page: boolean;
    hosted_page_url: null | string;
    hosted_page_summary: null | string;
    currency: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface ListPlanRes extends BasicRes {

    data: Array<Plan>;
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    }
}

export interface FetchPlanRes extends BasicRes {
    data: Plan
}

export interface UpdatePlanReq {
    name: string; // Name of plan
    amount: number; // Amount should be in the subunit of the supported currency
    interval: PlanInterval; // Interval in words. Valid intervals are hourly, daily, weekly, monthly,quarterly, biannually (every 6 months), annually.
    description?: string; // A description for this plan
    send_invoices?: boolean; // Set to false if you don't want invoices to be sent to your customers
    send_sms?: string | boolean; // Set to false if you don't want text messages to be sent to your customers
    currency?: string; // Currency in which amount is set
    invoice_limit?: number; // Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing.
}
