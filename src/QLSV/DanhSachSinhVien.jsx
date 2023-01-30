import React, { Component } from 'react'
import { connect } from 'react-redux'
import { XEM_SV, XOA_SV } from '../types/sinhVienType'
export class DanhSachSinhVien extends Component {

    state = {
        danhSachSV: this.props.danhSachSV,
        returnState: false
    }

    static getDerivedStateFromProps(props, state) {
        if (state.returnState) {
            return { ...state }
        }
        else {
            return props
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.danhSachSV === nextProps.danhSachSV) {
            return false
        }
        else {
            return true;
        }

    }

    renderDSSV = () => {
        return this.state.danhSachSV.map((sv) => {
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
                            xemState: true,
                            error: {
                                maSV: '',
                                hoTen: '',
                                sdt: '',
                                email: ''
                            }
                        })
                    }} className='btn btn-success'>Xem</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="danhSachSinhVien">
                <form className="form-inline my-2 my-lg-0">
                    <input onChange={(event) => {
                        if (event.target.value !== '') {
                            let danhSach = this.props.danhSachSV.filter((sv) => {
                                return sv.hoTen.toLowerCase().includes(event.target.value.toLowerCase().trim())
                            })
                            this.setState({
                                danhSachSV: [...danhSach],
                                returnState: true
                            })
                        } else {
                            this.setState({
                                danhSachSV: [],
                                returnState: false
                            })
                        }
                    }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>

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
