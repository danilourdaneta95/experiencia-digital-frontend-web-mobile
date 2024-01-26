import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ButtonLabel from 'components/core/buttonIcon/variant/label'
import Card from 'components/core/card'
import { CardPaymentDetailArancel, CardPaymentDetailMatricula } from 'components/core/card/variant/paymentDetail'
import TitleNavigation from 'components/core/titleNavigation'
import { AccordionCourses } from 'components/accordionPayment'
import { gqlMisAranceles } from 'gql'
import apolloClient from 'settings/apollo'
import { ArancelesData } from 'types/mis-aranceles'

export function MyTariff() {
  const [expandMatricula, setExpandMatricula] = useState(false)
  const [expandArancel, setExpandArancel] = useState(false)
  const toggleMatricula = () => {
    setExpandMatricula((prev) => !prev), setExpandArancel(false)
  }
  const toggleArancel = () => {
    setExpandArancel((prev) => !prev), setExpandMatricula(false)
  }
  const [selectCourse, setSelectCourse] = useState(true)
  const selectCourseDetail = () => {
    setSelectCourse((value) => value)
  }
  const [data, setData] = useState<ArancelesData>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    getDataAranceles()
  }, [])

  const getDataAranceles = (codigoCarrera?: string) => {
    setLoading(true)
    apolloClient
      .query<ArancelesData>({
        query: gqlMisAranceles.queries.GET_ARANCELES,
        variables: {
          arancelesInput: {
            carrera: codigoCarrera,
          },
        },
      })
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
  }

  return (
    <>
      <TitleNavigation title="Mis Aranceles" hideSm={true} />
      <Card
        cardHeight="auto"
        backgroundColorSm="#f5f7f9"
        backgroundColorMd="#f5f7f9"
        backgroundColorXl="#fff"
        boxShadowSm={false}
        padding={'32px 35px 0 32px'}
        paddingSm="16px 0"
        paddingMd="16px 0"
        cardMargin="0px"
      >
        <div className="container">
          <div className="column1">
            <h4 className="title">Mi resumen</h4>
            <section className="select">
              <AccordionCourses
                dataAranceles={data?.aranceles}
                loadingData={loading}
                handleClickSelectCourse={(codigoCarrera: string) => {
                  getDataAranceles(codigoCarrera)
                }}
              />
            </section>
            <div className="containerInfo">
              <div className="marginBottom">
                <p>Numero de contrato</p>
                {loading ? <>{/* AQUI VA EL SKELETON */}</> : <p className="bold">{data?.aranceles.numero_contrato}</p>}
              </div>
              <div className="periodo">
                <p>Período en curso</p>
                {loading ? <>{/* AQUI VA EL SKELETON */}</> : <p className="bold">{data?.aranceles.periodo}</p>}
              </div>
            </div>
          </div>
          <div className="column2">
            <CardPaymentDetailMatricula
              expand={expandMatricula}
              open={selectCourse}
              handleClickMatricula={toggleMatricula}
              handleClickSelectCourse={selectCourseDetail}
              dataAranceles={data?.aranceles}
              loadingData={loading}
            />
            <CardPaymentDetailArancel
              expand={expandArancel}
              open={selectCourse}
              handleClickArancel={toggleArancel}
              handleClickSelectCourse={selectCourseDetail}
              dataAranceles={data?.aranceles}
              loadingData={loading}
            />
          </div>
        </div>
        <div className="download">
          <Link href={'/src/assets/misAranceles/DR 139 2022 Decreto MatrículayArancelesUSS2023.pdf'}>
            <a target={'blank'} download>
              <ButtonLabel
                variant={'label'}
                ariaLabel={'botón para Ver otros aranceles'}
                labelContent={'Ver otros aranceles'}
                labelColor={'#001EB8'}
                iconName={'ri-share-box-line'}
                iconSize={'18px'}
                iconColor={'#001EB8'}
                buttonBackground={'transparent'}
                positionLabel={'Right'}
                alignButtonContent={'MiddleCenter'}
                buttonColorHover={'transparent'}
                colorBorderFocus={'none'}
                textDecoration={'underline'}
                buttonSizeWidth={'max-content'}
              />
            </a>
          </Link>
        </div>
      </Card>
      <style jsx>{`
        .container {
          width: 100%;
          margin-top: 80px;
        }
        section {
          padding: 8px 0;
          margin: 0 0 16px 0;
          width: 100%;
        }
        .containerInfo {
          display: flex;
          justify-content: space-between;
          margin: 0 0 22px 0;
          gap: 35px;
          justify-content: flex-start;
        }
        .title {
          padding-bottom: 11px;
        }
        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin-top: 0;
            background: #ffff;
          }
          .containerInfo {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            gap: 16px;
          }
          .column2 {
            margin-top: 48px;
          }
          .periodo {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
          }
          .column1 {
            display: grid;
            padding: 0 44px 0 0;
            height: max-content;
          }
          .title {
            margin: 0 0 15px;
          }
          .download {
            display: flex;
            margin: 0 0 14px 9px;
          }
        }
      `}</style>
    </>
  )
}
