import React from 'react'

import IconNavigation from '../buttonIcon/iconNavigation'

interface TitleNavigationProps {
  title: string
  marginProps?: string
  display?: boolean
  displaySm?: boolean
  displayXl?: boolean
  hide?: boolean
  hideSm?: boolean
  hideMd?: boolean
  hideXl?: boolean
}
export default function TitleNavigation(props: TitleNavigationProps) {
  let display: string
  let displaySm: string
  let displayXl: string

  if (props.hide === true) {
    display = 'none'
  }
  if (props.hideSm === true) {
    displaySm = 'none'
  }
  if (props.hideXl === true) {
    displayXl = 'none !important'
  }
  return (
    <>
      <div id="TitleNavigation" className="container">
        <IconNavigation iconName="ri-arrow-left-s-line" iconColor={'#283341'} iconSize={'22px'} />
        <h3 className="title">{props.title}</h3>
      </div>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .container {
          display: ${display || displaySm || `flex`};
          flex-direction: row;
          align-items: center;
          margin: ${props.marginProps || `16px 24px`};
          align-items: center;
          height: 100%;
        }

        @media (min-width: 1280px) {
          .container {
            display: ${display || displayXl || `flex`};
            flex-direction: row;
            align-items: center;
            margin: ${props.marginProps || `0 0 24px 0`};
            height: min-content;
            position: relative;
            z-index: 0;
          }
        }
      `}</style>
    </>
  )
}
