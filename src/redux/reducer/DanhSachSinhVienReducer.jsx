import { SHOW_ERROR, THEM_SV } from "../../types/sinhVienType"

const initialState = {
    danhSachSV: [
        {
            maSV: '001',
            hoTen: "Sinh Vien 0",
            sdt: '0987777755',
            email: 'wer1@hh.lo'
        },
        {
            maSV: '002',
            hoTen: "Sinh Vien 3",
            sdt: '0987777733',
            email: 'wer2@hh.lo'
        }
    ],
    error: {
        maSV: '',
        hoTen: '',
        sdt: '',
        email: ''
    }
}

export const DanhSachSinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SV:
            console.log("action chi tiet",action.chiTiet)
            console.log("state danh sach sv",...state.danhSachSV)
            state.danhSachSV = [...state.danhSachSV, {...action.chiTiet}];
            state.error = {...action.error}
            
            console.log("000", state.danhSachSV )
            return { ...state }
        case SHOW_ERROR:
            console.log("0001", state)
            state.error = {...action.error}
            return {...state}
        default:
            // state.danhSachSV =  [...state.danhSachSV]
            return { ...state }
    }
}
