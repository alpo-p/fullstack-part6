const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

let timeoutID = null
const setNotification = (notification, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    const MILLISECONDS_IN_A_SECOND = 1000
    clearTimeout(timeoutID)
    timeoutID = await setTimeout(() => dispatch({
      type: 'SET_NOTIFICATION',
      notification: ''
    }), seconds * MILLISECONDS_IN_A_SECOND)
  }
}

export { setNotification }
export default notificationReducer