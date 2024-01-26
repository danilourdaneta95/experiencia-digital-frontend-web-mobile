interface TitleIcon {
  /**
   ** TitleIcon id
   * @example
   * ~~~
   * id={'MisClases'}
   * ~~~
   */
  id?: string
  /**
   ** TitleIcon Container background-color on all Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundContainerColor={'white'}
   * ~~~
   */
  title: string
  backgroundContainerColor?: string
  /**
   ** TitleIcon Container background-color on Mobile Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundContainerColorMd={'slateblue'}
   * ~~~
   */
  backgroundContainerColorSm?: string
  /**
   ** TitleIcon Container background-color on Tablet Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundContainerColorMd={'slateblue'}
   * ~~~
   */
  backgroundContainerColorMd?: string
  /**
   ** TitleIcon Container background-color on Desktop Resolution "default value"  background-color: #ffffff;
   * @example
   * ~~~
   * backgroundContainerColorXl={'lime'}
   * ~~~
   */
  backgroundContainerColorXl?: string
  /**
   ** TitleIcon Container border-radius on all Resolution "default value" border-radius: 0rem;
   */
  borderRadius?: string
  /**
   ** TitleIcon Container border-radius on Mobile Resolution "default value" border-radius: 0rem;
   */
  borderRadiusSm?: string
  /**
   ** TitleIcon Container border-radius on Tablet Resolution "default value" border-radius: 0rem;
   */
  borderRadiusMd?: string
  /**
   ** TitleIcon Container border-radius on Desktop Resolution "default value" border-radius: 0rem;
   */
  borderRadiusXl?: string
  /**
   ** TitleIcon Container padding on all Resolution "default value" padding: 0rem;
   */
  containerPadding?: string
  /**
   ** TitleIcon Container padding on Mobile Resolution "default value" padding: 0rem;
   */
  containerPaddingSm?: string
  /**
   ** TitleIcon Container padding on Tablet Resolution "default value" padding: 0rem;
   */
  containerPaddingMd?: string
  /**
   ** TitleIcon Container padding on Desktop Resolution "default value" padding: 0rem;
   */
  containerPaddingXl?: string
  iconName: string
  iconSize?: string
  iconSizeSm?: string
  iconSizeMd?: string
  iconSizeXl?: string
  iconColor?: string
  iconColorSm?: string
  iconColorMd?: string
  iconColorXl?: string
  widthBackgroundIcon?: string
  widthBackgroundIconSm?: string
  widthBackgroundIconMd?: string
  widthBackgroundIconXl?: string
  heightBackgroundIcon?: string
  heightBackgroundIconSm?: string
  heightBackgroundIconMd?: string
  heightBackgroundIconXl?: string
  backgroundColorIcon?: string
  backgroundColorIconSm?: string
  backgroundColorIconMd?: string
  backgroundColorIconXl?: string
  borderRadiusIcon?: string
  borderRadiusIconSm?: string
  borderRadiusIconMd?: string
  borderRadiusIconXl?: string
  marginContainer?: string
  marginIcon?: string
  marginIconSm?: string
  marginIconMd?: string
  marginIconXl?: string
}

export default function TitleIcon(props: TitleIcon) {
  return (
    <>
      <div id="TitleIcon" className="container style">
        <i className={`icon ${props.iconName}`}></i>
        <h5>{props.title}</h5>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          background-color: ${props.backgroundContainerColor || props.backgroundContainerColorSm || `transparent`};
          border-radius: ${props.borderRadius || props.borderRadiusSm || `0rem`};
          padding: ${props.containerPadding || props.containerPaddingSm || `0rem`};
          grid-template-columns: min-content auto;
          align-items: center;
        }
        .style {
          margin: ${props.marginContainer || `var(--titleIcon-margin-default)`};
        }
        h3 {
          color: var(--title-icon-font-color);
        }
        .icon {
          display: grid;
          align-content: center;
          justify-items: center;
          font-size: ${props.iconSize || props.iconSizeSm || `1.25rem`};
          color: ${props.iconColor || props.iconColorSm || `var(--icon-border-color)`};
          width: ${props.widthBackgroundIcon || props.widthBackgroundIconSm || `max-content`};
          height: ${props.heightBackgroundIcon || props.heightBackgroundIconSm || `max-content`};
          background-color: ${props.backgroundColorIcon || props.backgroundColorIconSm || `var(--bg-icon-color)`};
          border-radius: ${props.borderRadiusIcon || props.borderRadiusIconSm || `50%`};
          margin: ${props.marginIcon || props.marginIconSm || `0rem 0.75rem 0rem 0rem`};
          padding: 0.75rem;
        }

        /**  A media query that will change the style of the component when the screen is 
        ** greater that 1280px. 
        ** Tablet - Version 
        */
        @media (min-width: 744px) and (max-width: 1279px) {
          .container {
            display: grid;
            background-color: ${props.backgroundContainerColor || props.backgroundContainerColorMd || `transparent`};
            border-radius: ${props.borderRadius || props.borderRadiusMd || `0rem`};
            padding: ${props.containerPadding || props.containerPaddingMd || `0rem`};
          }
          .icon {
            display: grid;
            align-content: center;
            justify-items: center;
            font-size: ${props.iconSize || props.iconSizeMd || `1.25rem`};
            color: ${props.iconColor || props.iconColorMd || `var(--icon-border-color)`};
            width: ${props.widthBackgroundIcon || props.widthBackgroundIconMd || `max-content`};
            height: ${props.heightBackgroundIcon || props.heightBackgroundIconMd || `max-content`};
            background-color: ${props.backgroundColorIcon || props.backgroundColorIconMd || `var(--bg-icon-color)`};
            border-radius: ${props.borderRadiusIcon || props.borderRadiusIconMd || `50%`};
            margin: ${props.marginIcon || props.marginIconMd || `0rem 0.75rem 0rem 0rem`};
            padding: 0.75rem;
          }
        }
        /** A media query that will change the style of the component when the screen is
        ** greater than 1280px.
        ** Desktop - Version
        */
        @media (min-width: 1280px) {
          .container {
            display: grid;
            background-color: ${props.backgroundContainerColor || props.backgroundContainerColorXl || `transparent`};
            border-radius: ${props.borderRadius || props.borderRadiusXl || `0rem`};
            padding: ${props.containerPadding || props.containerPaddingXl || `0rem`};
          }

          .icon {
            display: grid;
            align-content: center;
            justify-items: center;
            font-size: ${props.iconSize || props.iconSizeXl || `1.25rem`};
            color: ${props.iconColor || props.iconColorXl || `var(--icon-border-color)`};
            width: ${props.widthBackgroundIcon || props.widthBackgroundIconXl || `max-content`};
            height: ${props.heightBackgroundIcon || props.heightBackgroundIconXl || `max-content`};
            background-color: ${props.backgroundColorIcon || props.backgroundColorIconXl || `var(--bg-icon-color)`};
            border-radius: ${props.borderRadiusIcon || props.borderRadiusIconXl || `50%`};
            margin: ${props.marginIcon || props.marginIconXl || `0rem 0.75rem 0rem 0rem`};
            padding: 0.75rem;
          }
        }

        /**  This will change the style of the component when the screen is
        ** minor that 768px.
        ** SM - Mobile Version
        */
      `}</style>
    </>
  )
}
