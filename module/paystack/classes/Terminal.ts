import BaseClass from "./Base";
import { BasicRes } from "../types/common";
import {
    SendEventReq,
    SendEventRes,
    FetchEventStatusRes,
    FetchTerminalStatusRes,
    ListTerminalsReq,
    ListTerminalsRes,
} from "../types/terminal";

/**
* All methods needed for Terminal API
* @description The Terminal API allows you to build delightful in-person payment experiences.
* @author Adeola Bada
*/
export default class Terminal extends BaseClass {
    /**
    * Send an event from your application to the Paystack Terminal
    * @param {String} terminal_id The ID of the Terminal the event should be sent to.
    * @param {SendEventReq} options 
    * @returns {Promise<SendEventRes>}
    * @throws {Error}
    */
    async sendEvent(terminal_id: string, options: SendEventReq): Promise<SendEventRes> {

        const uri = `${this.options.base_url}/terminal/${terminal_id}/event`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, options, config);

            return result.data as SendEventRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };


    /**
      * Check the status of an event sent to the Terminal
      * @param {String} terminal_id The ID of the Terminal the event was sent to.
      * @param {String} event_id The ID of the event that was sent to the Terminal
      * @returns {Promise<FetchEventStatusRes>}
      * @throws {Error}
      */
    async fetchEventStatus(terminal_id: string, event_id: string): Promise<FetchEventStatusRes> {

        const uri = `${this.options.base_url}/terminal/${terminal_id}/event/${event_id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchEventStatusRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Check the availiability of a Terminal before sending an event to it
      * @param {String} terminal_id The ID of the Terminal you want to check
      * @returns {Promise<FetchTerminalStatusRes>}
      * @throws {Error}
      */
    async fetchTerminalStatus(terminal_id: string): Promise<FetchTerminalStatusRes> {

        const uri = `${this.options.base_url}/terminal/${terminal_id}/presence`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchTerminalStatusRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * List the Terminals available on your integration
      * @param {ListTerminalsReq} options
      * @returns {Promise<ListTerminalsRes>}
      * @throws {Error}
      */
    async listTerminals(options: ListTerminalsReq): Promise<ListTerminalsRes> {

        const params = this.options.querystring.stringify({ ...options });

        const uri = `${this.options.base_url}/terminal?${params}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as ListTerminalsRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Get the details of a Terminal
      * @param {String} terminal_id  The ID of the Terminal the event was sent to.
      * @returns {Promise<BasicRes>}
      * @throws {Error}
      */
    async fetchTerminal(terminal_id: string): Promise<FetchTerminalStatusRes> {

        const uri = `${this.options.base_url}/terminal/${terminal_id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .get(`${uri}`, config);

            return result.data as FetchTerminalStatusRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Update the details of a Terminal
      * @param {String} terminal_id  The ID of the Terminal you want to update
      * @param {String} name  Name of the terminal
      * @param {String} address  The address of the Terminal
      * @returns {Promise<BasicRes>}
      * @throws {Error}
      */
    async updateTerminal(terminal_id: string, name: string, address: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/terminal/${terminal_id}`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { name: name, address: address }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Activate your debug device by linking it to your integration
      * @param {String} serial_number  Device Serial Number
      * @returns {Promise<BasicRes>}
      * @throws {Error}
      */
    async commisionTerminal(serial_number: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/terminal/commission_device`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { serial_number: serial_number }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };

    /**
      * Unlink your debug device from your integration
      * @param {String} serial_number  Device Serial Number
      * @returns {Promise<BasicRes>}
      * @throws {Error}
      */
    async decommisionTerminal(serial_number: string): Promise<BasicRes> {

        const uri = `${this.options.base_url}/terminal/decommission_device`;

        try {

            const config = {
                headers: this.options.base_api_headers_config
            };

            const result = await this.options.axios
                .post(`${uri}`, { serial_number: serial_number }, config);

            return result.data as BasicRes;

        } catch (error: any) {

            throw new Error(`${error?.message}`);
        }
    };
}