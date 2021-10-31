"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSectionPresenter = void 0;
var outline_1 = require("@heroicons/react/outline");
var uikit_1 = require("@om-network/uikit");
var react_md_editor_1 = require("@uiw/react-md-editor");
var React = require("react");
var componentMode_enum_1 = require("../..//enums/componentMode.enum");
var DefaultSectionForm = function (_a) {
    var formRef = _a.formRef;
    return (React.createElement("div", { className: "flex-1 flex flex-col justify-between bg-white" },
        React.createElement("div", { className: "px-4 divide-y divide-gray-200 sm:px-6" },
            React.createElement("div", { className: "pt-6 pb-5" },
                React.createElement(uikit_1.TextareaField, { label: "", name: "content", rows: 30, formRef: formRef })))));
};
var DefaultSection = function (_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b;
    if (text && text.length > 0)
        return React.createElement(react_md_editor_1.default.Markdown, { source: text });
    return (React.createElement("div", { className: "h-10 bg-gray-100 flex justify-center items-center" },
        React.createElement("span", { className: "relative z-0 inline-flex" },
            React.createElement(outline_1.LightBulbIcon, { className: "h-5 w-5 text-yellow-600" }),
            "Click anywhere inside this component to edit it.")));
};
var DefaultSectionPresenter = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? componentMode_enum_1.ComponentMode.read : _b, propsValue = _a.propsValue, formRef = _a.formRef;
    if (mode === componentMode_enum_1.ComponentMode.read)
        return React.createElement(DefaultSection, __assign({}, propsValue));
    return React.createElement(DefaultSectionForm, __assign({}, propsValue, { formRef: formRef }));
};
exports.DefaultSectionPresenter = DefaultSectionPresenter;
exports.default = exports.DefaultSectionPresenter;
//# sourceMappingURL=Index.js.map