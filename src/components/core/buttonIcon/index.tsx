import 'remixicon/fonts/remixicon.css'

import ButtonAvatar from './variant/avatar'
import ButtonBadge from './variant/badge'
import ButtonBasic from './variant/basic'
import ButtonLabel from './variant/label'
import ButtonLinks from './variant/links'
import ButtonTag from './variant/tag'
import { ButtonsIconProps, ButtonsType } from 'types/buttons/buttonsIcon'
import ButtonAccordion from './variant/accordion'

export interface ButtonAccordionProps extends ButtonsIconProps {
  /**
   ** Icon Type 'basic' | 'badge' | 'avatar' | 'label' | 'accordion' | 'link' | 'tag' |
   * @example
   * ~~~
   * variant="accordion"
   * ~~~
   */
  variant: 'accordion'
  /**
   ** Color avatar String "default value=#d04f39"
   */
  badgeColor?: string
  /**
   ** Insert text label
   */
  iconLabel: string
  /**
   ** Font Color String "default value=#344054"
   */
  labelColor: string
  /**
   ** Button Color hover "default value=#E4E8FC"
   */
  buttonColorHover: string
  /**
   ** Button Color Active "default value=#F4F5FD"
   */
  buttonColorActive: string
  /**
   ** Background Color Tooltip  "default value=#475467"
   */
  tooltipBgColor: string
  /**
   ** Font Color Tooltip  "default value=#FFFFFF"
   */
  tooltipFontColor: string
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useSidebar isCompressedSidebar.
   * @example
   * ~~~
   * isCompressedSidebar={isCompressedSidebar}
   * ~~~
   *
   */
  isCompressedSidebar: any
  /**
   * It's a prop that is being passed Boolean (true or false) for State Custom Hook useAccordion isOpenAccordion.
   * Props of State Custom Hook useAccordion isOpenAccordion
   * @example
   * ~~~
   * isOpenAccordion={props.isOpenAccordion}
   * ~~~
   */
  isOpenAccordion: any | undefined | null
  /**
   * It's a prop that is being passed a function of a Custom Hook useAccordion for setIsOpenAccordion to previous state
   * @example
   * ~~~
   * toggleAccordion={toggleAccordion}
   * ~~~
   */
  toggleAccordion: any
  /**
   * It's a prop that is being passed a function of a Customs Hooks [useSidebar & useAccordion] openSidebarAndAccordion()
   * @example
   * ~~~
   *  openSidebarAndAccordion={props.openSidebarAndAccordion}
   * ~~~
   */
  openSidebarAndAccordion: any
  /**
   ** Set Icon Name remix value=String
   * @see name of icons {@link https://remixicon.com/ REMIX ICON}
   *
   * @example
   * ~~~
   * iconNameList="ri-menu-3-line"
   * ~~~
   */
  iconNameList: string
  /**
   * It's a prop that is being passed a function of a Customs Hooks [useSidebar & useAccordion] openSidebarAndAccordion()
   * @example
   * ~~~
   *  labelColorHover="#000"
   * ~~~
   */
  labelColorHover?: string
}

type AllButtonsProps = ButtonsType

/**
 ** A Component that returns a button with icon and Label.
 *
 * @param variant props - Type basic | badge | avatar | label | accordion
 * @param ariaLabel props - Accessibility Name String
 * @param iconName props - Set Icon Name RemixIcon value=String
 * @param iconSize? props - Icon Size Number "default value `var(--buttonIcon-$variant-iconSize-default)`".
 * @param iconColor? props - Icon Color String "default value `var(--buttonIcon-$variant-iconColor-default)`".
 * @param buttonSizeWidth? props - Icon Size width Number "default value=44px"
 * @param buttonSizeHeight? props - Icon Size height Number "default value=44px"
 * @param buttonIconPadding? props -  Button padding "default value `var(--buttonIcon-$variant-padding-default)`".
 * @param colorBorderFocus? props -  Button color border focus "default value var(--focus)".
 * @param buttonBorderRadius? props - Button border-radius "default value `var(--buttonIcon-$variant-borderRadius-default)`".
 * @param buttonBackground? props - Button background color Mandatory all breakpoint "default value `var(--buttonIcon-$variant-buttonBackground-default)`".
 * @param buttonBackgroundSm? props - Button background color on Mobile "default value `var(--buttonIcon-$variant-buttonBackground-default)`".
 * @param buttonBackgroundMd? props - Button background color on Tablet "default value `var(--buttonIcon-$variant-buttonBackground-default)`".
 * @param buttonBackgroundXl? props - Button background color on Desktop "default value `var(--buttonIcon-$variant-buttonBackground-default)`".
 * @param buttonHide? props - Button hide on Mandatory all breakpoint. value=Boolean default value={false}.
 * @param buttonHideSm? props - Button hide on Sm size minor that 744px. value=Boolean.value=Boolean. default value={false}.
 * @param buttonHideMd? props - Button hide on Md size 744px and max 1279px value=Boolean. default value={false}.
 * @param buttonHideXl? props - Button hide on Xl size min-width 1280px value=Boolean. default value={false}.
 * @returns A button with an icon.
 * @see name of icons {@link https://remixicon.com/ REMIX ICON}
 * @example variant={'basic'}
 * ~~~
 * <ButtonIcon
 *  variant="basic"
 *  ariaLabel="Botón para Minimizar Sidebar"
 *  iconName="ri-arrow-left-line"
 *  iconSize="1.25rem"
 *  iconColor="grey"
 *  buttonSizeWidth="44px"
 *  buttonSizeHeight="44px"
 *  buttonBorderRadius="50%"
 *  buttonBackground="gainsboro"
 * />
 * ~~~
 *
 * @example variant="accordion"
 * ~~~
 * <ButtonIcon
 *  variant="accordion"
 *  ariaLabel="Campo Clínico"
 *  iconName="ri-mental-health-line"
 *  iconLabel="Campo Clínico"
 *  isCompressedSidebar={isCompressedSidebar}
 *  isOpenAccordion={props.isOpenAccordion}
 *  toggleAccordion={props.toggleAccordion}
 *  openSidebarAndAccordion={props.openSidebarAndAccordion}
 * />
 * ~~~
 */
export default function ButtonIcon(props: ButtonsIconProps & AllButtonsProps) {
  /* A way to check the type of icon that is being used. */
  const variant = props.variant

  /** The above code is a React component that is being used to create a button
   ** type basic.
   */
  if (variant === 'basic') {
    return (
      <ButtonBasic
        variant={'basic'}
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        gap={props.gap}
      />
    )
  }
  /** The above code is a React component that is being used to create a button
   ** type badge.
   */
  if (variant === 'badge') {
    return (
      <ButtonBadge
        variant={'badge'}
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        badgeActive={props.badgeActive}
        badgeColor={props.badgeColor}
        badgeSizeWidth={props.badgeSizeWidth}
        badgeSizeHeight={props.badgeSizeHeight}
        badgeContents={props.badgeContents}
        badgeFontColor={props.badgeFontColor}
        linkTo={props.linkTo}
      />
    )
  }

  /** The above code is a React component that is being used to create a button
   ** type avatar.
   */
  if (variant === 'avatar') {
    return (
      <ButtonAvatar
        variant="avatar"
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
      />
    )
  }

  /** The above code is a React component that is being used to create a button
   ** type label.
   */
  if (variant === 'label') {
    return (
      <ButtonLabel
        variant="label"
        disabled={props.disabled}
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        hideLabel={props.hideLabel}
        positionLabel={props.positionLabel}
        labelContent={props.labelContent}
        labelColor={props.labelColor}
        alignButtonContent={props.alignButtonContent}
        backgroundImage={props.backgroundImage}
        backgroundUrlImage={props.backgroundUrlImage}
        buttonBackgroundImgHover={props.buttonBackgroundImgHover}
        buttonMaxSizeWidth={props.buttonMaxSizeWidth}
        buttonColorHover={props.buttonColorHover}
        labelColorHover={props.labelColorHover}
        buttonShadow={props.buttonShadow}
        marginLabel={props.marginLabel}
        tooltipBgColor={props.tooltipBgColor}
        tooltipFontColor={props.tooltipFontColor}
        gapContentRow={props.gapContentRow}
        gapContentRowSm={props.gapContentRowSm}
        gapContentRowMd={props.gapContentRowMd}
        gapContentRowXl={props.gapContentRowXl}
        gapContentInline={props.gapContentInline}
        gapContentInlineSm={props.gapContentInlineSm}
        gapContentInlineMd={props.gapContentInlineMd}
        gapContentInlineXl={props.gapContentInlineXl}
        tabIndex={props.tabIndex}
        isOpenPopUp={props.isOpenPopUp}
        togglePopUp={props.togglePopUp}
        filter={props.filter}
        hideIcon={props.hideIcon}
      />
    )
  }

  /** The above code is a React component that is being used to create a button
   ** type tag.
   */
  if (variant === 'tag') {
    return (
      <ButtonTag
        variant="tag"
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        hideLabel={props.hideLabel}
        positionLabel={props.positionLabel}
        labelContent={props.labelContent}
        labelColor={props.labelColor}
        alignButtonContent={props.alignButtonContent}
        backgroundImage={props.backgroundImage}
        backgroundUrlImage={props.backgroundUrlImage}
        supportingText={props.supportingText}
        backgroundColor={props.backgroundColor}
        backgroundColorSm={props.backgroundColorSm}
        backgroundColorMd={props.backgroundColorMd}
        backgroundColorXl={props.backgroundColorXl}
      />
    )
  }

  /** The above code is a React component that is being used to create a button
   ** type link.
   */
  if (variant === 'link') {
    return (
      <ButtonLinks
        variant="link"
        disabled={props.disabled}
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        positionLabel={props.positionLabel}
        labelContent={props.labelContent}
        labelColor={props.labelColor}
        alignButtonContent={props.alignButtonContent}
        backgroundImage={props.backgroundImage}
        backgroundUrlImage={props.backgroundUrlImage}
        supportingText={props.supportingText}
        supportingTextColor={props.supportingTextColor}
        borderBottom={props.borderBottom}
        linkTo={props.linkTo}
      />
    )
  }

  /** The above code is a React component that is being used to create a button
   ** type accordion.
   */
  if (variant === 'accordion') {
    return (
      <ButtonAccordion
        variant={'accordion'}
        disabled={props.disabled}
        filter={props.filter}
        ariaLabel={props.ariaLabel}
        iconName={props.iconName}
        handleClick={props.handleClick}
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        isOpenAccordion={props.isOpenAccordion}
        buttonIconPadding={props.buttonIconPadding}
        buttonSizeWidth={props.buttonSizeWidth}
        buttonSizeHeight={props.buttonSizeHeight}
        buttonBorderRadius={props.buttonBorderRadius}
        colorBorderFocus={props.colorBorderFocus}
        sizeBorderFocus={props.sizeBorderFocus}
        typeBorderFocus={props.typeBorderFocus}
        buttonBackground={props.buttonBackground}
        buttonBackgroundSm={props.buttonBackgroundSm}
        buttonBackgroundMd={props.buttonBackgroundMd}
        buttonBackgroundXl={props.buttonBackgroundXl}
        buttonHide={props.buttonHide}
        buttonHideSm={props.buttonHideSm}
        buttonHideMd={props.buttonHideMd}
        buttonHideXl={props.buttonHideXl}
        hideLabel={props.hideLabel}
        positionLabel={props.positionLabel}
        labelContent={props.labelContent}
        labelColor={props.labelColor}
        alignButtonContent={props.alignButtonContent}
        backgroundImage={props.backgroundImage}
        backgroundUrlImage={props.backgroundUrlImage}
        buttonBackgroundImgHover={props.buttonBackgroundImgHover}
        buttonMaxSizeWidth={props.buttonMaxSizeWidth}
        buttonColorHover={props.buttonColorHover}
        labelColorHover={props.labelColorHover}
        buttonShadow={props.buttonShadow}
        marginLabel={props.marginLabel}
        tooltipBgColor={props.tooltipBgColor}
        tooltipFontColor={props.tooltipFontColor}
        gapContentRow={props.gapContentRow}
        gapContentRowSm={props.gapContentRowSm}
        gapContentRowMd={props.gapContentRowMd}
        gapContentRowXl={props.gapContentRowXl}
        gapContentInline={props.gapContentInline}
        gapContentInlineSm={props.gapContentInlineSm}
        gapContentInlineMd={props.gapContentInlineMd}
        gapContentInlineXl={props.gapContentInlineXl}
        gapButtomsList={props.gapButtomsList}
        openSidebarAndAccordion={props.openSidebarAndAccordion}
        isCompressedSidebar={props.isCompressedSidebar}
        toggleAccordion={props.toggleAccordion}
        labelContentAccordion={props.labelContentAccordion}
        tabIndex={props.tabIndex}
      />
    )
  }
}
