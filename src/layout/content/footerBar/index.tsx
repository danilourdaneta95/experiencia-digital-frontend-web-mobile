import router from 'next/router'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { CONSTANTS } from 'settings/constants'

export default function Footerbar() {
  const [option, setOption] = useState(1)
  return (
    <>
      <section id="FooterBar" className="bottom-navbar">
        <div className="left-side">
          <div></div>
          <div
            className={option == 1 ? 'btn-option active' : 'btn-option'}
            onClick={() => {
              router.push(CONSTANTS.ROUTES.DASHBOARD)
            }}
            onFocus={() => setOption(1)}
          >
            <i className="ri-home-3-line"></i>
            <label>Inicio</label>
          </div>
          <div
            className={option == 2 ? 'btn-option active' : 'btn-option'}
            onClick={() => {
              setOption(2)
              router.push(CONSTANTS.ROUTES.VIDAUSS)
            }}
          >
            <i className="ri-open-arm-line"></i>
            <label>Vida USS</label>
          </div>
        </div>
        <div className="center-side">
          <div
            className="circle"
            onClick={() => {
              setOption(0)
            }}
          >
            <i className="ri-qr-code-line"></i>
          </div>
        </div>
        <div className="right-side">
          <div
            className={option == 3 ? 'btn-option active' : 'btn-option'}
            onClick={() => {
              setOption(3)
              router.push(CONSTANTS.ROUTES.AUTOGESTION)
            }}
          >
            <i className="ri-book-open-line"></i>
            <label>Autogestión</label>
          </div>
          <div
            className={option == 4 ? 'btn-option active' : 'btn-option'}
            onClick={() => {
              setOption(4)
              router.push(CONSTANTS.ROUTES.OUTLOOK_MAIL)
            }}
          >
            <i className="ri-mail-line"></i>
            <label>Mi Correo</label>
          </div>
          <div></div>
        </div>
      </section>

      <style jsx>{`
        .bottom-navbar {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 80px;
          display: inline-flex;
          grid-area: footerBar;
        }
        .bottom-navbar .left-side {
          width: calc(50% - 40px);
          height: 100%;
          background-color: #fff;
          border-radius: 0px 6px 0px 0px;
          box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 12px 12px 0px;
        }
        .bottom-navbar .right-side {
          width: calc(50% - 40px);
          height: 100%;
          background-color: #fff;
          border-radius: 6px 0px 0px 0px;
          box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 12px 12px 0px;
        }
        .bottom-navbar .center-side {
          width: 80px;
          height: 100%;
          background-image: radial-gradient(
            circle at calc(50% + 0.5px) 0px,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0) 40px,
            #fff 41px
          );
          z-index: 10;
        }
        .circle {
          height: 60px;
          width: 60px;
          border-radius: 30px;
          background-color: #fff;
          margin: auto;
          margin-top: -30px;
          box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.2);
          z-index: 9;
          display: grid;
          align-items: center;
          text-align: center;
        }
        .circle i {
          font-size: 1.75rem;
          color: #001894;
        }
        .btn-option {
          text-align: center;
          color: #475467;
          display: grid;
          gap: 5px;
        }
        .btn-option i {
          font-size: 1.375rem;
          font-weight: 500;
        }
        .btn-option label {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 0.5rem;
          line-height: 10px;
          letter-spacing: -0.3px;
        }
        .btn-option.active {
          color: #001894;
        }
        @media (min-width: 1280px) {
          .bottom-navbar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
