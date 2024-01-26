import { useReducer } from 'react'
import ModalCountContext from './modalCountContext'
import ModalCountReducer from './modalCountReducer'

const ModalCountState = (props) => {
  const initialState = {
    countWelcomePopUp: 0,
  }

  const [state, dispatch] = useReducer(ModalCountReducer, initialState)

  const setCountWelcomePopUp = () => {
    const response = state.countWelcomePopUp + 1
    dispatch({
      type: 'SET_COUNT_WELCOMEPOPUP',
      payload: response,
    })
  }

  return (
    <ModalCountContext.Provider
      value={{
        countWelcomePopUp: state.countWelcomePopUp,
        setCountWelcomePopUp,
      }}
    >
      {props.children}
    </ModalCountContext.Provider>
  )
}

export default ModalCountState
