import type { ClassOptionsInterface } from "../types/common";

/**
* All methods needed for Miscellaneous API
* @description The Miscellaneous API are supporting APIs that can be used to provide more details to other APIs.
* @author Adeola Bada
*/
export default class BaseClass {
    protected options: ClassOptionsInterface;

    constructor(options: ClassOptionsInterface) {
        this.options = options;
    }

}