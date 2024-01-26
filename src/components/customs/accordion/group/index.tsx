import { Children, useState } from 'react'
import Accordion from '..'

interface AccordionGroupProps {
  closeOthersOnExpand: boolean
  children: any
}

export default function AccordionGroup(props: AccordionGroupProps) {
  const [option, setOption] = useState<number>(0)
  const contents: JSX.Element[] = []

  Children.forEach(props.children, (child, index) => {
    if (child.type === Accordion) {
      if (props.closeOthersOnExpand) {
        contents.push(
          <Accordion
            {...child.props}
            key={index}
            expand={option == index}
            event={() => setOption(option != index ? index : null)}
          />
        )
      } else {
        contents.push(<Accordion {...child.props} key={index} />)
      }
    }
  })

  return <>{contents}</>
}
