import { useEffect, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  children: any
  expand?: boolean
  event?: () => void
}

export default function Accordion(props: AccordionProps) {
  const [expand, setExpand] = useState<boolean>(props.expand)

  useEffect(() => {
    setExpand(props.expand)
  }, [props])

  return (
    <>
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
        {props.title}
        <i className={'ri-arrow-down-s-line ' + (expand ? 'active' : '')}></i>
      </button>
      <div className="panel" style={{ maxHeight: expand ? '100vh' : null }}>
        <div className="content">{props.children}</div>
      </div>

      <style jsx>{`
        .accordion {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
          color: #0b141f;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 16px 12px;
          gap: 8px;
          background: #f9fafb;
          border-bottom: 1px solid #d4d6d9;
          cursor: pointer;
          width: 100%;
          transition: 0.4s;
        }
        button.active,
        .accordion:hover {
          background-color: #e4e8fc;
          color: #001894;
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
          padding: 15px 12px;
          background-color: #f2f4f7;
        }
      `}</style>
    </>
  )
}
