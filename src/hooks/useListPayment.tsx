import { useState } from 'react'
const useListCard = (initialState = false) => {
  const [closed, setClosed] = useState(initialState)
  const toggleList = () => setClosed((prev) => !prev)
  const setToggleList = (value: any) => setClosed(Boolean(value))
  return [closed, toggleList, setToggleList]
}

export default useListCard
