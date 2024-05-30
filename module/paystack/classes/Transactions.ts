import BaseClass from "./Base";
import {
    InitializeTransReq,
    InitializeTransRes,
    VerifyTransactionRes,
    ListTransReq,
    ListTransRes,
    FetchTransRes,
    ChargeAuthorizationReq,
    ChargeAuthorizationRes,
    ViewTransactionTimelineRes,
    TransactionTotalsReq,
    TransactionTotalsRes,
    ExportTransactionsReq,
    ExportTransactionsRes,
    PartialDebitReq,
    PartialDebitRes
} from "../types/transactions";

/**
* All methods needed for Transactions API
* @description The Transactions API allows you create and manage payments on your integration.
* @author Adeola Bada
*/
export default class Transactions extends BaseClass {

    /**
    * Initialize a transaction from your backend
    * @param {InitializeTransReq} options
    * @returns {Promise<InitializeTransRes>}
    * @throws {Error}
    */
    async initializeTransaction(options: InitializeTransReq): Promise<InitializeTransRes> {
        const uri = `${this.options.base_url}/transaction/initialize`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as InitializeTransRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Confirm the status of a transaction
    * @param {string} reference The transaction reference used to intiate the transaction
    * @returns {Promise<VerifyTransactionRes>}
    * @throws {Error}
    */
    async verifyTransaction(reference: string): Promise<VerifyTransactionRes> {
        const uri = `${this.options.base_url}/transaction/verify/${reference}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as VerifyTransactionRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * List transactions carried out on your integration
    * @param {ListTransReq} options T
    * @returns {Promise<ListTransRes>}
    * @throws {Error}
    */
    async listTransactions(options: ListTransReq): Promise<ListTransRes> {
        const stringifiedParams = this.options.querystring.stringify({ ...options })
        const uri = `${this.options.base_url}/transaction?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListTransRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Get details of a transaction carried out on your integration
    * @param {number} id An ID for the transaction to fetch
    * @returns {Promise<FetchTransRes>}
    * @throws {Error}
    */
    async fetchTransaction(id: number): Promise<FetchTransRes> {

        const uri = `${this.options.base_url}/transaction/${id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchTransRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * All authorizations marked as reusable can be charged with this endpoint whenever you need to receive payments
    * @param {ChargeAuthorizationReq} options
    * @returns {Promise<ChargeAuthorizationRes>}
    * @throws {Error}
    */
    async chargeAuthorization(options: ChargeAuthorizationReq): Promise<ChargeAuthorizationRes> {

        const uri = `${this.options.base_url}/transaction/charge_authorization`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as ChargeAuthorizationRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * View the timeline of a transaction
    * @param {string} id_or_reference The ID or the reference of the transaction
    * @returns {Promise<ViewTransactionTimelineRes>}
    * @throws {Error}
    */
    async viewTransactionTimeline(id_or_reference: string): Promise<ViewTransactionTimelineRes> {

        const uri = `${this.options.base_url}/transaction/timeline/${id_or_reference}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ViewTransactionTimelineRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Total amount received on your account
    * @param {TransactionTotalsReq} options
    * @returns {Promise<TransactionTotalsRes>}
    * @throws {Error}
    */
    async transactionTotals(options: TransactionTotalsReq): Promise<TransactionTotalsRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/transaction/totals?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as TransactionTotalsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Export a list of transactions carried out on your integration
    * @param {ExportTransactionsReq} options
    * @returns {Promise<ExportTransactionsRes>}
    * @throws {Error}
    */
    async exportTransactions(options: ExportTransactionsReq): Promise<ExportTransactionsRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/transaction/export?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ExportTransactionsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Retrieve part of a payment from a customer
    * @param {PartialDebitReq} options
    * @returns {Promise<PartialDebitRes>}
    * @throws {Error}
    */
    async partialDebit(options: PartialDebitReq): Promise<PartialDebitRes> {

        const uri = `${this.options.base_url}/transaction/partial_debit`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as PartialDebitRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}