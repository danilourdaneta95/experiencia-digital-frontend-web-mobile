export default function QualificationContent({ children }) {
  return (
    <>
      <div id="container">{children}</div>
      <style jsx>{`
        #container {
          display: grid;
          min-height: calc(100vh - var(--height-header) - (var(--height-breadcrumb) + 48px));
          padding: var(--paddingDashboardSm);
          height: max-content;
          margin-top: 88px;
          align-content: baseline;
        }
        @media (min-width: 1280px) {
          #container {
            padding: var(--paddingDashboardXl);
            height: max-content;
            margin-top: 0px;
          }
        }
      `}</style>
    </>
  )
}
