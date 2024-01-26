import GreetingEmoji from 'assets/emoticon/initialGreetingEmoji.svg'
import Image from 'next/future/image'
import ProfileSelect from 'components/customs/qa/profileSelect'
import TagToday from 'components/customs/tagToday/index'

export interface GreetingsUser {
  /**
   ** Name of User
   */
  name: string
  /**
   ** Message of Greetings default value='Hola, '
   */
  messageGreetings?: string
  /**
   ** Message of Emoji Symbols default value='👋🏼'
   */
  charactersSymbols?: string
  /**
   ** Hide Component
   */
  hideMd?: boolean
  /**
   ** Hide Component
   */
  hideXl?: boolean
}

/**
 * The function Greetings is a React component that returns a div with a emoji, message of greetings and Name of User
 * @param name props - Name of User.
 * @param messageGreetings? props - Message of Greetings default value='Hola, '.
 * @param charactersSymbols? props - Message of Emoji Symbols default value='👋🏼'
 * @returns A component with a div with a className of container.
 * @example
 * ~~~
 * <Greetings name={'Valentina'} />
 * ~~~
 */
export default function Greetings(props: GreetingsUser) {
  let hideMd: string
  let hideXl: string
  if (props.hideMd === true) {
    hideMd = 'none '
  }
  if (props.hideXl === true) {
    hideXl = 'none '
  }

  const QA = process.env.NEXT_PUBLIC_TEST_ENVIRONMENT

  return (
    <>
      <section id="Greetings" className="container ">
        <div className="twoColumns">
          <picture>
            <source srcSet="/assets/emoticon/initialGreetingEmoji.svg" type="image/svg" />
            {QA == 'true' && (
              <ProfileSelect>
                <Image src={GreetingEmoji} alt="USS te Saluda" width={30} height={30} />
              </ProfileSelect>
            )}
            {QA != 'true' && <Image src={GreetingEmoji} alt="USS te Saluda" width={30} height={30} />}
          </picture>
          <h3 className="style">{`${props.messageGreetings || 'Hola,'} ${props.name}`}</h3>
          <TagToday hideSm={true} hideMd={true} background={'#EEF4FF'} />
        </div>
      </section>

      <style jsx>{`
        .container {
          display: ${hideMd || `inline-flex`};
          align-items: center;
        }
        .style {
          color: var(--font-color-gretting);
          font-size: var(--h3-gretting-desktop);
        }
        .twoColumns {
          display: grid;
          grid-template-columns: auto 1fr auto;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          z-index: 8;
        }
        h3 {
          margin-left: 0.5rem;
        }
        p {
          padding: 0.25rem 0.75rem;
        }
        @media (min-width: 1280px) {
          .container {
            display: ${hideXl || `inline-flex`};
            margin: var(--margin-section);
          }
        }
      `}</style>
    </>
  )
}
