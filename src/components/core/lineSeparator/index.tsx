interface LineSeparatorProps {
  colorLineSm?: string
  colorLineXl?: string
}
export default function LineSeparator(props: LineSeparatorProps) {
  return (
    <>
      <div className="lineSeparator"></div>
      <style jsx>{`
        /**  This will change the style of the component when the screen is
        ** minor that 744px.
        ** Sm- Mobile Version
        */
        .lineSeparator {
          border-top: 1px solid ${props.colorLineSm || `var(--lineSeparator-color)`};
        }

        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Xl- Desktop - Version
        */
        @media (min-width: 1280px) {
          .lineSeparator {
            border-top: 1px solid ${props.colorLineXl || `var(--lineSeparator-color)`};
          }
        }
      `}</style>
    </>
  )
}
