import { Cinema } from "./const";

const ticketList = []

export const BookingReducer = (state = ticketList, action) => {
  switch (action.type) {
    case Cinema.Booking:
      let ticketListBooking = [...state]
      let index = ticketListBooking.findIndex((seatChosen, index) => seatChosen.soGhe === action.payload.soGhe)
      if (index !== -1) {
        ticketListBooking.splice(index, 1)
        state = [...ticketListBooking]
      } else {
        state.push(action.payload)
      }
      return [...state]
    case Cinema.Remove:

      let ticketListRemove = [...state]
      let indexRemove = ticketListRemove.findIndex((seatRemove, index) => seatRemove.soGhe === action.payload.soGhe)
      if (indexRemove !== -1) {
        ticketListRemove.splice(indexRemove, 1)
        state = [...ticketListRemove]
      }
      return [...state]
    default:
      return state;
  }
}