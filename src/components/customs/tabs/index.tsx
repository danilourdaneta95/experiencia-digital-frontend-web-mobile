import { Children, useState } from 'react'
import TabContent from './section'

interface TabsProps {
  children?: any
}

export default function Tabs(props: TabsProps) {
  const [option, setOption] = useState(0)
  const contents: any[] = []

  Children.forEach(props.children, (child) => {
    if (child.type === TabContent) {
      contents.push(child)
    }
  })

  return (
    <>
      <div className="container">
        <ul className="nav nav-tabs">
          {contents.map((section, index) => (
            <li className={'nav-item' + (option == index ? ' active' : '')} key={index}>
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setOption(index)
                }}
              >
                {section.props.title}
              </a>
              <div className="underline"></div>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {contents.map((section, index) => (
            <div className={'tab-pane fade' + (option == index ? ' active' : '')} key={index}>
              {section}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
        }
        .container .nav-tabs {
          margin-bottom: 1.5rem;
          margin-top: 0rem;
          border-bottom: 1px solid #dee2e6;
          display: inline-flex;
        }
        .nav {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }
        .nav-item {
          margin-right: 20px;
        }
        .nav-tabs .nav-item .nav-link {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.02em;
          color: #58616e;
          display: block;
          padding: 1.25rem 0rem;
        }
        .nav-tabs .nav-item.active .nav-link {
          color: #001eb8;
        }
        .nav-tabs .nav-item .underline {
          background-color: #001eb8;
          height: 2px;
          width: 0%;
          margin: auto;
          margin-bottom: -2px;
          transition: width 0.15s ease-in;
        }
        .nav-tabs .nav-item.active .underline {
          width: 100%;
        }
        .tab-content > .active {
          display: block !important;
        }
        .tab-content > .tab-pane {
          display: none;
        }
        a:focus,
        a:focus-visible {
          outline: 0px;
          background-color: transparent !important;
          border-radius: 0px !important;
        }
        @media (min-width: 1280px) {
        }
      `}</style>
    </>
  )
}
