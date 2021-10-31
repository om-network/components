import { LightBulbIcon } from "@heroicons/react/outline";
import { TextareaField } from "@om-network/uikit";
import MDEditor from "@uiw/react-md-editor";
import * as React from "react";
import * as Rhf from "react-hook-form";

import { ComponentMode } from "../..//enums/componentMode.enum";
import { PageComponentPresenter } from "../../interfaces/pagecomponentpresenter.interface";

interface DefaultSectionProps {
    text?: string;
}

interface DefaultSectionFormProps extends DefaultSectionProps {
    formRef: Rhf.UseFormReturn<DefaultSectionProps>;
}

const DefaultSectionForm = ({ formRef }: DefaultSectionFormProps) => (
    <div className="flex-1 flex flex-col justify-between bg-white">
        <div className="px-4 divide-y divide-gray-200 sm:px-6">
            <div className="pt-6 pb-5">
                <TextareaField label="" name="content" rows={30} formRef={formRef as any} />
            </div>
        </div>
    </div>
);

const DefaultSection = ({ text = "" }: DefaultSectionProps) => {
    if (text && text.length > 0) return <MDEditor.Markdown source={text} />;
    return (
        <div className="h-10 bg-gray-100 flex justify-center items-center">
            <span className="relative z-0 inline-flex">
                <LightBulbIcon className="h-5 w-5 text-yellow-600" />
                {"Click anywhere inside this component to edit it."}
            </span>
        </div>
    );
};

export const DefaultSectionPresenter = ({ mode = ComponentMode.read, propsValue, formRef }: PageComponentPresenter) => {
    if (mode === ComponentMode.read) return <DefaultSection {...propsValue} />;
    return <DefaultSectionForm {...propsValue} formRef={formRef} />;
};

export default DefaultSectionPresenter;
