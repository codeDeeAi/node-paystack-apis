import BaseClass from "./Base";
import {
    CreateProductReq,
    CreateProductRes,
    ListProductsReq,
    ListProductsRes,
    FetchProductRes,
    UpdateProductReq,
    UpdateProductRes
} from "../types/products";

/**
* All methods needed for Products API
* @description The Products API allows you create and manage inventories on your integration.
* @author Adeola Bada
*/
export default class Products extends BaseClass {

    /**
    * Create a product on your integration
    * @param {CreateProductReq} options 
    * @returns {Promise<CreateProductRes>}
    * @throws {Error}
    */
    async createProduct(options: CreateProductReq): Promise<CreateProductRes> {

        const uri = `${this.options.base_url}/product`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as CreateProductRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * List products available on your integration
    * @param {ListProductsReq} options 
    * @returns {Promise<ListProductsRes>}
    * @throws {Error}
    */
    async listProducts(options: ListProductsReq): Promise<ListProductsRes> {

        const params = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/product?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListProductsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Get details of a product on your integration
    * @param {String} id The product ID you want to fetch
    * @returns {Promise<FetchProductRes>}
    * @throws {Error}
    */
    async fetchProduct(id: String): Promise<FetchProductRes> {

        const uri = `${this.options.base_url}/product/${id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchProductRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
    * Update a product details on your integration
    * @param {String} id Product ID
    * @param {UpdateProductReq} options 
    * @returns {Promise<UpdateProductRes>}
    * @throws {Error}
    */
    async updateProduct(id: string, options: UpdateProductReq): Promise<UpdateProductRes> {

        const uri = `${this.options.base_url}/product/${id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .put(`${uri}`, options, config);

            return result.data as UpdateProductRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}