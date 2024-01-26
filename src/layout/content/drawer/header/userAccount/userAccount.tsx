import ButtonIcon from 'components/core/buttonIcon'
import { GetUserData } from 'context/user'
import { useEffect, useState } from 'react'
import { User } from 'types/user'
// import { useSession, signOut } from 'next-auth/react'
// import { useRouter } from 'next/router'
// import CustomSession from 'services/session'

interface SidebarState {
  open: boolean
}

export default function UserAccount(props: SidebarState) {
  const isCompressedSidebar = props.open
  const [data, setData] = useState<User>()

  useEffect(() => {
    setData(GetUserData())
  }, [])

  const infoUser = (
    <>
      {/* <div className="gridData">
        <h5 className="accountName">{student?.student?.name} {student?.student?.lastname}</h5>
        <div className="career">{student?.student?.carrera}</div>
        <div className="email">{student?.student?.email}</div>
      </div> */}
      <div className="gridData" key={data?._id}>
        <h5 className="accountName">{data?.fullname}</h5>
        <div className="career">{data?.carrera}</div>
        <div className="email">{data?.email}</div>
      </div>
      <style jsx>{`
        .gridData {
          margin-left: 12px;
          text-align: left;
        }
        .accountName {
          font-family: 'Montserrat';
          font-size: 1rem;
          font-weight: 600;
          color: #344054;
          line-height: 20px;
        }
        .career {
          font-family: 'Montserrat';
          font-size: 0.875rem;
          font-weight: 500;
          color: #667085;
        }
        .email {
          font-family: 'Montserrat';
          font-size: 0.875rem;
          font-weight: 400;
          color: #667085;
          line-height: 16px;
        }
        @media (min-width: 1280px) {
        }
      `}</style>
    </>
  )
  if (isCompressedSidebar === true) {
    return (
      <>
        <a href="#" className={`AvatarGrid ${isCompressedSidebar ? `open` : `close`}`}>
          <ButtonIcon variant="avatar" ariaLabel="Avatar de Usuario" iconName="ri-account-circle-line" />
          {infoUser}
        </a>
        <style jsx>{`
          .AvatarGrid {
            display: grid;
            grid-template-columns: min-content auto;
            align-items: center;
            padding: 0px;
            background-color: transparent;
            border-radius: 8px;
            margin-bottom: 24px;
            height: var(--height-header);
          }
          .AvatarGrid:focus {
            border: 1px solid var(--focus);
            background: #f2f4f7;
          }
          .AvatarGrid:focus-visible {
            outline: var(--focus) auto 1px;
            background: #f2f4f7;
          }

          @media (min-width: 1280px) {
          }
        `}</style>
      </>
    )
  }
  if (isCompressedSidebar === false) {
    return (
      <>
        <div className={`AvatarGrid ${isCompressedSidebar ? `open` : `close`}`}>
          <ButtonIcon
            variant="basic"
            ariaLabel="Avatar de Usuario"
            iconName="ri-account-circle-line"
            buttonBorderRadius="50%"
          />
        </div>
        <style jsx>{`
          @media (min-width: 1280px) {
            .AvatarGrid {
              display: grid;
              grid-template-columns: min-content auto;
              align-items: center;
              padding: 0px;
              background-color: transparent;
              border-radius: 8px;
              margin-bottom: 29px;
              margin-top: 6px;
              width: 44px;
            }
            .AvatarGrid:focus {
              border: 1px solid var(--focus);
              background: #f2f4f7;
            }
            .AvatarGrid:focus-visible {
              outline: var(--focus) auto 1px;
              background: #f2f4f7;
            }
          }
        `}</style>
      </>
    )
  }
}
