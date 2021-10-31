import { UseFormReturn } from "react-hook-form";

import { ComponentMode } from "../enums/componentMode.enum";

export interface PageComponentPresenter {
    mode?: ComponentMode;
    propsValue: any;
    formRef?: UseFormReturn<any>;
}
