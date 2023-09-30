import React, { Component } from "react";

import { connect } from "react-redux";
import { Remove } from "../../redux/reducer/dat-ve/creator";

class BookingList extends Component {
  tongTien = () => {
    let { seatListChosen } = this.props;
    let total = 0;
    for (let i = 0; i < seatListChosen.length; i++) {
      total += seatListChosen[i].gia;
    }
    return total.toLocaleString();
  };
  render() {
    return (
      <div className="text-light text-center pt-5 pl-4">
        <h3 className="text-uppercase">Danh sách ghế bạn chọn</h3>
        <div className="my-3">
          <div className="d-flex mt-5">
            <button className="gheDuocChon mr-2"></button>
            <p>Ghế đã đặt</p>
          </div>
          <div className="d-flex">
            <button className="gheDangChon mr-2"></button>
            <p>Ghế đang chọn</p>
          </div>
          <div className="d-flex">
            <button className="ghe mr-2"></button>
            <p>Ghế chưa đặt</p>
          </div>
        </div>
        <div className="w-100">
          <table className="table table-bordered border-light w-100 custom-table">
            <thead className="text-white w-100">
              <tr>
                <th scope="col" className="w-100">
                  Số ghế
                </th>
                <th scope="col" className="w-100">
                  Giá
                </th>
                <th scope="col" className="w-100">
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody
              className="text-warning
            "
            >
              {this.props.seatListChosen.map((Ghe, index) => {
                return (
                  <tr key={index}>
                    <td>{Ghe.soGhe}</td>
                    <td>{Ghe.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => this.props.dispatch(Remove(Ghe))}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-light">
              <tr>
                <td>Tổng tiền</td>
                <td className="text-warning">{this.tongTien()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return { seatListChosen: rootReducer.BookingReducer };
};
export default connect(mapStateToProps)(BookingList);
