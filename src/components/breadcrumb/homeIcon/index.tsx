import router from 'next/router'
import 'remixicon/fonts/remixicon.css'
import { CONSTANTS } from 'settings/constants'

export default function HomeIcon() {
  return (
    <>
      <div className="container">
        <button onClick={() => router.push(CONSTANTS.ROUTES.DASHBOARD)}>
          <div className="iconsContainer">
            <i className="iconHome ri-home-6-line"></i>
          </div>
        </button>

        <div className="iconsContainer">
          <i className="arrow ri-arrow-right-s-line"></i>
        </div>
        <button onClick={() => router.push(CONSTANTS.ROUTES.DASHBOARD)}>
          <div className="iconsContainer">
            <p className="breadcrumb-not-active">Home</p>
          </div>
        </button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          padding-left: var(--marginSize);
          align-items: center;
        }
        .iconsContainer {
          display: flex;
          align-items: center;
        }
        .iconHome {
          font-size: 21px;
          color: var(--gray-500);
          margin: 0 13px 0 0;
          padding: 0;
        }
        .arrow {
          color: var(--gray-300);
          font-size: 21px;
          padding: 0;
        }
        button {
          background: none;
        }
        .breadcrumb-not-active {
          font-family: 'Inter';
          font-weight: 500;
          font-size: 14px;
          color: var(--gray-500);
        }
      `}</style>
    </>
  )
}
