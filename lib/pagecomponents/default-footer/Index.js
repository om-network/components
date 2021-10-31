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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hi = require("@heroicons/react/outline");
var uikit_1 = require("@om-network/uikit");
var react_1 = require("react");
var componentMode_enum_1 = require("../../enums/componentMode.enum");
var ListItemsFieldForm = function (props) {
    var section = props.section, formRef = props.formRef, rest = __rest(props, ["section", "formRef"]);
    var children = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { htmlFor: section, className: "block text-sm font-medium text-gray-900 mb-2" },
            "Section Name",
            react_1.default.createElement("div", { className: "mt-1" },
                react_1.default.createElement("input", __assign({ type: "text" }, formRef.register(section), { id: section, className: "input" }))),
            react_1.default.createElement("p", { className: "mt-2 text-xs text-gray-500" }, "Dolor culpa deserunt minim nulla labore occaecat id tempor tempor.")),
        react_1.default.createElement(uikit_1.LabelDivider, { text: "Links", dividerClasses: "my-3" })));
    return (react_1.default.createElement(uikit_1.ListItemsField, __assign({}, rest, { formRef: formRef }), children));
};
var DefaultFooterForm = function (_a) {
    var _formRef = _a.formRef;
    var formRef = _formRef;
    var fields = formRef.getValues("resources") || [];
    return (react_1.default.createElement("div", { className: "flex-1 flex flex-col justify-between bg-white" },
        react_1.default.createElement("div", { className: "px-4 divide-y divide-gray-200 sm:px-6" },
            react_1.default.createElement("div", { className: "space-y-6 pt-6 pb-5" },
                react_1.default.createElement(uikit_1.FileUploadField, { formRef: formRef, name: "logo", label: "Logo" }),
                react_1.default.createElement("label", { htmlFor: "summary", className: "block text-sm font-medium text-gray-900" },
                    "Summary",
                    react_1.default.createElement("div", { className: "mt-1" },
                        react_1.default.createElement("textarea", __assign({}, formRef.register("summary"), { rows: 2, id: "summary", className: "input" }))),
                    react_1.default.createElement("p", { className: "mt-2 text-xs text-gray-500" }, "A short summary of this site")),
                react_1.default.createElement(uikit_1.ToolbarDivider, { menu: [
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
                    ] },
                    react_1.default.createElement(ListItemsFieldForm, { formRef: formRef, max: 4, section: "resources.0.heading", name: "resources.0.items", subLabel: "Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur." }),
                    react_1.default.createElement(ListItemsFieldForm, { formRef: formRef, max: 4, section: "resources.1.heading", name: "resources.1.items", subLabel: "Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur." }),
                    react_1.default.createElement(ListItemsFieldForm, { formRef: formRef, max: 3, section: "resources.2.heading", name: "resources.2.items", subLabel: "Ea ut voluptate voluptate ad adipisicing excepteur laborum sunt sint consectetur." })),
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("label", { htmlFor: "copyright", className: "block text-sm font-medium text-gray-900" },
                        "Copyright",
                        react_1.default.createElement("div", { className: "mt-1" },
                            react_1.default.createElement("input", __assign({ type: "text" }, formRef.register("copyright"), { id: "copyright", className: "input" }))),
                        react_1.default.createElement("p", { className: "mt-2 text-xs text-gray-500" }, "A copyright notice for this site")))))));
};
var DefaultFooter = function (_a) {
    var logo = _a.logo, summary = _a.summary, copyright = _a.copyright, Link = _a.Link, _b = _a.resources, resources = _b === void 0 ? [] : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col bg-white py-8 md:py-12 " },
        react_1.default.createElement("div", { className: "flex flex-row justify-evenly p-4 bg-white" },
            react_1.default.createElement("div", { className: "flex flex-col w-3/5 pr-20" },
                react_1.default.createElement("span", { className: "h-20" },
                    react_1.default.createElement("img", { className: "h-10", src: logo, alt: "Company name" })),
                react_1.default.createElement("span", { className: "text-sm" }, summary)),
            react_1.default.createElement("div", { className: "flex flex-row w-2/5 justify-between pr-3" }, resources === null || resources === void 0 ? void 0 : resources.map(function (r) { return (react_1.default.createElement("div", { key: r.key || r.heading.toLowerCase() },
                react_1.default.createElement("h3", { className: "text-lg" }, r.heading),
                react_1.default.createElement("ul", { className: "text-sm mt-1" }, r.items.map(function (item) { return (react_1.default.createElement("li", { key: item.label.toLowerCase() },
                    react_1.default.createElement(Link, { href: item.label },
                        react_1.default.createElement("a", null, item.label)))); })))); }))),
        react_1.default.createElement("div", { className: "mt-12 border-t border-gray-200 pt-8" },
            react_1.default.createElement("p", { className: "text-sm text-gray-400 text-center" }, copyright))));
};
var DefaultFooterPresenter = function (_a) {
    var _b = _a.mode, mode = _b === void 0 ? componentMode_enum_1.ComponentMode.read : _b, propsValue = _a.propsValue, formRef = _a.formRef;
    if (mode === componentMode_enum_1.ComponentMode.read)
        return react_1.default.createElement(DefaultFooter, __assign({}, propsValue));
    return react_1.default.createElement(DefaultFooterForm, __assign({}, propsValue, { formRef: formRef }));
};
exports.default = DefaultFooterPresenter;
//# sourceMappingURL=Index.js.map