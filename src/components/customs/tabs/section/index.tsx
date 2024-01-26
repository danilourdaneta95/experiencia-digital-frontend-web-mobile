interface TabContentProps {
  title: string
  children: any
}

export default function TabContent(props: TabContentProps) {
  return <>{props.children}</>
}
