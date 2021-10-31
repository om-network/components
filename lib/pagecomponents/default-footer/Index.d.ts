/// <reference types="react" />
import { ListItemsFieldProps } from "@om-network/uikit";
import * as Rhf from "react-hook-form";
import { ComponentMode } from "../../enums/componentMode.enum";
import { LinkItem, ResourceItem } from "../../interfaces/linkitem.interface";
export interface DefaultFooterProps {
    logo: string;
    summary: string;
    copyright: string;
    resources: Array<ResourceItem>;
    legal: Array<LinkItem>;
    Link: any;
}
export interface EditDefaultFooterProps extends DefaultFooterProps {
    formRef: Rhf.UseFormReturn<DefaultFooterProps>;
}
export interface ListItemsFieldFormProps extends ListItemsFieldProps {
    section: string;
}
declare const DefaultFooterPresenter: ({ mode, propsValue, formRef }: {
    mode?: ComponentMode | undefined;
    propsValue: any;
    formRef?: any;
}) => JSX.Element;
export default DefaultFooterPresenter;
