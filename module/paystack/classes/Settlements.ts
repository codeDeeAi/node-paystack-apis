import BaseClass from "./Base";
import {
    ListSettlementsReq,
    ListSettlementsRes,
    ListSettlementsTransReq,
    ListSettlementsTransRes
} from "../types/settlements";

/**
* All methods needed for Settlements API
* @description The Settlements API allows you gain insights into payouts made by Paystack to your bank account.
* @author Adeola Bada
*/
export default class Settlements extends BaseClass {
    /**
    * List settlements made to your settlement accounts
    * @param {ListSettlementsReq} options 
    * @returns {Promise<ListSettlementsRes>}
    * @throws {Error}
    */
    async listSettlements(options: ListSettlementsReq): Promise<ListSettlementsRes> {

        const params = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/settlement?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListSettlementsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get the transactions that make up a particular settlement
     * @param {String} id The settlement ID in which you want to fetch its transactions 
     * @param {ListSettlementsTransReq} options 
     * @returns {Promise<ListSettlementsTransRes>}
     * @throws {Error}
     */
    async listSettlementTransactions(id: string, options: ListSettlementsTransReq): Promise<ListSettlementsTransRes> {

        const params = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/settlement/${id}/transactions?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListSettlementsTransRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}