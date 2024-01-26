import { useState } from 'react'

const useAccordion = (initialState = false) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(initialState)

  const toggleAccordion = () => setIsOpenAccordion((prev) => !prev)
  const setToggleAccordion = (value: any) => setIsOpenAccordion(Boolean(value))

  return [isOpenAccordion, toggleAccordion, setToggleAccordion]
}
const useModal = (initalMode = false) => {
  const [isOpened, setIsOpened] = useState(initalMode)
  const toggle = () => setIsOpened(!isOpened)
  return [isOpened, setIsOpened, toggle]
}

export default useAccordion
useModal
