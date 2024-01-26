import { useState } from 'react'

const useSidebar = (initialState = true) => {
  const [isCompressedSidebar, setIsCompressedSidebar] = useState(initialState)

  const toggleSidebar = () => setIsCompressedSidebar((prev) => !prev)
  const setToggleSidebar = (value: any) => setIsCompressedSidebar(Boolean(value))

  return [isCompressedSidebar, toggleSidebar, setToggleSidebar]
}

export default useSidebar
