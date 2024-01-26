import ButtonIcon from 'components/core/buttonIcon'
import { GetUserData } from 'context/user'
import { useEffect, useState } from 'react'
import { User } from 'types/user'
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
      <div className="gridData" key={data?._id}>
        <h6 className="accountName">{data?.fullname}</h6>
        <div className="career">{data?.carrera}</div>
        <div className="email">{data?.email}</div>
      </div>
      <style jsx>{`
        @media (min-width: 1280px) {
          .gridData {
            margin-left: 0.75rem;
            text-align: left;
          }
          .accountName {
            color: var(--buttonIcon-label-labelColor-default);
            line-height: 20px;
          }
          .career {
            font-family: 'Montserrat';
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--gray-500);
          }
          .email {
            font-family: 'Montserrat';
            font-size: 0.875rem;
            font-weight: 400;
            color: var(--gray-500);
            line-height: 1rem;
          }
        }
      `}</style>
    </>
  )
  if (isCompressedSidebar === false) {
    return (
      <>
        <a href="#" className={`AvatarGrid ${isCompressedSidebar ? `close` : `open`}`}>
          <ButtonIcon variant="avatar" ariaLabel="Avatar de Usuario" iconName="ri-account-circle-line" />
          {infoUser}
        </a>
        <style jsx>{`
          .AvatarGrid {
            display: grid;
            grid-template-columns: min-content auto;
            align-items: center;
            padding: 0rem;
            background-color: transparent;
            border-radius: 0.5rem;
            margin-left: 0rem;
            min-height: 74px;
          }
          .AvatarGrid:focus {
            border: 1px solid var(--focus);
            background: var(--gray-100);
          }
          .AvatarGrid:focus-visible {
            outline: var(--focus) auto 1px;
            background: var(--gray-100);
          }

          @media (min-width: 1280px) {
          }
        `}</style>
      </>
    )
  }
  if (isCompressedSidebar === true) {
    return (
      <>
        <a href="#" className={`AvatarGrid ${isCompressedSidebar ? `close` : `open`}`}>
          <ButtonIcon
            variant="basic"
            ariaLabel="Avatar de Usuario"
            iconName="ri-account-circle-line"
            buttonBorderRadius="50%"
          />
        </a>
        <style jsx>{`
          .AvatarGrid {
            display: grid;
            grid-template-columns: min-content;
            align-items: center;
            padding: 0rem;
            background-color: transparent;
            border-radius: 0.5rem;
            margin-top: 0px;
            margin-left: 0rem;
            border-radius: 50%;
            min-height: 74px;
          }
          .AvatarGrid:focus {
            border: 1px solid var(--focus);
            background: var(--gray-100);
          }
          .AvatarGrid:focus-visible {
            outline: var(--focus) auto 1px;
            background: var(--gray-100);
          }

          .close {
            width: min-content;
          }
        `}</style>
      </>
    )
  }
}
