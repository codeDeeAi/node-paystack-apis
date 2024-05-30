import BaseClass from "./Base";
import {
    CreateRefundReq,
    CreateRefundRes,
    ListRefundsReq,
    ListRefundsRes,
    SingleRefundRes
} from "../types/refunds";

/**
* All methods needed for Refunds API
* @description The Refunds API allows you create and manage transaction refunds.
* @author Adeola Bada
*/
export default class Refunds extends BaseClass {
    /**
       * Initiate a refund on your integration
       * @param {CreateRefundReq} options 
       * @returns {Promise<CreateCustomerRes>}
       * @throws {Error}
       */
    async createRefund(options: CreateRefundReq): Promise<CreateRefundRes> {

        const uri = `${this.options.base_url}/refund`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateRefundRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * List refunds available on your integration
      * @param {ListRefundsReq} options 
      * @returns {Promise<ListRefundsRes>}
      * @throws {Error}
      */
    async listRefunds(options: ListRefundsReq): Promise<ListRefundsRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/refund?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListRefundsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Get details of a refund on your integration
      * @param {string} reference Identifier for transaction to be refunded
      * @returns {Promise<SingleRefundRes>}
      * @throws {Error}
      */
    async fetchRefund(reference: string): Promise<SingleRefundRes> {

        const uri = `${this.options.base_url}/refund/${reference}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as SingleRefundRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}