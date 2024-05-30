import BaseClass from "./Base";
import { IntegrationTimeoutRes } from "../types/integration";

/**
* All methods needed for Integration API
* @description The Integration API allows you manage some settings on your integration.
* @author Adeola Bada
*/
export default class Integration extends BaseClass {
    /**
     * Fetch the payment session timeout on your integration
     * @returns {Promise<IntegrationTimeoutRes>}
     */
    async fetchTimeout(
    ): Promise<IntegrationTimeoutRes> {

        const uri = `${this.options.base_url}/integration/payment_session_timeout`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as IntegrationTimeoutRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Update the payment session timeout on your integration
     * @param {Number} timeout before stopping session (in seconds). Set to 0 to cancel session timeouts
     * @returns {Promise<IntegrationTimeoutRes>}
     */
    async updateTimeout(timeout: number): Promise<IntegrationTimeoutRes> {

        const uri = `${this.options.base_url}/integration/payment_session_timeout`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, { timeout: timeout }, config);

            return result.data as IntegrationTimeoutRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}