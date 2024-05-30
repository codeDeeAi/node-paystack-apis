import { RiskActionEnum, BasicRes } from "./common"; 

export interface CreateDVAccountReq {
    customer: string;
    preferred_bank?: string;
    subaccount?: string;
    split_code?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
}

export interface CreateDVAccountRes extends BasicRes {
    data: {
        bank: {
            name: string;
            id: number;
            slug: string;
        },
        account_name: string;
        account_number: string;
        assigned: boolean;
        currency: string;
        metadata: any;
        active: boolean
        id: number;
        created_at: string;
        updated_at: string;
        assignment: {
            integration: number;
            assignee_id: number;
            assignee_type: string;
            expired: boolean;
            account_type: string;
            assigned_at: string;
        },
        customer: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            customer_code: string;
            phone: string;
            risk_action: typeof RiskActionEnum[keyof typeof RiskActionEnum];
        }
    }
}

export interface AssignDVAccountReq {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    preferred_bank: string;
    country: string;
    account_number?: string;
    bvn?: string;
    bank_code?: string;
    subaccount?: string;
    split_code?: string;
}

export interface ListDVAccountsReq {
    active: boolean;
    currency: string;
    provider_slug: string;
    bank_id: string;
    customer: string;
}

export interface ListDVAccountsRes extends BasicRes {
    data:
    {
        customer: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            customer_code: string;
            phone: string;
            risk_action: typeof RiskActionEnum[keyof typeof RiskActionEnum];
            international_format_phone: null | string;
        },
        bank: {
            name: string;
            id: number;
            slug: string;
        },
        id: number;
        account_name: string;
        account_number: string;
        created_at: string;
        updated_at: string;
        currency: string;
        split_config: {
            subaccount: string;
        },
        active: boolean;
        assigned: boolean;
    }[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}

export interface FetchDVAccountRes extends BasicRes {
    data: {
        transactions: Array<any>;
        subscriptions: Array<any>;
        authorizations: Array<any>;
        first_name: null | string;
        last_name: null | string;
        email: string;
        phone: null | string;
        metadata: any;
        domain: string;
        customer_code: string;
        risk_action: typeof RiskActionEnum[keyof typeof RiskActionEnum]
        id: number;
        integration: number;
        createdAt: string;
        updatedAt: string;
        created_at: string;
        updated_at: string;
        total_transactions: number;
        total_transaction_value: Array<any>,
        dedicated_account: {
            id: number;
            account_name: string;
            account_number: string;
            created_at: string;
            updated_at: string;
            currency: string;
            active: true,
            assigned: true,
            provider: {
                id: number;
                provider_slug: string;
                bank_id: number;
                bank_name: string;
            },
            assignment: {
                assignee_id: number;
                assignee_type: string;
                account_type: string;
                integration: number;
            }
        }
    }
}

export interface RequeryDVAccountReq {
    account_number: string;
    provider_slug: string;
    date?: string; // YYYY-MM-DD
}

export interface DeactivateDVAccountRes extends BasicRes {
    data: {
        bank: {
            name: string;
            id: number;
            slug: string;
        };
        account_name: string;
        account_number: string;
        assigned: boolean;
        currency: string;
        metadata: any;
        active: boolean;
        id: number;
        created_at: string;
        updated_at: string;
        assignment: {
            assignee_id: number;
            assignee_type: string;
            assigned_at: string;
            integration: number;
            account_type: string;
        }
    }
}

export interface SplitDVAccountReq {
    customer: string;
    subaccount?: string;
    split_code?: string;
    preferred_bank?: string;
}
export interface SplitDVAccountRes extends BasicRes {
    data: {
        bank: {
            name: string;
            id: number;
            slug: string;
        },
        account_name: string;
        account_number: string;
        assigned: boolean;
        currency: string;
        metadata: any;
        active: boolean;
        id: number;
        created_at: string;
        updated_at: string;
        assignment: {
            integration: number;
            assignee_id: number;
            assignee_type: number;
            expired: false,
            account_type: number;
            assigned_at: number;
            expired_at: null | string;
        },
        split_config: {
            split_code: string;
        },
        customer: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            customer_code: string;
            phone: null | string;
            metadata: any;
            risk_action: typeof RiskActionEnum[keyof typeof RiskActionEnum]
        }
    }
}
export interface RemoveSplitFromDVAccountRes extends BasicRes {
    data: {
        id: number;
        split_config: any;
        account_name: string;
        account_number: string;
        currency: string;
        assigned: boolean;
        active: boolean;
        createdAt: string;
        updatedAt: string;
    }
}

export interface BankProvider {
    provider_slug: string;
    bank_id: number;
    bank_name: string;
    id: number;
}
export interface FetchBankProvidersRes extends BasicRes {
    data: Array<BankProvider>
}