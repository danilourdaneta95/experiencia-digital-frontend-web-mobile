import { Aranceles } from 'types/mis-aranceles'
import { numberWithDot } from '../card/variant/paymentDetail'
interface CardTitleProps {
  titleBox?: string
  supportingText?: string
  saldo?: string
  render?: string
  dataAranceles: Aranceles
  loadingData?: boolean
}

export function CardTitle(props: CardTitleProps) {
  return (
    <>
      <div id="cardTitle" className="containerTitleBox">
        <h5 className="titleBox">{props.titleBox}</h5>
      </div>

      <style jsx>{`
        .titleBox {
          width: max-content;
        }
        @media (min-width: 1280px) {
          .containerTitleBox {
            display: grid;
            align-items: center;
            justify-items: start;
            width: max-content;
          }
        }
      `}</style>
    </>
  )
}

export function CardFooter(props: CardTitleProps) {
  const renderList = props.render
  if (renderList === 'matricula') {
    return (
      <>
        <div id="cardFooterMatricula" className="saldoPendiente">
          <p className="color">{props.supportingText}</p>
          {props.loadingData ? (
            <>{/* AQUI VA EL SKELETON */}</>
          ) : (
            <h4 className="saldo">
              {props.saldo}$ {numberWithDot(props.dataAranceles?.matricula.saldo_pendiente)}
            </h4>
          )}
        </div>
        <style jsx>{`
          .saldo {
            color: #001894;
          }
          .color {
            color: #98a2b3;
            font-weight: 400;
          }
          .saldoPendiente {
            width: 100%;
          }
          .hideSection {
            display: none;
          }
          @media (min-width: 1280px) {
            .saldoPendiente {
              display: grid;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
            }
          }
        `}</style>
      </>
    )
  }
  if (renderList === 'arancel') {
    return (
      <>
        <div id="cardFooterArancel" className="saldoPendiente">
          <p className="color">{props.supportingText}</p>
          {props.loadingData ? (
            <>{/* AQUI VA EL SKELETON */}</>
          ) : (
            <h4 className="saldo">
              {props.saldo}$ {numberWithDot(props.dataAranceles?.arancel.saldo_pendiente)}
            </h4>
          )}
        </div>
        <style jsx>{`
          .saldo {
            color: #001894;
          }
          .color {
            color: #98a2b3;
            font-weight: 400;
          }
          .saldoPendiente {
            width: 100%;
          }
          .hideSection {
            display: none;
          }
          @media (min-width: 1280px) {
            .saldoPendiente {
              display: grid;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
            }
          }
        `}</style>
      </>
    )
  } else {
    null
  }
}
