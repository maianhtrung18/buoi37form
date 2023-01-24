import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DanhSachSinhVien extends Component {

    renderDSSV = () => {
        // console.log("renderDSSV",this.props.danhSachSV)
        return this.props.danhSachSV.map((sv) => {
            // xoa index nha
            return <tr key={sv.maSV}> 
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
            </tr>
        })

    }

    render() {
        // console.log("danh sach",this.props.danhSachSV);

        return (
            <div className="danhSachSinhVien">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
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
