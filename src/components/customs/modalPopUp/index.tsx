import Image from 'next/future/image'
import logo from 'assets/logo/logoUSSWithLabel.svg'
import ButtonIcon from 'components/core/buttonIcon'
import { useContext, useState } from 'react'
import ClassesCardPopUp from './classesPopUp'
import ModalCountContext from 'context/modalCount/modalCountContext'

interface ModalProps {
  zIndexModal?: number
  variant?: 'WelcomePopUp' | 'ClassesPopUp'
  initialStateModal?: any // only apply for variant WelcomePopUp
  initialStateWelcomePopUp?: any // only apply for variant WelcomePopUp
  stateActive?: any // only apply for variant ClassesPopUp
  stateClassesActive?: any // only apply for variant ClassesPopUp pass State hook
  handleClickClassesPopUp?: any // only apply for variant ClassesPopUp pass toggle function
  classDate?: string // only apply for variant ClassesPopUp
  classTime?: string // only apply for variant ClassesPopUp
  titleClass?: string // only apply for variant ClassesPopUp
  codeClass?: string // only apply for variant ClassesPopUp
  classRoomCode?: string // only apply for variant ClassesPopUp
  teacherName?: string // only apply for variant ClassesPopUp
  handleClickClassesCard?: any // only apply for variant ClassesPopUp
  welcomePopUpRender?: boolean
  setCountWelcomePopUp?: void
}
interface WelcomeCardPopUpProps {
  handleClickPopUp?: any
  zIndexPopUp?: number
}

export function ModalPopUp(props: ModalProps) {
  const component = props.variant
  const [modalActive, setModalActive] = useState(props.initialStateModal)
  const [welcomePopUpActive, setWelcomePopUpActive] = useState(props.initialStateWelcomePopUp)

  const { countWelcomePopUp, setCountWelcomePopUp } = useContext(ModalCountContext)

  const closeModalAndWelcomePopUp = () => {
    setWelcomePopUpActive(false), setModalActive(false), setCountWelcomePopUp()
  }
  const closeModalAndClassesPopUp = props.handleClickClassesPopUp // toggle function of state component misemana.tsx
  const stateModal = props.stateActive // State pass of component misemana.tsx

  let renderCountWelcomePopUp = true
  if (countWelcomePopUp > 0) {
    renderCountWelcomePopUp = false
  } else {
    renderCountWelcomePopUp = true
  }

  if (modalActive === true && component === 'WelcomePopUp' && renderCountWelcomePopUp) {
    return (
      <>
        <div className={`modal ${modalActive ? 'active' : ''}`} onClick={closeModalAndWelcomePopUp}></div>

        <div className="childrenModal">
          {welcomePopUpActive == true && <WelcomeCardPopUp handleClickPopUp={closeModalAndWelcomePopUp} />}
        </div>
        <style jsx>{`
          /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
          .modal {
            z-index: ${props.zIndexModal || `11`};
            width: 100vw;
            height: 100vh;
            position: absolute;
            display: grid;
            place-items: center;
          }

          .modal.active {
            background: rgba(0, 0, 0, 0.5);
          }
          .childrenModal {
            display: grid;
            width: auto;
            height: auto;
            position: absolute;
            place-items: center;
            z-index: 12;
            bottom: 0%;
            max-height: calc(100vh - var(--height-header));
            overflow-y: scroll;
          }

          /**  A media query that will change the style of the component when the screen is
                ** greater that 744px and max 1279px.
                ** Md- Tablet - Version
                */

          /*
                @media (min-width: 744px) and (max-width: 1279px) {
                    .container {
                    }
                }
                */

          /** A media query that will change the style of the component when the screen is
                ** greater than 1280px.
                ** Xl- Desktop - Version
                */
          @media (min-width: 1280px) {
            .modal {
              align-items: center;
            }
            .childrenModal {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              bottom: unset;
            }

            .childrenModal {
              overflow-y: unset;
            }
          }
        `}</style>
      </>
    )
  }

  if (stateModal === true && component === 'ClassesPopUp') {
    return (
      <>
        <div className={`modal ${stateModal ? 'active' : ''}`} onClick={closeModalAndClassesPopUp}></div>

        <div className="childrenModal">
          {stateModal == true && (
            <ClassesCardPopUp
              handleClickClassesCard={closeModalAndClassesPopUp}
              classDate={props.classDate}
              classTime={props.classTime}
              titleClass={props.titleClass}
              codeClass={props.codeClass}
              classRoomCode={props.classRoomCode}
              teacherName={props.teacherName}
            />
          )}
        </div>
        <style jsx>{`
          /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
          .modal {
            z-index: ${props.zIndexModal || `11`};
            width: 100vw;
            height: 100vh;
            position: absolute;
            display: grid;
            place-items: center;
          }

          .modal.active {
            background: rgba(0, 0, 0, 0.5);
          }
          .childrenModal {
            display: grid;
            width: max-content;
            height: auto;
            position: absolute;
            place-items: center;
            z-index: 12;
            bottom: 0%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            bottom: unset;
          }

          /**  A media query that will change the style of the component when the screen is
                ** greater that 744px and max 1279px.
                ** Md- Tablet - Version
                */

          /*
                @media (min-width: 744px) and (max-width: 1279px) {
                    .container {
                    }
                }
                */

          /** A media query that will change the style of the component when the screen is
                ** greater than 1280px.
                ** Xl- Desktop - Version
                */
          @media (min-width: 1280px) {
            .modal {
              align-items: center;
            }
            .childrenModal {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              bottom: unset;
            }
          }
        `}</style>
      </>
    )
  } else return null
}

export function WelcomeCardPopUp(props: WelcomeCardPopUpProps) {
  return (
    <>
      <div className="cardPopUp" id="WelcomeCardPopUp">
        <div className="logoContainer">
          <picture>
            <Image src={logo} alt="Universidad San Sebastian Logo" priority={true} />
          </picture>
          <button id="ClosePopUp-Top" aria-label="Cerrar PopUp" onClick={props.handleClickPopUp}>
            <i className="ri-close-line icon"></i>
          </button>
        </div>
        <div className="welcomeContainer">
          <button id="ClosePopUp-Right" aria-label="Cerrar PopUp" onClick={props.handleClickPopUp}>
            <i className="ri-close-line icon"></i>
          </button>
          <h4 className="bold">
            ¡Bienvenidos al nuevo <br /> Mi USS!
          </h4>

          <p>
            Hemos desarrollado una nueva experiencia en la que podrás acceder de forma simple, segura y cómoda a lo que
            necesitas en tu día a día en la universidad.
          </p>
          <p>
            Esta experiencia la hemos construido y la seguiremos construyendo en colaboración con los mismos estudiantes
            de las distintas sedes a lo largo del país.
          </p>
          <p>Dentro del sitio, algunas funcionalidades las iremos sumando y/o mejorando durante el tiempo.</p>
          <p>
            Podrás dejar tus comentarios o ideas constantemente en{' '}
            <a href="https://goo.su/4a7e2oM">https://goo.su/4a7e2oM</a>
          </p>
          <div className="button">
            <ButtonIcon
              variant="label"
              labelContent={'Entendido'}
              alignButtonContent={'MiddleSpaceBetween'}
              iconName="ri-check-line"
              iconColor="#FFFFFF"
              buttonBackground="#12b76a"
              labelColor="#FFFFFF"
              buttonSizeHeight="3rem"
              buttonMaxSizeWidth="max-content"
              buttonBorderRadius="2rem"
              positionLabel="Left"
              buttonIconPadding="0.625rem 1.25rem"
              handleClick={props.handleClickPopUp}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
        .cardPopUp {
          border-radius: 2rem 2rem 0rem 0rem;
          overflow: hidden;
          width: 100%;
          background: var(--background);
          align-items: center;
          text-align: center;
        }
        .logoContainer {
          display: grid;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(${process.env
            .NEXT_PUBLIC_BASE_PATH}${`/assets/backgroundPopUp/background_Pop_up_mobile.svg`});
        }

        #ClosePopUp-Top {
          display: grid;
          position: fixed;
          background: transparent;
          margin: 1rem 0.5rem 0rem 0rem;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          backdrop-filter: blur(1px);
          justify-self: end;
          cursor: pointer;
          right: 0;
        }

        #ClosePopUp-Right {
          display: none;
        }
        .welcomeContainer {
          height: 100%;
          padding: 1.5rem 2rem;
        }

        h4 {
          padding: 0 0 1rem 0;
          color: var(--h4-font-color);
        }

        h4 > span {
          background: var(--h4-span-bg);
          border-radius: 1rem;
          color: white;
          font-size: var(--h6-mobile);
          padding: 0.25rem 0.5rem;
          margin: 0rem 0rem 0rem 0.5em;
          vertical-align: middle;
        }
        p {
          line-height: 1.625rem;
          padding: 0 0 1rem 0;
          color: var(--grey-700);
        }
        .button {
          padding: 1.5rem 0;
        }
        .icon {
          display: grid;
          width: 100%;
          height: 100%;
          color: var(--very-dark-desaturated-blue);
          place-items: center;
          font-size: 1rem;
        }
        .badget {
          background: var(--h4-span-bg);
          border-radius: 1rem;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--white);
          padding: 0.125rem 0.625rem;
          width: max-content;
          height: 1.125rem;
          align-items: center;
          text-align: center;
          margin: 0 0 0 0.5rem;
        }
        /**  A media query that will change the style of the component when the screen is
                ** greater that 744px and max 1279px.
                ** Md- Tablet - Version
                */

        /*
                @media (min-width: 744px) and (max-width: 1279px) {
                    .container {
                    }
                }
                */

        /** A media query that will change the style of the component when the screen is
                ** greater than 1280px.
                ** Xl- Desktop - Version
                */
        @media (min-width: 1280px) {
          .cardPopUp {
            display: flex;
            background: var(--background);
            width: 56.25rem;
            height: 34rem;
            border-radius: 2rem;
            align-items: center;
            text-align: center;
          }
          .logoContainer {
            display: grid;
            align-items: center;
            width: 40%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(${process.env
              .NEXT_PUBLIC_BASE_PATH}${`/assets/backgroundPopUp/background_Pop_up_Desktop.svg`});
          }
          .welcomeContainer {
            display: grid;
            padding: 0rem 0 0 0;
            width: 60%;
            height: 100%;
          }

          #ClosePopUp-Right {
            display: grid;
            background: transparent;
            margin: 1rem 0.5rem 0rem 0rem;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            justify-self: end;
            cursor: pointer;
          }

          #ClosePopUp-Top {
            display: none;
          }
          p {
            padding: 0 2.938rem;
          }
        }
      `}</style>
    </>
  )
}
