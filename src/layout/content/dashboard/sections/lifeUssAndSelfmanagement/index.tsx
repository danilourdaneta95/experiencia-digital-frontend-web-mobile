import { Autogestion } from 'components/customs/cards/autogestion'
import { VidaUSS } from 'components/customs/cards/vidaUss'

export default function LifeUssAndSelfmanagement() {
  return (
    <>
      <section className="container" id="VidaAutoGestion">
        <VidaUSS
          variant="link"
          iconName="ri-arrow-right-s-line"
          labelContent="Biblioteca"
          supportingText="Material"
          iconNameTitle="ri-open-arm-line"
          title="Vida USS"
        />
        <Autogestion
          variant="link"
          iconName="ri-arrow-right-s-line"
          labelContent="Biblioteca"
          supportingText="Material"
          iconNameTitle="ri-book-open-line"
          title="Autogestión"
        />
      </section>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            align-items: flex-start;
            justify-content: space-between;
            padding: var(--margin-section);
          }
        `}
      </style>
    </>
  )
}
