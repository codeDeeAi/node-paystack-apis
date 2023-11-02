import BaseClass from "./Base";
import {
    ResolveAccountRes,
    ValidateAccountReq,
    ValidateAccountRes,
    ResolveCardBINRes
} from "../types/verification";

/**
* All methods needed for Verification API
* @description The Verification API allows you perform KYC processes.
* @author Adeola Bada
*/
export default class Verification extends BaseClass {

    /**
    * Confirm an account belongs to the right customer
    * @param {string} account_number Account Number
    * @param {string} bank_code You can get the list of bank codes by calling the List Banks endpoint
    * @returns {Promise<ResolveAccountRes>}
    * @throws {Error}
    */
    async resolveAccount(account_number: string, bank_code: string): Promise<ResolveAccountRes> {
        const uri = `${this.options.base_url}/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ResolveAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Confirm the authenticity of a customer's account number before sending money
    * @param {ValidateAccountReq} options
    * @returns {Promise<ValidateAccountRes>}
    * @throws {Error}
    */
    async validateAccount(options: ValidateAccountReq): Promise<ValidateAccountRes> {
        const uri = `${this.options.base_url}/bank/validate`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as ValidateAccountRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Get more information about a customer's card
    * @param {string} bin First 6 characters of card
    * @returns {Promise<ResolveCardBINRes>}
    * @throws {Error}
    */
    async resolveCardBIN(bin: string): Promise<ResolveCardBINRes> {
        const uri = `${this.options.base_url}/decision/bin/${bin}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ResolveCardBINRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}