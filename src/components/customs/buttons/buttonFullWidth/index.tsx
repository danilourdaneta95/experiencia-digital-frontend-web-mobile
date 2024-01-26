import ButtonIcon from 'components/core/buttonIcon'
import { useRouter } from 'next/router'

interface ButtonFullWidthProps {
  filter?: boolean
  variant?: string
  disabled?: boolean
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * buttonBackground="#fff"
   * ~~~
   */
  buttonBackground?: string
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent={`Boton de ${props.labelContent}`}
   * ~~~
   */
  labelContent: string
  /**
   ** Set Icon Name remix value=String
   * @see name of icons {@link https://remixicon.com/ REMIX ICON}
   *
   * @example
   * ~~~
   * iconName={props.iconName}
   * ~~~
   */
  iconName?: string
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundUrlImage?: string
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * buttonBackgroundImgHover="/assets/svg/button/backgroundButton.svg"
   * ~~~
   */
  buttonBackgroundImgHover?: string
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelColor=${props.labelColor}
   * ~~~
   */
  labelColor?: string
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * buttonSizeWidth="6.75rem"
   * ~~~
   */
  buttonSizeWidth?: string
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * buttonSizeHeight="6.75rem"
   * ~~~
   */
  buttonSizeHeight?: string
  /**
   * * Setting the redirectTo property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * buttonSizeHeight="6.75rem"
   * ~~~
   */
  redirectTo?: string
}

export default function ButtonFullWidth(props: ButtonFullWidthProps) {
  const router = useRouter()
  return (
    <>
      <ButtonIcon
        variant="label"
        disabled={props.disabled}
        buttonHideSm={true}
        labelContent={props.labelContent}
        labelColor={props.labelColor}
        alignButtonContent="MiddleCenter"
        backgroundImage={true}
        backgroundUrlImage="/assets/button/backgroundButton.svg"
        buttonBackgroundImgHover="/assets/button/backgroundButtonHover.svg"
        ariaLabel={`Boton de ${props.labelContent}`}
        iconName={props.iconName}
        iconSize="1.875rem"
        iconColor="#001894"
        buttonSizeWidth="100%"
        buttonSizeHeight="5.5rem"
        buttonBorderRadius="12px"
        colorBorderFocus="#0024DB"
        hideIcon={false}
        positionLabel="Right"
        buttonBackground={props.buttonBackground}
        handleClick={() => router.push(props.redirectTo)}
      />
      <ButtonIcon
        variant="label"
        disabled={props.disabled}
        filter={props.filter}
        buttonHideMd={true}
        buttonHideXl={true}
        labelContent={props.labelContent}
        positionLabel="Bottom"
        labelColor={props.labelColor}
        alignButtonContent="MiddleCenter"
        backgroundImage={true}
        backgroundUrlImage="/assets/button/backgroundButton.svg"
        buttonBackgroundImgHover="/assets/button/backgroundButtonHover.svg"
        ariaLabel={`Boton de ${props.labelContent}`}
        iconName={props.iconName}
        iconSize="1.875rem"
        iconColor="#001894"
        buttonSizeWidth="100%"
        buttonSizeHeight="5.5rem"
        buttonBorderRadius="0.75rem"
        colorBorderFocus="#0024DB"
        buttonBackground={props.buttonBackground}
        hideIcon={false}
        handleClick={() => router.push(props.redirectTo)}
      />
    </>
  )
}
