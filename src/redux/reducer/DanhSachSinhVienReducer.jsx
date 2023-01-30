import { CAPNHAT_SV, SHOW_ERROR, SUA_SV, THEM_SV, XEM_SV, XOA_SV } from "../../types/sinhVienType"

const initialState = {
    danhSachSV: [
        {
            maSV: '001',
            hoTen: "Sinh Vien 1",
            sdt: '0987777711',
            email: 'wer1@hh.lo1'
        },
        {
            maSV: '002',
            hoTen: "Sinh Vien 2",
            sdt: '0987777722',
            email: 'wer2@hh.lo2'
        }
    ],
    chiTietSV: {
        maSV: '',
        hoTen: '',
        sdt: '',
        email: ''
    },
    error: {
        maSV: '',
        hoTen: '',
        sdt: '',
        email: ''
    },
    xemState: false
}

export const DanhSachSinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SV:
            state.danhSachSV = [...state.danhSachSV, { ...action.chiTiet }];
            state.error = { ...action.error }
            return { ...state }
        case SHOW_ERROR:
            state.error = { ...action.error }
            return { ...state }
        case XOA_SV:
            state.danhSachSV = state.danhSachSV.filter((sv) => {
                return sv.maSV !== action.maSV
            })
            return { ...state }
        case XEM_SV:
            state.chiTietSV = action.sv
            state.xemState = action.xemState
            state.error = {...action.error}
            return { ...state }
        case SUA_SV:
            state.chiTietSV = {...action.chiTiet}
            return { ...state }
        case CAPNHAT_SV:
            let svCapNhat = state.danhSachSV.findIndex((sv) => {
                return sv.maSV === action.sv.maSV
            })
            state.danhSachSV[svCapNhat] = {...action.sv}
            state.danhSachSV = [...state.danhSachSV]
            state.xemState = action.xemState
            return { ...state }
        default:
            return { ...state }
    }
}
