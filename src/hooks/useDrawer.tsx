import { useState } from 'react'

const useDrawer = (initialState = false) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(initialState)

  const toggleDrawer = () => setIsOpenDrawer((prev) => !prev)

  const setToggleDrawer = (value: any) => setIsOpenDrawer(Boolean(value))

  return [isOpenDrawer, toggleDrawer, setToggleDrawer]
}

export default useDrawer
