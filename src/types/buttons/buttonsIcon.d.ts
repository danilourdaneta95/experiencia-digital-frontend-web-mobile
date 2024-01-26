export interface ButtonsIconProps {
  variant: 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag'
  /**
   ** Accessibility (tagHtml ARIA) value String.
   *
   * @example
   * ~~~
   * ariaLabel="Botón para Mostrar identidad por Qr"
   * ~~~
   */
  ariaLabel: string
  /**
   ** Set Icon Name remix value=String default value= {props.iconName} || ri-questionnaire-line
   * @see name of icons {@link https://remixicon.com/ REMIX ICON}
   *
   * @example
   * ~~~
   * iconName="ri-menu-3-line"
   * ~~~
   */
  iconName: string
  /**
   ** onMouseOver - pass a function to the button.
   *
   * @example
   * ~~~
   * onMouseOver={() => fetch?}
   * ~~~
   */
  onMouseOver: MouseEventHandler<HTMLButtonElement>
  /**
   ** handleClick - pass a function to the button.
   *
   * @example
   * ~~~
   * handleClick={openSidebar}
   * ~~~
   */
  handleClick: MouseEventHandler<HTMLButtonElement>
  /**
   ** Icon Size Number "default value"  ${props.iconSize || `var(--buttonIcon-basic-iconSize-default)`}.
   *
   * @example
   * ~~~
   * iconSize="24px"
   * ~~~
   */
  iconSize: string
  /**
   ** Icon Color String "default value {props.iconColor || `var(--buttonIcon-basic-iconColor-default)`".
   *
   * Admit any properties of css color ("colorname, Hex, Rgb, Rgba, HSL... ").
   *
   * @example
   * ~~~
   * iconColor="red"
   * iconColor="rgba(255, 255, 255, 0.8)";
   * ~~~
   */
  iconColor: string
  /**
   ** Button padding
   *
   *  padding: ${props.buttonIconPadding || `var(--buttonIcon-basic-padding-default)` || `12px`}
   *
   * @example
   * ~~~
   * buttonIconPadding="12px"
   * ~~~
   */
  buttonIconPadding: string
  /**
   ** Button Size Width "default value= width: ${props.buttonSizeWidth || `max-content`}".
   *
   ** Css property width: props;
   *
   * @example
   * ~~~
   * buttonSizeWidth="44px"
   * ~~~
   */
  buttonSizeWidth: string
  /**
   ** Button Size Hight
   *
   *  height: ${props.buttonSizeHeight || `max-content`}"
   *
   * @example
   * ~~~
   * buttonSizeHeight="44px"
   * ~~~
   */
  buttonSizeHeight: string
  /**
   ** Button border-radius
   *
   * border-radius: ${props.buttonBorderRadius || `var(--buttonIcon-basic-borderRadius-default)`}
   *
   * @example
   * ~~~
   * buttonBorderRadius="12px"
   * ~~~
   */
  buttonBorderRadius: string
  /**
   ** Button color border focus
   *
   *  outline: ${props.colorBorderFocus || `var(--focus)`}
   *
   * @example
   * ~~~
   * colorBorderFocus="green"
   * ~~~
   */
  colorBorderFocus: string
  /**
   ** Button color Size border focus
   *
   *  outline: ${props.sizeBorderFocus || `1px`}
   *
   * @example
   * ~~~
   * colorBorderFocus="green"
   * ~~~
   */
  sizeBorderFocus: string
  /**
   ** Button color Size border focus
   *
   *  outline: ${props.typeBorderFocus || `solid`}
   *
   * @example
   * ~~~
   * colorBorderFocus="green"
   * ~~~
   */
  typeBorderFocus: 'solid' | 'dashed' | 'double' | 'ridge' | ''
  /**
   ** Button background color Mandatory all breakpoint
   *
   * background: ${props.buttonBackground || props.buttonBackgroundSm || `var(--buttonIcon-basic-buttonBackground-default)`};
   *
   * @example
   * ~~~
   * buttonBackground="blueviolet"
   * ~~~
   */
  buttonBackground: string
  /**
   ** Button background color on breakpoint Mobile
   *
   * background: ${props.buttonBackgroundSm || `var(--buttonIcon-basic-buttonBackground-default)`};
   *
   * @example
   * ~~~
   * buttonBackgroundSm="blueviolet"
   * ~~~
   */
  buttonBackgroundSm: string
  /**
   ** Button background color on breakpoint Tablet
   *
   * background: ${props.buttonBackgroundMd || `var(--buttonIcon-basic-buttonBackground-default)`};
   *
   * @example
   * ~~~
   * buttonBackgroundMd="tomato"
   * ~~~
   */
  buttonBackgroundMd: string
  /**
   ** Button background color on breakpoint PC
   *
   * background: ${props.buttonBackgroundXl || `var(--buttonIcon-basic-buttonBackground-default)`};
   *
   * @example
   * ~~~
   * buttonBackgroundXl="tomato"
   * ~~~
   */
  buttonBackgroundXl: string
  /**
   ** Button hide on Mandatory all breakpoint. value=Boolean.
   *
   * @example
   * ~~~
   * buttonHide={false}
   * ~~~
   */
  buttonHide: boolean
  /**
   ** Button hide on Sm size minor that 744px. value=Boolean.
   *
   * @example
   * ~~~
   * buttonHideSm={false}
   * ~~~
   */
  buttonHideSm: boolean
  /**
   ** Button hide on Md size 744px and max 1279px value=Boolean.
   *
   * @example
   * ~~~
   * buttonHideMd={false}
   * ~~~
   */
  buttonHideMd: boolean | null
  /**
   ** Button hide on Xl size 1280px value=Boolean.
   *
   * @example
   * ~~~
   * buttonHideXl={false}
   * ~~~
   */
  buttonHideXl: boolean | null
}
/*
 variant: 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
*/
type ButtonsType =
  | ButtonIconBasicProps
  | ButtonIconBadgeProps
  | ButtonIconAvatarProps
  | ButtonIconLabelProps
  | ButtonIconTagProps
  | ButtonLinksProps
  | ButtonAccordionProps

export interface ButtonIconBasicProps extends ButtonsIconProps {
  variant: 'basic'
  gap: string
}

export interface ButtonIconBadgeProps extends ButtonsIconProps {
  variant: 'badge'
  /**
   ** Boolean for show or Hide Badge and Content of Badge.
   *
   * @example
   * ~~~
   * badgeActive={true}
   * ~~~
   */
  badgeActive: boolean
  /**
   ** Color badge String "default value=  `var(--buttonIcon-badge-backgroundBadge-default)`".
   *
   * @example
   * ~~~
   * badgeColor="orange"
   * ~~~
   */
  badgeColor: string
  /**
   ** Content of badge value= string or number.
   *
   * @example of String
   * ~~~
   * badgeContents="7"
   * ~~~
   *
   * @example of Number
   * ~~~
   * badgeContents={5}
   * ~~~
   */
  badgeSizeWidth: string
  badgeSizeHeight: string
  badgeContents: string | number
  /**
   ** Color font badge String "default value= `var(--buttonIcon-badge-fontColorBadge-default)`".
   *
   * @example
   * ~~~
   * badgeFontColor="white"
   * ~~~
   */
  badgeFontColor: string
  linkTo?: string
}

export interface ButtonIconAvatarProps extends ButtonsIconProps {
  variant: 'avatar'
}

export interface ButtonIconLabelProps extends ButtonsIconProps {
  /**
   ** Icon Type 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
   *
   * @example
   * ~~~
   * variant="label"
   * ~~~
   */
  variant: 'label'
  /**
   ** Hide Labe value=boolean
   *
   * @example
   * ~~~
   * hideLabel={true}
   * ~~~
   */
  hideLabel: boolean
  hideIcon: boolean
  disabled?: boolean
  filter: boolean
  textDecoration?: string
  /**
   ** Position of Label Content admit value= 'Right' | 'Left' | 'Top' | 'Bottom'
   * default value= Right
   *
   * @example
   * ~~~
   * positionLabel="Left"
   * ~~~
   */
  positionLabel: 'Right' | 'Left' | 'Top' | 'Bottom' | null | undefined
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent="Calificaciones"
   * ~~~
   */
  labelContent: string | number
  /**
   ** Label Color value=string
   *
   * @example
   * ~~~
   * labelColor="red"
   * ~~~
   */
  labelColor: string
  /**
   ** Align Contents of Button - Icon and Label value=  'TopLeft' | 'TopCenter' | 'TopRight' | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight'
   *
   * * default value="MiddleCenter"
   * @example
   * ~~~
   * alignButtonContent="MiddleCenter"
   * ~~~
   */
  alignButtonContent:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRight'
    | 'MiddleLeft'
    | 'MiddleCenter'
    | 'MiddleRight'
    | 'BottomLeft'
    | 'BottomCenter'
    | 'BottomRight'
    | 'MiddleSpaceBetween'
    | null
    | undefined
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundImage: boolean
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * backgroundUrlImage="/assets/svg/button/backgroundButton.svg"
   * ~~~
   */
  backgroundUrlImage: string
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
  buttonBackgroundImgHover: string
  buttonMaxSizeWidth: string
  buttonColorHover: string
  labelColorHover: string
  buttonShadow: string
  marginLabel: string
  tooltipBgColor: string
  tooltipFontColor: string
  gapContentRow: string
  gapContentRowSm: string
  gapContentRowMd: string
  gapContentRowXl: string
  gapContentInline: string
  gapContentInlineSm: string
  gapContentInlineMd: string
  gapContentInlineXl: string
  tabIndex: number
  isOpenPopUp: any
  togglePopUp: any
  buttonBackgroundXl?: string
}

export interface ButtonIconTagProps extends ButtonsIconProps {
  /**
   ** Icon Type 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
   *
   * @example
   * ~~~
   * variant="tag"
   * ~~~
   */
  variant: 'tag'
  /**
   ** Hide Labe value=boolean
   *
   * @example
   * ~~~
   * hideLabel={false}
   * ~~~
   */
  hideLabel: boolean
  /**
   ** Position of Label Content admit value= 'Right' | 'Left' | 'Top' | 'Bottom'
   * default value= Right
   *
   * @example
   * ~~~
   * positionLabel="Left"
   * ~~~
   */
  positionLabel: 'Right' | 'Left' | 'Top' | 'Bottom' | null | undefined
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent="Calificaciones"
   * ~~~
   */
  labelContent: string | number
  /**
   ** Label Color value=string
   *
   * @example
   * ~~~
   * labelColor="red"
   * ~~~
   */
  labelColor: string
  /**
   ** Align Contents of Button - Icon and Label value=  'TopLeft' | 'TopCenter' | 'TopRight' | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight' | 'MiddleSpaceBetween' | 'BottomLeft' | 'BottomCenter' | 'BottomRight'
   *
   * * default value="MiddleCenter"
   * @example
   * ~~~
   * alignButtonContent="MiddleCenter"
   * ~~~
   */
  alignButtonContent:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRight'
    | 'MiddleLeft'
    | 'MiddleCenter'
    | 'MiddleRight'
    | 'BottomLeft'
    | 'BottomCenter'
    | 'BottomRight'
    | 'MiddleSpaceBetween'
    | null
    | undefined
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundImage: boolean
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * backgroundUrlImage="/assets/svg/button/backgroundButton.svg"
   * ~~~
   */
  backgroundUrlImage: string

  supportingText: string
  buttonHideMd: boolean
  backgroundColor: string
  backgroundColorSm: string
  backgroundColorMd: string
  backgroundColorXl: string
}

export interface ButtonLinksProps extends ButtonsIconProps {
  /**
   ** Icon Type 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
   *
   * @example
   * ~~~
   * variant="link"
   * ~~~
   */
  variant: 'link'
  disabled: boolean
  /**
   ** Position of Label Content admit value= 'Right' | 'Left' | 'Top' | 'Bottom'
   * default value= Right
   *
   * @example
   * ~~~
   * positionLabel="Left"
   * ~~~
   */
  positionLabel: 'Right' | 'Left' | 'Top' | 'Bottom' | null | undefined
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent="Calificaciones"
   * ~~~
   */
  labelContent: string | number
  /**
   ** Label Color value=string
   *
   * @example
   * ~~~
   * labelColor="red"
   * ~~~
   */
  labelColor: string
  /**
   ** Align Contents of Button - Icon and Label value=  'TopLeft' | 'TopCenter' | 'TopRight' | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight'
   *
   * * default value="MiddleCenter"
   * @example
   * ~~~
   * alignButtonContent="MiddleCenter"
   * ~~~
   */
  alignButtonContent:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRight'
    | 'MiddleLeft'
    | 'MiddleCenter'
    | 'MiddleRight'
    | 'BottomLeft'
    | 'BottomCenter'
    | 'BottomRight'
    | null
    | undefined
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundImage: boolean
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * backgroundUrlImage="/assets/svg/button/backgroundButton.svg"
   * ~~~
   */
  backgroundUrlImage: string
  supportingText: string
  supportingTextColor: string
  borderBottom: boolean
  linkTo?: string
  filter?: boolean
}

export interface ButtonAccordionProps extends ButtonsIconProps {
  /**
   ** Icon Type 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
   *
   * @example
   * ~~~
   * variant="label"
   * ~~~
   */
  variant: 'accordion'
  disabled: boolean
  filter: boolean
  /**
   ** Hide Labe value=boolean
   *
   * @example
   * ~~~
   * hideLabel={true}
   * ~~~
   */
  hideLabel: boolean
  /**
   ** Position of Label Content admit value= 'Right' | 'Left' | 'Top' | 'Bottom'
   * default value= Right
   *
   * @example
   * ~~~
   * positionLabel="Left"
   * ~~~
   */
  positionLabel: 'Right' | 'Left' | 'Top' | 'Bottom' | '' | null | undefined
  /**
   ** Label Content admit value=string or number
   *
   * @example
   * ~~~
   * labelContent="Calificaciones"
   * ~~~
   */
  labelContent: string | number
  /**
   ** Label Color value=string
   *
   * @example
   * ~~~
   * labelColor="red"
   * ~~~
   */
  labelColor: string
  /**
   ** Align Contents of Button - Icon and Label value=  'TopLeft' | 'TopCenter' | 'TopRight' | 'MiddleLeft' | 'MiddleCenter' | 'MiddleRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight'
   *
   * * default value="MiddleCenter"
   * @example
   * ~~~
   * alignButtonContent="MiddleCenter"
   * ~~~
   */
  alignButtonContent:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRight'
    | 'MiddleLeft'
    | 'MiddleCenter'
    | 'MiddleRight'
    | 'BottomLeft'
    | 'BottomCenter'
    | 'BottomRight'
    | 'MiddleSpaceBetween'
    | null
    | undefined
  /**
   * * Setting the backgroundImage property to a boolean value.
   * * Default value={false}
   * * If backgroundImage is set to true, need set url on backgroundUrlImage for render background image
   * @example
   * ~~~
   * backgroundImage={true}
   * ~~~
   */
  backgroundImage: boolean
  /**
   * * Setting the backgroundUrlImage property string value.
   *
   * * The image if is local content, need to put on folder ~./public
   *
   * @example
   * ~~~
   * backgroundUrlImage="/assets/svg/button/backgroundButton.svg"
   * ~~~
   */
  backgroundUrlImage: string
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
  buttonBackgroundImgHover: string
  buttonMaxSizeWidth: string
  buttonColorHover: string
  labelColorHover: string
  buttonShadow: string
  marginLabel: string
  tooltipBgColor: string
  tooltipFontColor: string
  gapContentRow: string
  gapContentRowSm: string
  gapContentRowMd: string
  gapContentRowXl: string
  gapContentInline: string
  gapContentInlineSm: string
  gapContentInlineMd: string
  gapContentInlineXl: string
  gapButtomsList: string
  isOpenAccordion: boolean
  openSidebarAndAccordion: any
  isCompressedSidebar: any
  toggleAccordion: any
  labelContentAccordion: any
  tabIndex: number
}
