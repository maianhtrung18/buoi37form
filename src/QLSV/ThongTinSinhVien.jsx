import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOW_ERROR, THEM_SV } from '../types/sinhVienType';

export class ThongTinSinhVien extends Component {

    chiTietSV = {
        maSV: '',
        hoTen: '',
        sdt: '',
        email: ''
    }

    error = {
        maSV: 'Mã sinh viên không được để trống',
        hoTen: 'Họ tên không được để trống',
        sdt: 'Số điện thoại không được để trống',
        email: 'Email không được để trống'
    }

    handleChange = (event) => {
        let { id, value } = event.target;
        this.chiTietSV[id] = value
        console.log("wer",this.props.danhSachSV)
        // let idField = ''
        // switch (id) {
        //     case 'maSV':
        //         idField = 'Mã sinh viên'
        //         break;
        //     case 'hoTen':
        //         idField = 'Họ tên'
        //         break;
        //     case 'sdt':
        //         idField = 'Số điện thoại'
        //         break;
        //     case 'email':
        //         idField = 'Email'
        //         break;

        //     default:
        //         break;
        // }
        // if (value === '') {
        //     this.error[id] = `${idField} không được để trống`
        // } else {
        //     this.error[id] = ``
        // }

        // if (id === 'maSV' && value !== '') {
        //     let findId = this.props.danhSachSV.find((sv) => {
        //         return sv.maSV === value
        //     })

        //     if (findId) {
        //         this.error[id] = `${idField} đã tồn tại`
        //     } else {
        //         this.error[id] = ``
        //     }

        //     console.log("findID = ", findId)
        //     // console.log("danhsach", this.props.danhSachSV)
        // }
        // console.log("danhsach", this.props.danhSachSV)
        // console.log(this.error)
        // console.log(value)

    }

    handleBlur = (event) => {
        // console.log("blur", event.target.value)
        let { id, value } = event.target;
        this.chiTietSV[id] = value
        let idField = ''
        switch (id) {
            case 'maSV':
                idField = 'Mã sinh viên'
                break;
            case 'hoTen':
                idField = 'Họ tên'
                break;
            case 'sdt':
                idField = 'Số điện thoại'
                break;
            case 'email':
                idField = 'Email'
                break;

            default:
                break;
        }
        if (value === '') {
            this.error[id] = `${idField} không được để trống`
        }else{
            this.error[id] = ``
        }

        if (id === 'maSV' && value !== '') {
            let findId = this.props.danhSachSV.find((sv) => {
                return sv.maSV === value
            })

            if (findId) {
                this.error[id] = `${idField} đã tồn tại`
            }else{
                this.error[id] = ``
            }

            // console.log("findID = ", findId)
            // console.log("danhsach",this.props.danhSachSV)
        }
        // console.log("danhsach",this.props.danhSachSV)
        // console.log(this.error)
        // console.log(value)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let isError = false;
        for (const errorMessage in this.error) {
            if (this.error[errorMessage] !== '') {
                isError = true;
            }
        }
        // console.log(isError)
        // console.log("error", this.error)
        if (isError) {
            // console.log("error1", this.error)
            this.props.dispatch({
                type: SHOW_ERROR,
                error: this.error
            })

        } else {
            // console.log("error", this.error)
            this.props.dispatch({
                type: THEM_SV,
                chiTiet: this.chiTietSV,
                error: this.error
            })
        }
    }

    render() {
        return (
            <div className="form">
                <div className="form_Title bg-dark">
                    THÔNG TIN SINH VIÊN
                </div>
                <div className="form_Content">
                    <form className='row' onSubmit={this.handleSubmit}>
                        <div className="form-group col-6">
                            <label>Mã SV</label>
                            <input id='maSV' onBlur={this.handleBlur} onChange={this.handleChange} type="text" className="form-control" />
                            <p>{this.props.error.maSV}</p>
                        </div>
                        <div className="form-group col-6">
                            <label>Họ Tên</label>
                            <input id='hoTen' onBlur={this.handleBlur} onChange={this.handleChange} type="text" className="form-control" />
                            <p>{this.props.error.hoTen}</p>
                        </div>
                        <div className="form-group col-6">
                            <label>Số điện thoại</label>
                            <input id='sdt' onBlur={this.handleBlur} onChange={this.handleChange} type="tel" pattern="[0]{1}[9]{1}[0-9]{8}" className="form-control" />
                            <p>{this.props.error.sdt}</p>
                        </div>
                        <div className="form-group col-6">
                            <label>Email</label>
                            <input id='email' onBlur={this.handleBlur} onChange={this.handleChange} type="email" className="form-control" />
                            <p>{this.props.error.email}</p>
                        </div>
                        <div className="form-group col-6">
                            <button type="submit" className="btn btn-primary">Thêm sinh viên</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachSV: rootReducer.DanhSachSinhVienReducer.danhSachSV,
        error: rootReducer.DanhSachSinhVienReducer.error
    }
}

export default connect(mapStateToProps)(ThongTinSinhVien)

