export interface LinkItem {
    label: string;
    url: string;
}

export interface ResourceItem {
    key?: string;
    heading: string;
    items: Array<LinkItem>;
}
