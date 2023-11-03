import { BasicRes } from "./common";

export interface ListDomainsReq {
    use_cursor: boolean;
    next?: string;
    previous?: string;
}

export interface ListDomainsRes extends BasicRes {
    data: {
        domainNames: Array<string>;
      }
}