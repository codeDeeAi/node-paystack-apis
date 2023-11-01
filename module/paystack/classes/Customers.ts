import type { BasicRes } from "../types/common";
import {
    CreateCustomerReq,
    CreateCustomerRes,
    ListCustomersReq,
    ListCustomersRes,
    CustomerDetInterface,
    UpdateCustomerReq,
    UpdateCustomerRes,
    ValidateCustomerReq,
    ValidateCustomerRes,
    WhitelistOrBlacklistCustomerReq,
    WhitelistOrBlacklistCustomerRes
} from "../types/customers"
import BaseClass from "./Base";

/**
* All methods needed for Customers API
* @description The Customers API allows you create and manage customers on your integration.
* @author Adeola Bada
*/
export default class Customers extends BaseClass {

    /**
     * Create a customer on your integration
     * @param {CreateCustomerReq} options 
     * @returns {Promise<CreateCustomerRes>}
     * @throws {Error}
     */
    async createCustomer(options: CreateCustomerReq): Promise<CreateCustomerRes> {

        const uri = `${this.options.base_url}/customer`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateCustomerRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * List customers available on your integration.
     * @param {ListCustomersReq} options 
     * @returns {Promise<ListCustomersRes>}
     * @throws {Error}
     */
    async listCustomers(options: ListCustomersReq): Promise<ListCustomersRes> {

        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/customer?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListCustomersRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get details of a customer on your integration.
     * @param {String} email_or_code 
     * @returns {Promise<CustomerDetInterface>}
     * @throws {Error}
     */
    async fetchCustomer(email_or_code: string): Promise<CustomerDetInterface> {

        const uri = `${this.options.base_url}/customer/${email_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as CustomerDetInterface;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Update a customer's details on your integration
     * @param {String} code Customer's code
     * @param {UpdateCustomerReq} options 
     * @returns {Promise<UpdateCustomerRes>}
     * @throws {Error}
     */
    async updateCustomer(code: string, options: UpdateCustomerReq): Promise<UpdateCustomerRes> {

        const uri = `${this.options.base_url}/customer/${code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, { ...options }, config);

            return result.data as UpdateCustomerRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Validate a customer's identity
    * @param {String} email_or_code  Email, or customer code of customer to be identified
    * @param {ValidateCustomerReq} options 
    * @returns {Promise<ValidateCustomerRes>}
    * @throws {Error}
    */
    async validateCustomer(email_or_code: string, options: ValidateCustomerReq): Promise<ValidateCustomerRes> {

        const uri = `${this.options.base_url}/customer/${email_or_code}/identification`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { ...options }, config);

            return result.data as ValidateCustomerRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Whitelist or blacklist a customer on your integration
    * @param {String} options 
    * @returns {Promise<WhitelistOrBlacklistCustomerRes>}
    * @throws {Error}
    */
    async whitelistOrBlacklistCustomer(options: WhitelistOrBlacklistCustomerReq): Promise<WhitelistOrBlacklistCustomerRes> {

        const uri = `${this.options.base_url}/customer/set_risk_action`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { ...options }, config);

            return result.data as WhitelistOrBlacklistCustomerRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Deactivate an authorization when the card needs to be forgotten
    * @param {String} authorization_code  Authorization code to be deactivated
    * @returns {Promise<BasicRes>}
    * @throws {Error}
    */
    async deactivateAuthorization(authorization_code: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/customer/deactivate_authorization`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { "authorization_code": authorization_code }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}