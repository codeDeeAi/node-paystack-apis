import {
    ListCountryRes,
    ListStatesRes,
    ListBanksReq,
    ListBanksRes
} from "../types/miscellaneous"
import BaseClass from "./Base";

/**
* All methods needed for Miscellaneous API
* @description The Miscellaneous API are supporting APIs that can be used to provide more details to other APIs.
* @author Adeola Bada
*/
export default class Miscellaneous extends BaseClass {

    /**
     * List all supported countries
     * @returns {Promise<ListCountryRes>}
     */
    async listCountries(
    ): Promise<ListCountryRes> {

        const uri = `${this.options.base_url}/country`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * List all country states
     * @param {string} country_code Country Code
     * @returns {Promise<ListCountryRes>}
     */
    async listStates(
        country_code: string
    ): Promise<ListStatesRes> {
        const uri = `${this.options.base_url}/address_verification/states?country=${country_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    }

    /**
     * List Banks
     * @param {ListBanksReq} options Fetch Banks options
     * @returns {Promise<ListBanksRes>}
     */
    async listBanks(
        options: ListBanksReq
    ): Promise<ListBanksRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/bank?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    }
}