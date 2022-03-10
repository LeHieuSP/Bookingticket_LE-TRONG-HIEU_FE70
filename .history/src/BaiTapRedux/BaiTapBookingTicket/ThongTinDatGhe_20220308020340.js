import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>{" "}
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang đặt
          </span>{" "}
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr>
                <th>số ghế</th>
                <th>giá</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
            <tr>
                <th>số ghế</th>
                <th>giá</th>
                <th></th>

              </tr>
              <tr>
                <th>số ghế</th>
                <th>giá</th>
                <th></th>

              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}