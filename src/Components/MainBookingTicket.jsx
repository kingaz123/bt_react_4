import React, { Component } from "react";
import BookingList from "./BookingListComponent/BookingList";
import SeatList from "./SeatListComponent/SeatList";

export default class BookingTicket extends Component {
  render() {
    return (
      <div className="bookingMovie">
        <div className="overlay pb-4">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <SeatList />
              </div>
              <div className="col-3">
                <BookingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
