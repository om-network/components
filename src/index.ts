
export * from "./enums/componentMode.enum";
export * from "./enums/componentType.enum";

export * from "./interfaces/pagecomponentpresenter.interface";
export * from "./interfaces/linkitem.interface";

export * from "./pagecomponents/default-header/Index"
export * from "./pagecomponents/default-section/Index"
export * from "./pagecomponents/default-footer/Index"

export const getDynamicComponent: any = (dynamic: any, componentName: string, loading: Function) =>
dynamic(() => import(`./pagecomponents/${componentName}/Index`), {
    ssr: false,
    loading
});    

