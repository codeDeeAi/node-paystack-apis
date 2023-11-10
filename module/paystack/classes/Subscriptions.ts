import BaseClass from "./Base";
import {
    CreateSubscriptionReq,
    CreateSubscriptionRes,
    ListSubscriptionReq,
    ListSubscriptionRes,
    FetchSubscriptionRes,
    GenerateUpdateSubscriptionLinkInterface
} from "../types/subscriptions";
import { BasicRes } from "../types/common";

/**
* All methods needed for Subscriptions API
* @description The Subscriptions API allows you create and manage recurring payment on your integration.
* @author Adeola Bada
*/
export default class Subscriptions extends BaseClass {

    /**
     * Create a subscription on your integration
     * @param {CreateSubscriptionReq} options 
     * @returns {Promise<CreateSubscriptionRes>}
     * @throws {Error}
     */
    async createSubscription(options: CreateSubscriptionReq): Promise<CreateSubscriptionRes> {

        const uri = `${this.options.base_url}/subscription`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateSubscriptionRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * List subscriptions available on your integration
     * @param {ListSubscriptionReq} options 
     * @returns {Promise<ListSubscriptionRes>}
     * @throws {Error}
     */
    async listSubscriptions(options: ListSubscriptionReq): Promise<ListSubscriptionRes> {

        const params = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/subscription?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListSubscriptionRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get details of a subscription on your integration
     * @param {String} id_or_code The subscription ID or code you want to fetch
     * @returns {Promise<FetchSubscriptionRes>}
     * @throws {Error}
     */
    async fetchSubscription(id_or_code: string, token: string): Promise<FetchSubscriptionRes> {

        const uri = `${this.options.base_url}/subscription/${id_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchSubscriptionRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Enable a subscription on your integration
     * @param {String} code Subscription code 
     * @param {String} token Email token
     * @returns {Promise<BasicRes>}
     * @throws {Error}
     */
    async enableSubscription(code: string, token: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/subscription/enable`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, {
                    code: code,
                    token: token
                }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Disable a subscription on your integration
     * @param {String} code Subscription code 
     * @param {String} token Email token
     * @returns {Promise<BasicRes>}
     * @throws {Error}
     */
    async disableSubscription(code: string, token: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/subscription/disable`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, {
                    code: code,
                    token: token
                }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Generate a link for updating the card on a subscription
     * @param {String} code Subscription code
     * @returns {Promise<GenerateUpdateSubscriptionLinkInterface>}
     * @throws {Error}
     */
    async generateUpdateSubscriptionLink(code: string): Promise<GenerateUpdateSubscriptionLinkInterface> {

        const uri = `${this.options.base_url}/subscription/${code}/manage/link`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as GenerateUpdateSubscriptionLinkInterface;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Email a customer a link for updating the card on their subscription
     * @param {String} code Subscription code
     * @returns {Promise<BasicRes>}
     * @throws {Error}
     */
    async sendUpdateSubscriptionLink(code: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/subscription/${code}/manage/email`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, {}, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}