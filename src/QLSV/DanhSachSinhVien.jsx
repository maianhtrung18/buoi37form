import React, { Component } from 'react'
import { connect } from 'react-redux'
import { XEM_SV, XOA_SV } from '../types/sinhVienType'
export class DanhSachSinhVien extends Component {

    renderDSSV = () => {
        // console.log("renderDSSV",this.props.danhSachSV)
        return this.props.danhSachSV.map((sv) => {
            return <tr key={sv.maSV}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                    <button onClick={() => {
                        this.props.dispatch({
                            type: XOA_SV,
                            maSV: sv.maSV
                        })
                    }} className='btn btn-danger'>Xoá</button>
                    <button onClick={() => {
                        this.props.dispatch({
                            type: XEM_SV,
                            sv: {
                                maSV: sv.maSV,
                                hoTen: sv.hoTen,
                                sdt: sv.sdt,
                                email: sv.email
                            },
                            xemState: true
                        })
                    }} className='btn btn-success'>Xem</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="danhSachSinhVien">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDSSV()}
                    </tbody>
                </table>

            </div>
        )
    }


}

const mapStateToProps = (rootReducer) => {
    return { danhSachSV: rootReducer.DanhSachSinhVienReducer.danhSachSV }
}

export default connect(mapStateToProps)(DanhSachSinhVien)
