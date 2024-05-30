import BaseClass from "./Base";
import {
    CreateSubacountReq,
    CreateSubacountRes,
    ListSubaccountsReq,
    ListSubaccountsRes,
    FetchSubaccountRes,
    UpdateSubaccountReq,
    UpdateSubaccountRes
} from "../types/subaccounts";

/**
* All methods needed for Subaccounts API
* @description The Subaccounts API allows you create and manage subaccounts on your integration. Subaccounts can be used to split payment between two accounts (your main account and a sub account).
* @author Adeola Bada
*/
export default class Subaccounts extends BaseClass {
    /**
      * Create a subacount on your integration
      * @param {CreateSubacountReq} options 
      * @returns {Promise<CreateSubacountRes>}
      * @throws {Error}
      */
    async createSubaccount(options: CreateSubacountReq): Promise<CreateSubacountRes> {

        const uri = `${this.options.base_url}/subaccount`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateSubacountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * List subaccounts available on your integration
      * @param {ListSubaccountsReq} options 
      * @returns {Promise<ListSubaccountsRes>}
      * @throws {Error}
      */
    async listSubaccounts(options: ListSubaccountsReq): Promise<ListSubaccountsRes> {

        const params = this.options.querystring.stringify({ ...options })

        const uri = `${this.options.base_url}/subaccount?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListSubaccountsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Get details of a subaccount on your integration
      * @param {String} id_or_code The subaccount ID or code you want to fetch
      * @returns {Promise<FetchSubaccountRes>}
      * @throws {Error}
      */
    async fetchSubaccount(id_or_code: string): Promise<FetchSubaccountRes> {

        const uri = `${this.options.base_url}/subaccount/${id_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchSubaccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Update a subaccount details on your integration
      * @param {String} id_or_code Subaccount's ID or code
      * @param {UpdateSubaccountReq} options
      * @returns {Promise<UpdateSubaccountRes>}
      * @throws {Error}
      */
    async updateSubaccount(id_or_code: string, options: UpdateSubaccountReq): Promise<UpdateSubaccountRes> {

        const uri = `${this.options.base_url}/subaccount/${id_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, options, config);

            return result.data as UpdateSubaccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}