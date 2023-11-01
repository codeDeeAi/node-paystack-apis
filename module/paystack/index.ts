import axios from "axios";
import querystring from 'querystring';
import crypto from 'crypto';
// import { Express, Request, Response } from 'express';
import DedicatedVirtualAccount from "./classes/DedicatedVirtualAccount";
import Customers from "./classes/Customers";
import type { ClassOptionsInterface } from "./types/common";
import Miscellaneous from "./classes/Miscellaneous";
import Transactions from "./classes/Transactions";
import TransactionSplits from "./classes/TransactionSplits";
import Terminal from "./classes/Terminal";
import ApplePay from "./classes/ApplePay";
import Subaccounts from "./classes/Subaccounts";
import Plans from "./classes/Plans";
import Subscriptions from "./classes/Subscriptions";
import Products from "./classes/Products";
import PaymentPages from "./classes/PaymentPages";
import Settlements from "./classes/Settlements";
import TransfersRecipients from "./classes/TransfersReceipients";
import Transfers from "./classes/Transfers";
import TransfersControl from "./classes/TransfersControl";
import BulkCharges from "./classes/BulkCharges";
import Integration from "./classes/Integration";
import Charge from "./classes/Charge";
import Disputes from "./classes/Disputes";
import Refunds from "./classes/Refunds";
import Verification from "./classes/Verification";
import PaymentRequests from "./classes/PaymentRequests";

// const INITIALIZE_URL = `${BASE_URL}/transaction/initialize`;
// const VERIFY_PAYMENT_URL = `${BASE_URL}/transaction/verify`;
// const RESOLVE_ACCOUNT_URL = `${BASE_URL}/bank/resolve`;

/**
 * Paystack Class
 * List of all paystack APIs
 * @author Adeola Bada
 */
export default class Paystack {
    private static secret_key: string;
    private static public_key: string;
    private static options: ClassOptionsInterface;
    private static transactions: Transactions;
    private static transaction_splits: TransactionSplits;
    private static terminal: Terminal;
    private static customers: Customers;
    private static dva: DedicatedVirtualAccount;
    private static apple_pay: ApplePay;
    private static subaccounts: Subaccounts;
    private static plans: Plans;
    private static subscriptions: Subscriptions;
    private static products: Products;
    private static payment_pages: PaymentPages;
    private static payment_requests: PaymentRequests;
    private static settlements: Settlements;
    private static transferrecipients: TransfersRecipients;
    private static transfers: Transfers;
    private static transferscontrol: TransfersControl;
    private static bulk_charges: BulkCharges;
    private static integration: Integration;
    private static charge: Charge;
    private static disputes: Disputes;
    private static refunds: Refunds;
    private static verification: Verification;
    private static miscellaneous: Miscellaneous;
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
        } as ClassOptionsInterface;

        this.transactions = new Transactions(this.options)
        this.transaction_splits = new TransactionSplits(this.options)
        this.terminal = new Terminal(this.options);
        this.customers = new Customers(this.options);
        this.dva = new DedicatedVirtualAccount(this.options);
        this.apple_pay = new ApplePay(this.options);
        this.subaccounts = new Subaccounts(this.options);
        this.plans = new Plans(this.options);
        this.subscriptions = new Subscriptions(this.options);
        this.products = new Products(this.options);
        this.payment_pages = new PaymentPages(this.options);
        this.payment_requests = new PaymentRequests(this.options);
        this.settlements = new Settlements(this.options);
        this.transferrecipients = new TransfersRecipients(this.options);
        this.transfers = new Transfers(this.options);
        this.transferscontrol = new TransfersControl(this.options);
        this.bulk_charges = new BulkCharges(this.options);
        this.integration = new Integration(this.options);
        this.charge = new Charge(this.options);
        this.disputes = new Disputes(this.options);
        this.refunds = new Refunds(this.options);
        this.verification = new Verification(this.options);
        this.miscellaneous = new Miscellaneous(this.options);
    }

    /**
     * All methods needed for Transactions API
     * @description The Transactions API allows you create and manage payments on your integration.
     * @returns {Transactions}
     * @author Adeola Bada
     */
    static Transactions(): Transactions {
        return this.transactions;
    }

    /**
     * All methods needed for Transaction Splits API
     * @description The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
     * @returns {TransactionSplits}
     * @author Adeola Bada
     */
    static TransactionSplits(): TransactionSplits {
        return this.transaction_splits;
    }

    /**
     * All methods needed for Terminal API
     * @description The Terminal API allows you to build delightful in-person payment experiences.
     * @returns {Terminal}
     * @author Adeola Bada
     */
    static Terminal(): Terminal {
        return this.terminal;
    }

    /**
    * All methods needed for Customers API
    * @description The Customers API allows you create and manage customers on your integration.
    * @returns {Customers}
    * @author Adeola Bada
    */
    static Customers(): Customers {
        return this.customers;
    }

    /**
     * All methods needed for Dedicated Virtual Accounts API
     * @description The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
     * @returns {DedicatedVirtualAccount}
     * @author Adeola Bada
     */
    static DedicatedVirtualAccounts(): DedicatedVirtualAccount {
        return this.dva;
    }

    /**
     * All methods needed for Apple Pay API
     * @description The Apple Pay API allows you register your application's top-level domain or subdomain.
     * @returns {ApplePay}
     * @author Adeola Bada
     */
    static ApplePay(): ApplePay {
        return this.apple_pay;
    }

    /**
     * All methods needed for Subaccounts API
     * @description The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
     * @returns {Subaccounts}
     * @author Adeola Bada
     */
    static Subaccounts(): Subaccounts {
        return this.subaccounts;
    }

    /**
     * All methods needed for Plans API
     * @description The Plans API allows you create and manage installment payment options on your integration.
     * @returns {Plans}
     * @author Adeola Bada
     */
    static Plans(): Plans {
        return this.plans;
    }

    /**
     * All methods needed for Subscriptions API
     * @description The Subscriptions API allows you create and manage recurring payment on your integration.
     * @returns {Subscriptions}
     * @author Adeola Bada
     */
    static Subscriptions(): Subscriptions {
        return this.subscriptions;
    }

    /**
     * All methods needed for Products API
     * @description The Products API allows you create and manage inventories on your integration.
     * @returns {Products}
     * @author Adeola Bada
     */
    static Products(): Products {
        return this.products;
    }
    
    /**
     * All methods needed for Payment Pages API
     * @description The Payment Pages API provides a quick and secure way to collect payment for products.
     * @returns {PaymentPages}
     * @author Adeola Bada
     */
    static PaymentPages(): PaymentPages {
        return this.payment_pages;
    }
    
    /**
     * All methods needed for Payment Requests API
     * @description The Payment Requests API allows you manage requests for payment of goods and services.
     * @returns {PaymentRequests}
     * @author Adeola Bada
     */
    static PaymentRequests(): PaymentRequests {
        return this.payment_requests;
    }
    
    /**
     * All methods needed for Settlements API
     * @description The Settlements API allows you gain insights into payouts made by Paystack to your bank account.
     * @returns {Settlements}
     * @author Adeola Bada
     */
    static Settlements(): Settlements {
        return this.settlements;
    }
    
    /**
     * All methods needed for Transfer Recipients API
     * @description The Transfer Recipients API allows you create and manage beneficiaries that you send money to.
     * @returns {TransfersRecipients}
     * @author Adeola Bada
     */
    static TransferReceipients(): TransfersRecipients {
        return this.transferrecipients;
    }
    
    /**
     * All methods needed for Transfers API
     * @description The Transfers API allows you automate sending money to your customers.
     * @returns {Transfers}
     * @author Adeola Bada
     */
    static Transfers(): Transfers {
        return this.transfers;
    }
    
    /**
     * All methods needed for Transfers Control API
     * @description The Transfers Control API allows you manage settings of your transfers.
     * @returns {TransfersControl}
     * @author Adeola Bada
     */
    static TransfersControl(): TransfersControl {
        return this.transferscontrol;
    }
    
    /**
     * All methods needed for Bulk Charges API
     * @description The Bulk Charges API allows you create and manage multiple recurring payments from your customers.
     * @returns {BulkCharges}
     * @author Adeola Bada
     */
    static BulkCharges(): BulkCharges {
        return this.bulk_charges;
    }
    
    /**
     * All methods needed for Integration API
     * @description The Integration API allows you manage some settings on your integration.
     * @returns {Integration}
     * @author Adeola Bada
     */
    static Integration(): Integration {
        return this.integration;
    }
    
    /**
     * All methods needed for Charge API
     * @description The Charge API allows you to configure payment channel of your choice when initiating a payment.
     * @author Adeola Bada
     */
    static Charge(): Charge {
        return this.charge;
    }
    
    /**
     * All methods needed for Disputes API
     * @description The Disputes API allows you manage transaction disputes on your integration.
     * @returns {Disputes}
     * @author Adeola Bada
     */
    static Disputes(): Disputes {
        return this.disputes;
    }
    
    /**
     * All methods needed for Refunds API
     * @description The Refunds API allows you create and manage transaction refunds.
     * @returns {Refunds}
     * @author Adeola Bada
     */
    static Refunds(): Refunds {
        return this.refunds;
    }
    
    /**
     * All methods needed for Verification API
     * @description The Verification API allows you perform KYC processes.
     * @returns {Verification}
     * @author Adeola Bada
     */
    static Verification(): Verification {
        return this.verification;
    }

    /**
    * All methods needed for Miscellaneous API
    * @description The Miscellaneous API are supporting APIs that can be used to provide more details to other APIs.
    * @returns {Miscellaneous}
    * @author Adeola Bada
    */
    static Miscellaneous(): Miscellaneous {
        return this.miscellaneous;
    }
}
