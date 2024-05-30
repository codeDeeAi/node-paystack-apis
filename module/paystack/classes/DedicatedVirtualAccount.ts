import type { BasicRes } from "../types/common";
import {
    CreateDVAccountReq,
    CreateDVAccountRes,
    AssignDVAccountReq,
    ListDVAccountsReq,
    ListDVAccountsRes,
    FetchDVAccountRes,
    RequeryDVAccountReq,
    DeactivateDVAccountRes,
    SplitDVAccountReq,
    SplitDVAccountRes,
    RemoveSplitFromDVAccountRes,
    FetchBankProvidersRes
} from "../types/dva";
import BaseClass from "./Base";

/**
 * All methods needed for Dedicated Virtual Accounts API
 * @description The Dedicated Virtual Account API enables Nigerian merchants to manage unique payment accounts of their customers.
 * @author Adeola Bada
 */
export default class DedicatedVirtualAccount extends BaseClass {


    /**
     * Create a dedicated virtual account for an existing customer
     * @param { CreateDVAccountReq } options 
     * @returns { Promise<CreateDVAccountRes> }
     */
    public createDVAccount = async (options: CreateDVAccountReq): Promise<CreateDVAccountRes> => {
        const uri = `${this.options.base_url}/dedicated_account`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateDVAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    }

    /**
     * With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer.
     * @param {AssignDVAccountReq} options 
     * @returns {Promise<BasicRes>}
     */
    public assignDVAccount = async (options: AssignDVAccountReq): Promise<BasicRes> => {
        const uri = `${this.options.base_url}/dedicated_account/assign`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * List dedicated virtual accounts available on your integration.
     * @param {ListDVAccountsReq} options 
     * @returns {Promise<ListDVAccountsRes>}
     */
    public listDVAccounts = async (options: ListDVAccountsReq): Promise<ListDVAccountsRes> => {
        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/dedicated_account?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListDVAccountsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get details of a dedicated virtual account on your integration.
     * @param {number} dedicated_account_id ID of dedicated virtual account
     * @returns {Promise<FetchDVAccountRes>}
     */
    public fetchDVAccount = async (dedicated_account_id: number): Promise<FetchDVAccountRes> => {
        const uri = `${this.options.base_url}/dedicated_account/${dedicated_account_id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchDVAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Requery Dedicated Account
     * @description Requery Dedicated Virtual Account for new transactions
     * @returns {Promise<BasicRes>}
    */
    public requeryDVAccount = async (options: RequeryDVAccountReq): Promise<BasicRes> => {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/dedicated_account/requery?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Deactivate a dedicated virtual account on your integration.
     * @param {number} dedicated_account_id 
     * @returns {Promise<DeactivateDVAccountRes>}
     */
    public deactivateDVAccount = async (dedicated_account_id: number): Promise<DeactivateDVAccountRes> => {
        const uri = `${this.options.base_url}/dedicated_account/${dedicated_account_id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .delete(`${uri}`, config);

            return result.data as DeactivateDVAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Split Dedicated Account Transaction
     * @description Split a dedicated virtual account transaction with one or more accounts
     * @param {SplitDVAccountReq} options 
     * @returns {Promise<SplitDVAccountRes>}
     */
    public splitDVAccountTransaction = async (options: SplitDVAccountReq): Promise<SplitDVAccountRes> => {
        const uri = `${this.options.base_url}/dedicated_account/split`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as SplitDVAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Remove Split from Dedicated Account
     * @description If you've previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint
     * @param {string} account_number Dedicated virtual account number
     * @returns {Promise<RemoveSplitFromDVAccountRes>}
     */
    public removesplitFromDVAccount = async (account_number: string): Promise<RemoveSplitFromDVAccountRes> => {
        const uri = `${this.options.base_url}/dedicated_account/split`;

        try {

            const config = {
                method: 'delete',
                url: uri,
                headers: this.options.base_api_headers_config,
                maxRedirects: 20,
                data: {
                    account_number: account_number
                }
            };

            const result = await this.options.axios(config);

            return result.data as RemoveSplitFromDVAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get available bank providers for a dedicated virtual account
     * @returns {Promise<FetchBankProvidersRes>}
     */
    public fetchBankProviders = async (): Promise<FetchBankProvidersRes> => {
        const uri = `${this.options.base_url}/dedicated_account/available_providers`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchBankProvidersRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}