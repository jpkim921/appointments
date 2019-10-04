export default function userReducer(
  state = {
    loading: false,
    clients: [
      {
        firstName: "Pero",
        lastName: "Kim",
        phone: "1234567890",
        appointments: []
      }
    ]
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
