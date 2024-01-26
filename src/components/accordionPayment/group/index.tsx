import { Children, useState } from 'react'
import AccordionButton from 'components/accordionPayment/group/index'

interface AccordionGroupProps {
  closeOthersOnExpand: boolean
  children: any
}

export default function AccordionGroup(props: AccordionGroupProps) {
  const [option, setOption] = useState<number>(0)
  const contents: JSX.Element[] = []

  Children.forEach(props.children, (child, index) => {
    if (child.type === AccordionButton) {
      if (props.closeOthersOnExpand) {
        contents.push(
          <AccordionButton
            {...child.props}
            key={index}
            expand={option == index}
            event={() => setOption(option != index ? index : null)}
          />
        )
      } else {
        contents.push(<AccordionButton {...child.props} key={index} />)
      }
    }
  })

  return <>{contents}</>
}
