export default function WithOutClasses() {
  return (
    <>
      <section className="container">
        <i className="ri-calendar-event-line icon"></i>
        <p className="label font-karla">Hoy no registramos clases para ti</p>
      </section>

      <style jsx>{`
        /**  This will change the style of the component when the screen is
                ** minor that 744px.
                ** Sm- Mobile Version
                */
        .container {
          display: grid;
          background: var(--gray-100);
          width: 100%;
          height: max-content;
          text-align: center;
          gap: 0.5rem;
          border-radius: 10px;
        }
        .icon {
          text-align: center;
          font-size: 3.9rem;
          color: var(--gray-500);
          padding: 3.25rem 0 0.44rem 0;
        }
        .label {
          color: var(--gray-500);
          padding-bottom: 3.25rem;
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
          .container {
          }
        }
      `}</style>
    </>
  )
}
