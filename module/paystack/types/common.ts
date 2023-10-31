import axios from "axios";
import querystring from 'querystring';
import crypto from 'crypto';

export interface ApiConfig {
    [key: string]: any;
}

export interface ClassOptionsInterface{
    secret_key: string;
    public_key: string;
    base_url: string;
    base_api_headers_config: ApiConfig;
    axios: typeof axios
    querystring: typeof querystring,
    crypto: typeof crypto
}

export interface BasicRes {
    status: boolean;
    message: string;
}

export enum RiskActionEnum {
    Default = "default",
    Allow = "allow",
    Deny = "deny"
}