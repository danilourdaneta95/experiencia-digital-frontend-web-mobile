import ButtonLabel from 'components/core/buttonIcon/variant/label'
import router from 'next/router'
import { CONSTANTS } from 'settings/constants'
import { Aranceles } from 'types/mis-aranceles'

interface ButtonsPaymentMatricula {
  dataAranceles: Aranceles
}
export function ButtonsPayment(props: ButtonsPaymentMatricula) {
  if (props.dataAranceles?.arancel?.saldo_pendiente !== 0) {
    return (
      <>
        <ButtonLabel
          variant={'label'}
          ariaLabel={'botón para Pagar'}
          labelContent={'Pagar'}
          labelColor={'#E4E8FC'}
          iconName={'ri-arrow-right-line'}
          handleClick={() => router.push(CONSTANTS.ROUTES.PAYMENT)}
          iconSize={'22px'}
          iconColor={'#E4E8FC'}
          buttonBorderRadius={'50px'}
          buttonBackground={'#001894'}
          positionLabel={'Left'}
          alignButtonContent={'MiddleCenter'}
          buttonSizeWidth={'184px'}
          buttonSizeHeight={'56px'}
          buttonHideMd={true}
          buttonHideSm={true}
        />
        <ButtonLabel
          variant={'label'}
          ariaLabel={'botón para Pagar'}
          labelContent={'Pagar'}
          labelColor={'#E4E8FC'}
          iconName={'ri-arrow-right-line'}
          handleClick={() => router.push(CONSTANTS.ROUTES.PAYMENT)}
          iconSize={'22px'}
          iconColor={'#E4E8FC'}
          buttonBorderRadius={'50px'}
          buttonBackground={'#001894'}
          positionLabel={'Left'}
          alignButtonContent={'MiddleCenter'}
          buttonSizeWidth={'114px'}
          buttonSizeHeight={'48px'}
          buttonHideXl={true}
        />
      </>
    )
  } else {
    return (
      <>
        <ButtonLabel
          variant={'label'}
          ariaLabel={'botón para Pagar'}
          labelContent={'Pagar'}
          labelColor={'#C3C5CA'}
          iconName={'ri-arrow-right-line'}
          iconSize={'22px'}
          iconColor={'#C3C5CA'}
          buttonBorderRadius={'50px'}
          buttonBackground={'#F6F7F7'}
          buttonColorHover={'false'}
          labelColorHover={'false'}
          positionLabel={'Left'}
          alignButtonContent={'MiddleCenter'}
          buttonSizeWidth={'184px'}
          buttonSizeHeight={'56px'}
          buttonHideMd={true}
          buttonHideSm={true}
        />
        <ButtonLabel
          variant={'label'}
          ariaLabel={'botón para Pagar'}
          labelContent={'Pagar'}
          labelColor={'#C3C5CA'}
          iconName={'ri-arrow-right-line'}
          iconSize={'22px'}
          iconColor={'#E4E8FC'}
          buttonBorderRadius={'50px'}
          buttonBackground={'#F6F7F7'}
          positionLabel={'Left'}
          alignButtonContent={'MiddleCenter'}
          buttonSizeWidth={'114px'}
          buttonSizeHeight={'48px'}
          buttonHideXl={true}
          buttonColorHover={'false'}
          labelColorHover={'false'}
        />
      </>
    )
  }
}
