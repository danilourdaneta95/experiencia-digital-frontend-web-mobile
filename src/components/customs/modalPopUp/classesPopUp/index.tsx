import Tag from 'components/core/tag'

interface ClassesCardPopUpProps {
  classDate: string
  classTime: string
  titleClass: string
  codeClass: string
  classRoomCode: string
  teacherName: string
  handleClickClassesCard: any
}

export default function ClassesCardPopUp(props: ClassesCardPopUpProps) {
  return (
    <>
      <div className="cardPopUp" id="ClassesCardPopUp">
        <div className="popUpContainer">
          <button id="ClosePopUp-Right" aria-label="Cerrar PopUp" onClick={props.handleClickClassesCard}>
            <i className="ri-close-line icon"></i>
          </button>
          <div className="content">
            <Tag background="#E1EEF8">
              <h6 className="titleTag">Mi clase</h6>
            </Tag>
            <p className="fecha">{`${props.classDate}`}</p>
            <p className="hora">
              <i className="icon ri-time-line"></i> <span>{props.classTime}</span>
            </p>
            <h5 className="classTitle">{`${props.titleClass}`}</h5>
            <h5 className="classCode">Matería {props.codeClass}</h5>
            <Tag background="#F2F4F7" margin="0px 0px 12px 0px" borderRadius="2rem">
              <h6 className="titleTag-sala">
                <i className="icon ri-map-pin-line"></i>
                <span>Sala:</span>
                <span>{props.classRoomCode}</span>
              </h6>
            </Tag>
            <Tag background="#F2F4F7" margin="0px 0px 16px 0px" padding="8px 0px 10px 0px" borderRadius="2rem">
              <h6 className="titleTag-sala">
                <i className="icon ri-user-3-line"></i>
                <div>Profesor:</div>
                <div className="teacherName">{props.teacherName}</div>
              </h6>
            </Tag>
          </div>
        </div>
      </div>

      <style jsx>{`
        /**
        ** This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */

        .cardPopUp {
          display: grid;
          background: var(--background);
          width: 100%;
          min-width: 340px;
          max-height: max-content;
          height: max-content;
          border-radius: 0px;
          align-items: center;
          text-align: center;
        }

        .popUpContainer {
          display: grid;
          padding: 0rem 0 0 0;
          height: 100%;
        }

        #ClosePopUp-Right {
          display: grid;
          background: transparent;
          margin: 1rem 0.5rem 0rem 0rem;
          border-radius: 50%;
          width: 2.5rem;
          height: 24px;
          justify-self: end;
          cursor: pointer;
        }
        .ri-close-line.icon {
          font-size: 16px;
        }

        .button {
          padding: 1.5rem 0;
        }

        .icon.ri-time-line {
          display: grid;
          width: 100%;
          height: 100%;
          color: var(--very-dark-desaturated-blue);
          place-items: center;
          font-size: 1rem;
        }

        .content {
          display: grid;
          justify-items: center;
          margin: 0px 0px 20px 0px;
        }

        .titleTag {
          color: #00628d;
          padding: 4px 4px;
          font-weight: 500;
        }

        .fecha {
          color: #283341;
          font-family: 'Karla';
          margin: 20px 0px 8px 0px;
        }

        .hora {
          display: grid;
          grid-template-columns: min-content auto;
          margin: 0px 0px 22px 0px;
          height: 15px;
        }

        .icon.ri-time-line {
          font-size: 16px;
          color: #667085;
        }

        .hora > span {
          margin: 0px 0px 0px 8px;
          color: #667085;
        }

        .classTitle,
        .classCode {
          color: #283341;
          padding: 4px;
        }

        .classTitle {
          max-width: 320px;
        }

        .classCode {
          margin: 0px 0px 24px 0px;
        }

        .titleTag-sala {
          display: grid;
          align-items: center;
          height: auto;
          grid-template-columns: min-content min-content max-content;
          color: #344054;
          padding: 0px 12px;
          font-weight: 500;
        }

        .titleTag-sala > span:nth-child(2) {
          margin: 0px 0px 0px 4px;
        }

        .titleTag-sala > span:nth-child(3) {
          margin: 0px 0px 0px 4px;
        }

        .teacherName {
          max-width: 140px;
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
        }
      `}</style>
    </>
  )
}
