import Greetings from 'components/core/greetings'
import Link from 'next/link'
import ButtonIcon from 'components/core/buttonIcon'
import React, { useEffect, useState } from 'react'
import { GetUserData } from 'context/user'
import { User } from 'types/user'
import { CONSTANTS } from 'settings/constants'
// import CustomSession from 'services/session';

export default function GreetingsRender() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setUser(GetUserData())
  }, [])

  return (
    <>
      <Greetings name={user?.firstname} hideMd={true} />
      <section id="PortalClásico" className="section">
        <Link href={CONSTANTS.ROUTES.CLASSIC_PORTAL}>
          <a target="_blank">
            <ButtonIcon
              variant="label"
              ariaLabel="Ir a Mi Portal Clásico"
              iconName="ri-arrow-right-circle-line"
              labelContent={'Ir a Mi Portal Clásico'}
              buttonHideSm={false}
              buttonHideMd={false}
              buttonHideXl={true}
              buttonBorderRadius={'3rem'}
              buttonBackground={'#F4F5FD'}
              labelColor={'#5E77F8'}
              alignButtonContent="MiddleCenter"
              positionLabel="Left"
              iconColor={'#5E77F8'}
              iconSize={'1.25rem'}
              colorBorderFocus={'#5E77F8'}
            />
          </a>
        </Link>
      </section>
      <style jsx>{`
        .section {
          padding-bottom: 1rem;
          margin-top: 2px;
        }
        @media (min-width: 744px) and (max-width: 1279px) {
          .section {
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </>
  )
}
