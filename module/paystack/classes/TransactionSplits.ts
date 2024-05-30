import BaseClass from "./Base";
import { BasicRes } from "../types/common";
import {
    CreateSplitReq,
    CreateSplitRes,
    ListSplitsReq,
    ListSplitsRes,
    UpdateSplitReq,
    UpdateSplitRes,
    AddOrUpdateSplitSubaccountReq,
    AddOrUpdateSplitSubaccountRes,
    FetchSplitRes
} from "../types/transactionSplit";

/**
* All methods needed for Transaction Splits API
* @description The Transaction Splits API enables merchants split the settlement for a transaction across their payout account, and one or more subaccounts.
* @author Adeola Bada
*/
export default class TransactionSplits extends BaseClass {
    /**
     * Create a split payment on your integration
     * @param {CreateSplitReq} options
     * @returns {Promise<CreateSplitRes>}
     * @throws {Error}
     */
    async createSplit(options: CreateSplitReq): Promise<CreateSplitRes> {

        const uri = `${this.options.base_url}/split`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateSplitRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * List the transaction splits available on your integration
    * @param {ListSplitsReq} options
    * @returns {Promise<ListSplitsRes>}
    * @throws {Error}
    */
    async listSplit(options: ListSplitsReq): Promise<ListSplitsRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options }); 

        const uri = `${this.options.base_url}/split?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListSplitsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Get details of a split on your integration
    * @param {String} id Split Id
    * @returns {Promise<FetchSplitRes>}
    * @throws {Error}
    */
    async fetchSplit(id: string): Promise<FetchSplitRes> {

        const uri = `${this.options.base_url}/split/${id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchSplitRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Update a transaction split details on your integration
    * @param {String} id Split Id
    * @param {UpdateSplitReq} options 
    * @returns {Promise<UpdateSplitRes>}
    * @throws {Error}
    */
    async updateSplit(id: string, options: UpdateSplitReq): Promise<UpdateSplitRes> {

        const uri = `${this.options.base_url}/split/${id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, options, config);

            return result.data as UpdateSplitRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split
    * @param {String} id Split Id
    * @param {String} subaccount This is the sub account code
    * @param {Number} share This is the transaction share for the subaccount
    * @returns {Promise<AddOrUpdateSplitSubaccountRes>}
    * @throws {Error}
    */
    async addOrUpdateSubaccountSplit(id: string, subaccount: string, share: number): Promise<AddOrUpdateSplitSubaccountRes> {

        const uri = `${this.options.base_url}/split/${id}/subaccount/add`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { subaccount: subaccount, share: share }, config);

            return result.data as AddOrUpdateSplitSubaccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Remove a subaccount from a transaction split
     * @param {String} id Split Id
     * @param {String} subaccount This is the sub account code
     * @returns {Promise<BasicRes>}
     * @throws {Error}
     */
    async removeSubaccountFromSplit(id: string, subaccount: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/split/${id}/subaccount/remove`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { subaccount: subaccount }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}