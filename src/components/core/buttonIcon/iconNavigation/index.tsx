import React from 'react'
import { CONSTANTS } from 'settings/constants'
import { useRouter } from 'next/router'

interface IconNavigationProp {
  iconName: string
  iconSize: string
  iconColor?: string
}

export default function IconNavigation(props: IconNavigationProp) {
  const router = useRouter()
  return (
    <>
      <button id="IconNavigation" onClick={() => router.push(CONSTANTS.ROUTES.DASHBOARD)}>
        <i className={`icon ${props.iconName}`}></i>
      </button>
      <style jsx>
        {`
          button {
            display: grid;
            background: transparent;
            font-size: ${props.iconSize || `12px`};
            width: 40px;
            justify-content: start;
            height: 40px;
            align-content: center;
            border-radius: 50%;
            padding: 0;
          }
          @media (min-width: 1280px) {
            .icon {
              color: ${props.iconColor};
              font-size: ${props.iconSize || `12px`};
              text-align: center;
              height: 100%;
            }
            button {
              background: transparent;
              align-items: center;
              display: grid;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}
