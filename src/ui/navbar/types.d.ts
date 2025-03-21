export type ListInventoryItem = {
    icon?:React.ComponentType<SvgIconProps>,
    text:string,
    to?: string,
    relativePath?: string,
    view?: JSX.Element, 
    hidden: boolean,
}