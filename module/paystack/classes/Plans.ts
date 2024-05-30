import BaseClass from "./Base";
import {
    CreatePlanReq,
    CreatePlanRes,
    ListPlanReq,
    ListPlanRes,
    FetchPlanRes,
    UpdatePlanReq
} from "../types/plans";
import { BasicRes } from "../types/common";

/**
* All methods needed for Plans API
* @description The Plans API allows you create and manage installment payment options on your integration.
* @author Adeola Bada
*/
export default class Plans extends BaseClass {

    /**
     * Create a plan on your integration
     * @param {CreatePlanReq} options 
     * @returns {Promise<CreatePlanRes>}
     * @throws {Error}
     */
    async createPlan(options: CreatePlanReq): Promise<CreatePlanRes> {

        const uri = `${this.options.base_url}/plan`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreatePlanRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * List plans available on your integration
     * @param {ListPlanReq} options 
     * @returns {Promise<ListPlanRes>}
     * @throws {Error}
     */
    async listPlans(options: ListPlanReq): Promise<ListPlanRes> {
        const stringifiedParams = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/plan?${stringifiedParams}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListPlanRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Get details of a plan on your integration
     * @param {string} id_or_code The plan ID or code you want to fetch
     * @returns {Promise<FetchPlanRes>}
     * @throws {Error}
     */
    async fetchPlan(id_or_code: string): Promise<FetchPlanRes> {

        const uri = `${this.options.base_url}/plan/${id_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchPlanRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
     * Update a plan details on your integration
     * @param {string} id_or_code The plan ID or code you want to fetch
     * @param {UpdatePlanReq} options 
     * @returns {Promise<BasicRes>}
     * @throws {Error}
     */
    async updatePlan(id_or_code: string, options: UpdatePlanReq): Promise<BasicRes> {

        const uri = `${this.options.base_url}/plan/${id_or_code}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, options, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}