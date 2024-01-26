import React from 'react'
import Card from '../..'
import { CardFooter, CardTitle } from 'components/core/cardTitlePayment'
import { AccordionButton } from 'components/accordionPayment'
import { Aranceles } from 'types/mis-aranceles'
import { ButtonsPayment } from 'components/customs/buttons/buttonPayment'

interface CardPaymentDetailMatriculaPops {
  handleClickSelectCourse: any
  handleClickMatricula?: any
  handleClickArancel?: any
  description?: any
  event?: () => void
  open?: boolean
  expand: boolean
  displaySm?: string
  dataAranceles: Aranceles
  loadingData?: boolean
}

export function CardPaymentDetailMatricula(props: CardPaymentDetailMatriculaPops) {
  return (
    <>
      <Card
        boxShadow={true}
        borderCardColor="1px solid #E1EEF8"
        borderRadius="12px"
        cardMargin=" 0 0 26px 0"
        borderCardColorHover="1px solid #93A3F7"
        backgroundColorXl="#fff"
        boxShadowXl="0px 2px 7px rgba(0, 0, 0, 0.1)"
        boxShadowSm={true}
      >
        <div className="container">
          <CardTitle titleBox={'Mi matrícula'} dataAranceles={props.dataAranceles} />
          <AccordionButton
            listRender="matricula"
            title={'Ver detalle'}
            expand={props.expand}
            open={props.open}
            handleClickMatricula={props.handleClickMatricula}
            handleClickSelectCourse={props.handleClickSelectCourse}
            dataAranceles={props.dataAranceles}
          />
          <div className="columnFooter">
            <CardFooter supportingText="Saldo pendiente" render={'matricula'} dataAranceles={props.dataAranceles} />
            <div className="displayButton">
              <ButtonsPayment buttonDisplay={1} dataAranceles={props.dataAranceles} />
            </div>
          </div>
        </div>
      </Card>
      <style jsx>{`
        .columnFooter {
          display: ${props.displaySm || `flex`};
          align-items: center;
          width: 100%;
        }
        .displayButton {
          display: grid;
          width: 100%;
          margin: 0 auto;
          justify-content: flex-end;
        }
        @media (min-width: 1280px) {
          .container {
            display: grid;
            width: 100%;
          }
          .columnTitle {
            width: 100%;
            display: flex;
          }
          .columnFooter {
            display: flex;
            align-items: center;
            width: 100%;
          }
          .displayButton {
            display: flex;
            justify-content: space-between;
            width: fit-content;
          }
        }
      `}</style>
    </>
  )
}

export function CardPaymentDetailArancel(props: CardPaymentDetailMatriculaPops) {
  return (
    <>
      <Card
        boxShadow={true}
        borderCardColor="1px solid #E1EEF8"
        borderRadius="12px"
        cardMargin=" 0 0 26px 0"
        borderCardColorHover="1px solid #93A3F7"
        boxShadowXl="0px 2px 7px rgba(0, 0, 0, 0.1)"
        boxShadowSm={true}
      >
        <div className="container">
          <CardTitle titleBox={'Mi arancel'} dataAranceles={props.dataAranceles} />
          <AccordionButton
            title={'Ver detalle'}
            listRender="arancel"
            expand={props.expand}
            open={props.open}
            handleClickArancel={props.handleClickArancel}
            handleClickSelectCourse={props.handleClickSelectCourse}
            dataAranceles={props.dataAranceles}
          ></AccordionButton>
          <div className="columnFooter">
            <CardFooter supportingText="Saldo pendiente" render={'arancel'} dataAranceles={props.dataAranceles} />
            <div className="displayButton">
              <ButtonsPayment buttonDisplay={1} dataAranceles={props.dataAranceles} />
            </div>
          </div>
        </div>
      </Card>
      <style jsx>{`
        .columnFooter {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .displayButton {
          display: grid;
          width: 100%;
          margin: 0 auto;
          justify-content: flex-end;
        }
        @media (min-width: 1280px) {
          .container {
            display: grid;
            width: 100%;
          }
          .columnTitle {
            width: 100%;
            display: flex;
          }
          .columnFooter {
            display: flex;
            align-items: center;
            width: 100%;
          }
          .displayButton {
            display: flex;
            justify-content: space-between;
            width: fit-content;
          }
        }
      `}</style>
    </>
  )
}

export function numberWithDot(numbers: number) {
  if (numbers == undefined) {
    return 0
  }
  const parts = numbers.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return parts.join('.')
}
