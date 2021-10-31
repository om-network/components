import * as Hi from "@heroicons/react/outline";
import { Button, FileUploadField, ListItemsField, ToolbarDivider } from "@om-network/uikit";
import classNames from "classnames";
import * as React from "react";
import { UseFormReturn } from "react-hook-form";

import { ComponentMode } from "../../enums/componentMode.enum";
import { LinkItem } from "../../interfaces/linkitem.interface";

interface DefaultHeaderProps {
    logo: string;
    slogan: string;
    Link: any;
    navigation?: Array<LinkItem>;
}

interface EditDefaultHeaderProps extends DefaultHeaderProps {
    formRef: UseFormReturn<DefaultHeaderProps>;
}

const DefaultHeaderForm = ({ formRef }: EditDefaultHeaderProps) => (
    <div className="flex-1 flex flex-col justify-between bg-white">
        <div className="px-4 divide-y divide-gray-200 sm:px-6">
            <div className="space-y-6 pt-6 pb-5">
                <FileUploadField formRef={formRef as any} name="logo" label="Logo" />
                <>
                    <label htmlFor="slogan" className="block text-sm font-medium text-gray-900">
                        {"Slogan"}
                        <div className="mt-1">
                            <input {...formRef.register("slogan")} id="slogan" type="text" className="input" />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">{"A slogan or motto associated with this site."}</p>
                    </label>
                </>

                <ToolbarDivider
                    menu={[
                        {
                            label: "Navigation",
                            icon: Hi.GlobeIcon
                        },
                        {
                            label: "Profile Menu",
                            icon: Hi.UserIcon
                        }
                    ]}
                >
                    <ListItemsField
                        formRef={formRef as any}
                        max={5}
                        name="navigation"
                        subLabel="Sunt quis pariatur non nostrud fugiat deserunt voluptate id consectetur minim sint ipsum ad."
                    />
                    <ListItemsField
                        formRef={formRef as any}
                        max={5}
                        name="profile"
                        subLabel="Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur."
                    />
                </ToolbarDivider>
            </div>
        </div>
    </div>
);

const DefaultHeader = ({ logo, slogan, navigation, Link }: DefaultHeaderProps) => (
    <div className={classNames("flex flex-row h-20 items-center justify-between shadow-lg")}>
        <div className="ml-4">
            <img className="h-10" src={logo} alt={slogan} />
        </div>
        <nav className="-mb-px flex space-x-2 md:space-x-8 " aria-label={"Navigation"}>
            {navigation?.map((tab) => {
                const itemClasses = classNames(
                    tab.label === "Home"
                        ? "border-gray-500 text-gray-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-2 px-1 border-b-2 font-medium text-md"
                );
                return (
                    <Link key={tab.label.toLowerCase()} href={tab.url}>
                        <a className={itemClasses}> {tab.label}</a>
                    </Link>
                );
            })}
        </nav>
        <Button label={"Login"} active className="bg-green-200 w-20 md:w-40 mr-4" />
    </div>
);

export const DefaultHeaderPresenter = ({
    mode = ComponentMode.read,
    propsValue,
    formRef
}: {
    mode?: ComponentMode;
    propsValue: any;
    formRef?: any;
}) => {
    if (mode === "read") return <DefaultHeader {...propsValue} />;
    return <DefaultHeaderForm formRef={formRef} {...propsValue} />;
};

export default DefaultHeaderPresenter;
