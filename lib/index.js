"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDynamicComponent = void 0;
__exportStar(require("./enums/componentMode.enum"), exports);
__exportStar(require("./enums/componentType.enum"), exports);
__exportStar(require("./interfaces/pagecomponentpresenter.interface"), exports);
__exportStar(require("./interfaces/linkitem.interface"), exports);
__exportStar(require("./pagecomponents/default-header/Index"), exports);
__exportStar(require("./pagecomponents/default-section/Index"), exports);
__exportStar(require("./pagecomponents/default-footer/Index"), exports);
var getDynamicComponent = function (dynamic, componentName, loading) {
    return dynamic(function () { return Promise.resolve().then(function () { return require("./pagecomponents/" + componentName + "/Index"); }); }, {
        ssr: false,
        loading: loading
    });
};
exports.getDynamicComponent = getDynamicComponent;
//# sourceMappingURL=index.js.map