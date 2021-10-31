import * as Hi from "@heroicons/react/outline";
import {
    FileUploadField,
    LabelDivider,
    ListItemsField,
    ListItemsFieldDispatch,
    ListItemsFieldProps,
    ToolbarDivider,
} from "@om-network/uikit";
import * as React from "react";
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

const ListItemsFieldForm = (props: ListItemsFieldFormProps & ListItemsFieldDispatch) => {
    const { section, formRef, ...rest } = props;
    const children = (
        <>
            <label htmlFor={section} className="block text-sm font-medium text-gray-900 mb-2">
                {"Section Name"}
                <div className="mt-1">
                    <input type="text" {...formRef.register(section)} id={section} className="input" />
                </div>
                <p className="mt-2 text-xs text-gray-500">{"Dolor culpa deserunt minim nulla labore occaecat id tempor tempor."}</p>
            </label>
            <LabelDivider text={"Links"} dividerClasses="my-3" />
        </>
    );

    return (
        <ListItemsField {...rest} formRef={formRef}>
            {children}
        </ListItemsField>
    );
};

const DefaultFooterForm = ({ formRef: _formRef }: EditDefaultFooterProps) => {
    const formRef = _formRef as any;
    const fields = formRef.getValues("resources") || [];
    return (
        <div className="flex-1 flex flex-col justify-between bg-white">
            <div className="px-4 divide-y divide-gray-200 sm:px-6">
                <div className="space-y-6 pt-6 pb-5">
                    <FileUploadField formRef={formRef as any} name="logo" label="Logo" />
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-900">
                        {"Summary"}
                        <div className="mt-1">
                            <textarea {...formRef.register("summary")} rows={2} id="summary" className="input" />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">{"A short summary of this site"}</p>
                    </label>
                    <ToolbarDivider
                        menu={[
                            {
                                label: (fields[0] && fields[0].heading) || "Category 1",
                                icon: Hi.GlobeIcon
                            },
                            {
                                label: (fields[1] && fields[1].heading) || "Category 2",
                                icon: Hi.UserIcon
                            },
                            {
                                label: (fields[2] && fields[2].heading) || "Category 3",
                                icon: Hi.DocumentAddIcon
                            }
                        ]}
                    >
                        <ListItemsFieldForm
                            formRef={formRef as any}
                            max={4}
                            section="resources.0.heading"
                            name="resources.0.items"
                            subLabel="Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur."
                        />
                        <ListItemsFieldForm
                            formRef={formRef as any}
                            max={4}
                            section="resources.1.heading"
                            name="resources.1.items"
                            subLabel="Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur."
                        />
                        <ListItemsFieldForm
                            formRef={formRef as any}
                            max={3}
                            section="resources.2.heading"
                            name="resources.2.items"
                            subLabel="Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur."
                        />
                    </ToolbarDivider>
                    <>
                        <label htmlFor="copyright" className="block text-sm font-medium text-gray-900">
                            {"Copyright"}
                            <div className="mt-1">
                                <input type="text" {...formRef.register("copyright")} id="copyright" className="input" />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">{"A copyright notice for this site"}</p>
                        </label>
                    </>
                </div>
            </div>
        </div>
    );
};

const DefaultFooter = ({ logo, summary, copyright, Link, resources = [] }: DefaultFooterProps) => (
    <div className="flex flex-col bg-white py-8 md:py-12 ">
        <div className="flex flex-row justify-evenly p-4 bg-white">
            <div className="flex flex-col w-3/5 pr-20">
                <span className="h-20">
                    <img className="h-10" src={logo} alt="Company name" />
                </span>
                <span className="text-sm">{summary}</span>
            </div>
            <div className="flex flex-row w-2/5 justify-between pr-3">
                {resources?.map((r) => (
                    <div key={r.key || r.heading.toLowerCase()}>
                        <h3 className="text-lg">{r.heading}</h3>
                        <ul className="text-sm mt-1">
                            {r.items.map((item) => (
                                <li key={item.label.toLowerCase()}>
                                    <Link href={item.label}>
                                        <a>{item.label}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-400 text-center">{copyright}</p>
        </div>
    </div>
);

const DefaultFooterPresenter = ({
    mode = ComponentMode.read,
    propsValue,
    formRef
}: {
    mode?: ComponentMode;
    propsValue: any;
    formRef?: any;
}) => {
    if (mode === ComponentMode.read) return <DefaultFooter {...propsValue} />;
    return <DefaultFooterForm {...propsValue} formRef={formRef} />;
};

export default DefaultFooterPresenter;
