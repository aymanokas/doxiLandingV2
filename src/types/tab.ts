export interface TabItem {
  title: string
  code: string
  info: VerticalTabItem[]
}

export interface VerticalTabItem {
  id: string
  title: string
  info: string
  description: string
}
