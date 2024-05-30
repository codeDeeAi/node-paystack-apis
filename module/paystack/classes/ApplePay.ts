import { BasicRes } from "../types/common";
import BaseClass from "./Base";
import {
    ListDomainsReq,
    ListDomainsRes
} from "../types/applePay";

/**
* All methods needed for Apple Pay API
* @description The Apple Pay API allows you register your application's top-level domain or subdomain.
* @author Adeola Bada
*/
export default class ApplePay extends BaseClass {

    /**
    * Register a top-level domain or subdomain for your Apple Pay integration.
    * @note This endpoint can only be called with one domain or subdomain at a time.
    * @param {string} domainName Domain name to be registered
    * @returns {Promise<BasicRes>}
    * @throws {Error}
    */
    async registerDomain(domainName: string): Promise<BasicRes> {
        const uri = `${this.options.base_url}/apple-pay/domain`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { domainName: domainName }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Lists all registered domains on your integration. Returns an empty array if no domains have been added.
    * @param {ListDomainsReq} options 
    * @returns {Promise<ListDomainsRes>}
    * @throws {Error}
    */
    async listDomains(options: ListDomainsReq): Promise<ListDomainsRes> {
        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/apple-pay/domain?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListDomainsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Unregister a top-level domain or subdomain previously used for your Apple Pay integration.
    * @param {string} domainName Domain name to be registered 
    * @returns {Promise<BasicRes>}
    * @throws {Error}
    */
    async unregisterDomain(domainName: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/apple-pay/domain`;

        try {

            const config = {
                method: 'delete',
                url: uri,
                headers: this.options.base_api_headers_config,
                data: { domainName: domainName }
            };

            const result = await this.options.axios(config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}