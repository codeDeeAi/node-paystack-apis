import { BasicRes } from "./common";

export interface IntegrationTimeoutRes extends BasicRes {
    data: {
        payment_session_timeout: number;
    }
}