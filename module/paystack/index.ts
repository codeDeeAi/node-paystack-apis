import axios from "axios";
import querystring from 'querystring';
import crypto from 'crypto';
// import { Express, Request, Response } from 'express';
import DedicatedVirtualAccount from "./classes/DedicatedVirtualAccount";
import type { ClassOptionsInterface } from "./types/common";

// const INITIALIZE_URL = `${BASE_URL}/transaction/initialize`;
// const VERIFY_PAYMENT_URL = `${BASE_URL}/transaction/verify`;
// const RESOLVE_ACCOUNT_URL = `${BASE_URL}/bank/resolve`;

/**
 * Paystack Class
 * List of all paystack APIs
 * @author Adeola Bada
 */
export default class Paystack {
    private static dva: DedicatedVirtualAccount;
    private static secret_key: string;
    private static public_key: string;
    private static options: ClassOptionsInterface;

    /**
     * Initialize Paystack Class Instance
     * @param {string} secret_key Secret API Key provided by paystack
     * @param {string} public_key Public API Key provided by paystack
     * @returns {void}
     */
    static init(secret_key: string, public_key: string): void {
        this.secret_key = secret_key;
        this.public_key = public_key;
        this.options = {
            secret_key: this.secret_key,
            public_key: this.public_key,
            base_url: "https://api.paystack.co",
            base_api_headers_config: {
                Authorization: `Bearer ${this.secret_key}`,
                "Cache-Control": "no-cache",
                "content-type": "application/json"
            },
            axios: axios,
            querystring: querystring,
            crypto: crypto
        };

        this.dva = new DedicatedVirtualAccount(this.options)
    }

    /**
     * All methods needed for Dedicated Virtual Accounts API
     * @description The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
     * @returns {DedicatedVirtualAccount}
     * @author Adeola Bada
     */
    static DVA(): DedicatedVirtualAccount {
        return this.dva;
    }
}

