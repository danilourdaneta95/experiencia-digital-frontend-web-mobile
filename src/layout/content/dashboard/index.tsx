export interface DashboardProps {
  children?: React.ReactNode
  labelSection: string
  height?: string
  minHeightRest?: string
  marginTop?: string
}

export default function Dashboard(props: DashboardProps) {
  return (
    <>
      <section id="Dashboard" role="region" aria-label={props.labelSection}>
        {props.children}
      </section>
      <style jsx>{`
        #Dashboard {
          display: grid;
          grid-area: dashboard;
          min-height: calc(100vh - ${props.minHeightRest || `154px`});
          overflow-y: hidden;
          padding: var(--paddingDashboardSm);
          height: ${props.height || `max-content`};
          margin-top: ${props.marginTop || `88px`};
          align-content: baseline;
        }
        @media (min-width: 1280px) {
          #Dashboard {
            padding: var(--paddingDashboardXl);
            margin-top: 0px;
          }
        }
      `}</style>
    </>
  )
}
