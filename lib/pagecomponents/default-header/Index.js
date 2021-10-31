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
exports.DefaultHeaderPresenter = void 0;
var Hi = require("@heroicons/react/outline");
var uikit_1 = require("@om-network/uikit");
var classnames_1 = require("classnames");
var React = require("react");
var componentMode_enum_1 = require("../../enums/componentMode.enum");
var DefaultHeaderForm = function (_a) {
    var formRef = _a.formRef;
    return (React.createElement("div", { className: "flex-1 flex flex-col justify-between bg-white" },
        React.createElement("div", { className: "px-4 divide-y divide-gray-200 sm:px-6" },
            React.createElement("div", { className: "space-y-6 pt-6 pb-5" },
                React.createElement(uikit_1.FileUploadField, { formRef: formRef, name: "logo", label: "Logo" }),
                React.createElement(React.Fragment, null,
                    React.createElement("label", { htmlFor: "slogan", className: "block text-sm font-medium text-gray-900" },
                        "Slogan",
                        React.createElement("div", { className: "mt-1" },
                            React.createElement("input", __assign({}, formRef.register("slogan"), { id: "slogan", type: "text", className: "input" }))),
                        React.createElement("p", { className: "mt-2 text-xs text-gray-500" }, "A slogan or motto associated with this site."))),
                React.createElement(uikit_1.ToolbarDivider, { menu: [
                        {
                            label: "Navigation",
                            icon: Hi.GlobeIcon
                        },
                        {
                            label: "Profile Menu",
                            icon: Hi.UserIcon
                        }
                    ] },
                    React.createElement(uikit_1.ListItemsField, { formRef: formRef, max: 5, name: "navigation", subLabel: "Sunt quis pariatur non nostrud fugiat deserunt voluptate id consectetur minim sint ipsum ad." }),
                    React.createElement(uikit_1.ListItemsField, { formRef: formRef, max: 5, name: "profile", subLabel: "Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur." }))))));
};
var DefaultHeader = function (_a) {
    var logo = _a.logo, slogan = _a.slogan, navigation = _a.navigation, Link = _a.Link;
    return (React.createElement("div", { className: (0, classnames_1.default)("flex flex-row h-20 items-center justify-between shadow-lg") },
        React.createElement("div", { className: "ml-4" },
            React.createElement("img", { className: "h-10", src: logo, alt: slogan })),
        React.createElement("nav", { className: "-mb-px flex space-x-2 md:space-x-8 ", "aria-label": "Navigation" }, navigation === null || navigation === void 0 ? void 0 : navigation.map(function (tab) {
            var itemClasses = (0, classnames_1.default)(tab.label === "Home"
                ? "border-gray-500 text-gray-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-2 px-1 border-b-2 font-medium text-md");
            return (React.createElement(Link, { key: tab.label.toLowerCase(), href: tab.url },
                React.createElement("a", { className: itemClasses },
                    " ",
                    tab.label)));
        })),
        React.createElement(uikit_1.Button, { label: "Login", active: true, className: "bg-green-200 w-20 md:w-40 mr-4" })));
};
var DefaultHeaderPresenter = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? componentMode_enum_1.ComponentMode.read : _b, propsValue = _a.propsValue, formRef = _a.formRef;
    if (mode === "read")
        return React.createElement(DefaultHeader, __assign({}, propsValue));
    return React.createElement(DefaultHeaderForm, __assign({ formRef: formRef }, propsValue));
};
exports.DefaultHeaderPresenter = DefaultHeaderPresenter;
exports.default = exports.DefaultHeaderPresenter;
//# sourceMappingURL=Index.js.map