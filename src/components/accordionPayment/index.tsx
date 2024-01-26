import { useState, useEffect } from 'react'
import LineSeparator from 'components/core/lineSeparator'
import { Aranceles, Multicarrera } from 'types/mis-aranceles'
import { numberWithDot } from 'components/core/card/variant/paymentDetail'

//Dropdown detalles arancel y matrícula
export interface AccordionButtonProps {
  title?: string
  description?: any
  children?: any
  list?: string
  listRender?: string
  expand: boolean
  open?: boolean
  event?: () => void
  handleClickMatricula?: any
  handleClickArancel?: any
  handleClickSelectCourse?: any
  dataAranceles: Aranceles
  loadingData?: boolean
}

export function AccordionButton(props: AccordionButtonProps) {
  const [expand, setExpand] = useState<boolean>(props.expand)
  const coursePayment = props.dataAranceles?.carrera
  const renderList = props.listRender

  useEffect(() => {
    setExpand(props.expand)
  }, [props])
  if (renderList === 'matricula' && coursePayment === coursePayment) {
    return (
      <>
        <div className="container">
          <div className="buttonContainer">
            <button className={'accordion ' + (expand ? 'active' : '')} onClick={props.handleClickMatricula}>
              {props.title}
              <i className={'ri-arrow-down-s-line ' + (expand ? 'active' : '')}></i>
            </button>
          </div>
          {props.dataAranceles != null ? (
            <>
              <div className="childrenContainer" style={{ maxHeight: expand ? '100vh' : null }}>
                <div className="content">
                  <div className="line marginTop"></div>
                  <div className="twoColumns">
                    <div>
                      <p>Descuento por Proto Pago</p>
                      <p>Becas Mineduc</p>
                      <p> Becas Internas</p>
                      <p>Pago Contado</p>
                      <p>Saldo a favor</p>
                      <p>Deuda a pagar </p>
                      <p> Monto pagado</p>
                      <p>Saldo de la deuda</p>
                      <p>Interés por Mora Vigente</p>
                      <p>Cobranza vigente</p>
                    </div>
                    <div className="list">
                      <p>$ {numberWithDot(props.dataAranceles.matricula.dscto_pronto_pago)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.becas_mineduc)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.becas_internas)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.pago_contado)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.saldo_favor)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.deuda_pagar)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.monto_pagado)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.saldo_deuda)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.intereses)}</p>
                      <p>$ {numberWithDot(props.dataAranceles.matricula.cobranza)}</p>
                    </div>
                  </div>
                  <div className="line marginBottom"></div>
                </div>
              </div>
            </>
          ) : (
            <>{/* AQUI VA EL SKELETON */}</>
          )}
        </div>
        <style jsx>{`
          .buttonContainer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: -36px;
          }
          .accordion {
            color: #fff;
            display: flex;
            align-items: center;
            padding: 16px 12px;
            background: #fff;
            cursor: pointer;
            width: max-content;
            transition: 0.4s;
            font-family: 'Karla';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
          }
          .accordion p {
            display: none;
          }
          button.active {
            background: #fff;
          }
          .twoColumns {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .list {
            display: grid;
            justify-content: flex-end;
          }
          i {
            transition: transform 0.2s ease-out;
            font-size: 22px;
            color: #000;
          }
          i.active {
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
          }
          span.active {
            display: none;
          }
          .childrenContainer {
            display: flex;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            width: 100%;
          }
          p {
            padding: 16px 0;
            color: #606060;
          }
          .content {
            width: 100%;
          }
          .line {
            border-top: 1px dashed #d1d1d1;
            width: 100%;
          }
          .marginBottom {
            margin: 0 0 16px 0;
          }

          @media (min-width: 1280px) {
            .accordion {
              color: #1d2939;
              transition: 0.1s;
            }
          } ;
        `}</style>
      </>
    )
  }
  if (renderList === 'arancel' && coursePayment === coursePayment) {
    return (
      <>
        <div className="container">
          <div className="buttonContainer">
            <button className={'accordion ' + (expand ? 'active' : '')} onClick={props.handleClickArancel}>
              {props.title}
              <i className={'ri-arrow-down-s-line ' + (expand ? 'active' : '')}></i>
            </button>
          </div>
          {props.dataAranceles != null ? (
            <>
              <div className="childrenContainer" style={{ maxHeight: expand ? '100vh' : null }}>
                <div className="content">
                  <div className="line marginTop"></div>
                  <div className="twoColumns">
                    <div>
                      <p>Descuento por Proto Pago</p>
                      <p>Becas Mineduc</p>
                      <p> Becas Internas</p>
                      <p>Pago Contado</p>
                      <p>Saldo a favor</p>
                      <p>Deuda a pagar </p>
                      <p> Monto pagado</p>
                      <p> Cae</p>
                      <p>Saldo de la deuda</p>
                      <p>Interés por Mora Vigente</p>
                      <p>Cobranza Vigente</p>
                    </div>
                    <div className="list">
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.dscto_pronto_pago)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.becas_mineduc)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.becas_internas)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.pago_contado)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.saldo_favor)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.deuda_pagar)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.monto_pagado)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.cae)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.saldo_deuda)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.intereses)}</p>
                      <p>$ {numberWithDot(props.dataAranceles?.arancel.cobranza)}</p>
                    </div>
                  </div>
                  <div className="line marginBottom"></div>
                </div>
              </div>
            </>
          ) : (
            <>{/* AQUI VA EL SKELETON */}</>
          )}
        </div>
        <style jsx>{`
          .buttonContainer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: -36px;
          }
          .accordion {
            color: #fff;
            display: flex;
            align-items: center;
            padding: 16px 12px;
            background: #fff;
            cursor: pointer;
            width: max-content;
            transition: 0.4s;
            font-family: 'Karla';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
          }
          button.active {
            background: #fff;
          }
          .twoColumns {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .list {
            display: grid;
            justify-content: flex-end;
          }
          i {
            transition: transform 0.2s ease-out;
            font-size: 22px;
            color: #000;
          }
          i.active {
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
          }
          span.active {
            display: none;
          }
          .childrenContainer {
            display: flex;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            width: 100%;
          }
          .accordion p {
            display: none;
          }
          p {
            padding: 16px 0;
            color: #606060;
          }
          .content {
            width: 100%;
          }
          .line {
            border-top: 1px dashed #d1d1d1;
            width: 100%;
          }
          .marginBottom {
            margin: 0 0 16px 0;
          }

          @media (min-width: 1280px) {
            .accordion {
              color: #1d2939;
              transition: 0.1s;
            }
          } ;
        `}</style>
      </>
    )
  } else {
    null
  }
}

//Dropdown Carreras
interface AccordionProps {
  title?: string
  children?: any
  expand?: boolean
  handleClickSelectCourse?: (codigoCarrera: string) => void
  event?: () => void
  dataAranceles: Aranceles
  loadingData?: boolean
}

export function AccordionCourses(props: AccordionProps) {
  const [expand, setExpand] = useState<boolean>(props.expand)

  useEffect(() => {
    setExpand(props.expand)
  }, [props])
  if (props.dataAranceles?.multicarrera.length !== 1) {
    return (
      <>
        <div>
          <button
            className={'accordion ' + (expand ? 'active' : '')}
            onClick={() => {
              if (props.event) {
                props.event()
              } else {
                setExpand((expand) => !expand)
              }
            }}
          >
            {props.loadingData ? <>{/* AQUI VA EL SKELETON */}</> : props.dataAranceles?.carrera}
            <i className={'ri-arrow-down-s-line ' + (expand ? 'active' : '')}></i>
          </button>
          <div className="panel" style={{ maxHeight: expand ? '100vh' : null }}>
            <div className="content">
              {props.dataAranceles?.multicarrera.map((dataArancel: Multicarrera, index: number) => (
                <span
                  key={index}
                  onClick={() => {
                    setExpand(false)
                    props.handleClickSelectCourse(dataArancel.codigo_carrera)
                  }}
                >
                  <p className="listCourses">{dataArancel.nombre_carrera}</p>
                  <LineSeparator />
                </span>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .accordion {
            font-family: 'Karla';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #0b141f;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 15px 8px;
            gap: 8px;
            background: #ffffff;
            border: 1px solid #93a3f7;
            cursor: pointer;
            width: 100%;
            transition: 0.4s;
            border-radius: 8px;
          }

          i {
            transition: transform 0.2s ease-out;
          }
          i.active {
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
          }
          .panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
          }
          .content {
            padding: 5px 0;
            background: #fff;
            color: #1d2939;
            padding: 13.5px 11px;
            border-bottom: 1px solid #93a3f7;
            border-left: 1px solid #93a3f7;
            border-right: 1px solid #93a3f7;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
          .listCourses {
            padding: 8px 0px;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }
  if (props.dataAranceles?.multicarrera.length === 1) {
    return (
      <>
        <div>
          <button
            className={'accordion ' + (expand ? 'active' : '')}
            onClick={() => {
              if (props.event) {
                props.event()
              } else {
                setExpand((expand) => !expand)
              }
            }}
          >
            {props.loadingData ? <>{/* AQUI VA EL SKELETON */}</> : props.dataAranceles?.carrera}
            <i className={'ri-arrow-down-s-line ' + (expand ? 'active' : '')}></i>
          </button>
        </div>

        <style jsx>{`
          .accordion {
            font-family: 'Karla';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #667085;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 15px 8px;
            gap: 8px;
            background: #f6f7f7;
            border: 1px solid #c3c5ca;
            cursor: auto;
            width: 100%;
            transition: 0.4s;
            border-radius: 8px;
          }
        `}</style>
      </>
    )
  }
}
