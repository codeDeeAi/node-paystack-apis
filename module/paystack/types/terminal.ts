import { BasicRes } from "./common";

export type SentEventType = "invoice" | "transaction";

interface SendInvoiceEvent {
    type: "invoice"; // The type of event to push. We currently support invoice and transaction
    action: "process" | "view"; // The action can either be process or view.
    data: {
        id: string;
        reference: string;
    } // You need to pass the invoice id and offline reference: {id: invoice_id, reference: offline_reference}
}

interface SendTransactionEvent {
    type: "transaction"; // The type of event to push. We currently support invoice and transaction
    action: "process" | "print"; // The action can either be process or print.
    data: {
        id: string; // transaction_id
    } // You can pass the transaction id: {id: transaction_id}
}

export type SendEventReq = SendInvoiceEvent | SendTransactionEvent;

export interface SendEventRes extends BasicRes {
    data: {
        id: string;
    }
}

export interface FetchEventStatusRes extends BasicRes {
    data: {
        delivered: boolean;
    }
}

export interface FetchTerminalStatusRes extends BasicRes {
    data: {
        online: boolean;
        available: boolean;
    }
}

export interface ListTerminalsReq {
    perPage?: number; // Specify how many records you want to retrieve per page. If not specify we use a default value of 50.
    next?: string; // A cursor that indicates your place in the list. It can be used to fetch the next page of the list
    previous?: string; // A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request
}

export interface Terminal {
    id: number;
    serial_number: string;
    device_make: null | string;
    terminal_id: string;
    integration: number;
    domain: string;
    name: string;
    address: null | string;
    status: string;
}

export interface ListTerminalsRes extends BasicRes {
    data: Array<Terminal>
    meta: {
        next: null | string | number;
        previous: null | string | number;
        perPage: number;
    }
}