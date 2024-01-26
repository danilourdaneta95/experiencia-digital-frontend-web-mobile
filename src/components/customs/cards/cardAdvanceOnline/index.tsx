import React from 'react'
import Card from 'components/core/card'
import ButtonIcon from 'components/core/buttonIcon'
import Image from 'next/future/image'
import advanceOnlineImg from 'assets/advanceOnline/advanceOnline-mobile.svg'
import Link from 'next/link'
import { CONSTANTS } from 'settings/constants'
export default function CardAdvanceOnline() {
  return (
    <>
      <Card
        boxShadow={true}
        backgroundColor="#fff"
        cardMargin="0 0 22px 0"
        borderCardColor="1px solid #E1EEF8"
        borderCardColorHover="1px solid #E1EEF8"
      >
        <div className="container">
          <span className="imgContainer">
            <Image src={advanceOnlineImg} alt={'img dashboard Advance Online'} />
          </span>
          <p className="text">Recuerda revisar tus actividades semanales y sesiones sincrónicas en Blackboard</p>
          <div className="buttonPosition">
            <Link href={CONSTANTS.ROUTES.BLACKBOARD}>
              <a target={'_blank'}>
                <ButtonIcon
                  variant="label"
                  buttonBackground="#E4E8FC"
                  labelColor="#001894"
                  iconColor="#001894"
                  iconSize="22px"
                  labelContent={'Ir a Blackboard'}
                  buttonBorderRadius="50px"
                  iconName="ri-arrow-right-line"
                  alignButtonContent="MiddleSpaceBetween"
                  positionLabel="Left"
                  buttonIconPadding={'14px 22px'}
                ></ButtonIcon>
              </a>
            </Link>
          </div>
        </div>
      </Card>
      <style jsx>{`
        .text {
          text-align: left;
          color: #101828;
          line-height: 28px;
          font-weight: 400;
          padding: 0 0 22px 0;
        }
        .buttonPosition {
          display: grid;
          justify-content: end;
        }
        .imgContainer {
          display: grid;
          justify-content: center;
        }
        /**this media query display components in desktop resolution only */
        @media (min-width: 1280px) {
          .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 0 0 26px;
          }
          .buttonPosition {
            margin: 0 0 20px 12px;
          }
        }
      `}</style>
    </>
  )
}

//
