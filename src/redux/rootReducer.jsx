import {combineReducers, createStore} from 'redux'
import { DanhSachSinhVienReducer } from './reducer/DanhSachSinhVienReducer'

const rootReducer = combineReducers({
    DanhSachSinhVienReducer,
})

export const store = createStore(rootReducer) 