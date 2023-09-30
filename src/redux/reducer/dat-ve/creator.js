import { Cinema } from "./const";

export const Booking = (payload) => {
  return {
    type: Cinema.Booking,
    payload,
  }
}
export const Remove = (payload) => {
  return {
    type: Cinema.Remove,
    payload,
  }
}