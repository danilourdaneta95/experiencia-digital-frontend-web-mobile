export const SET_COUNT_WELCOMEPOPUP = 'SET_COUNT_WELCOMEPOPUP'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_COUNT_WELCOMEPOPUP:
      return {
        ...state,
        countWelcomePopUp: payload,
      }

    default:
      return state
  }
}
