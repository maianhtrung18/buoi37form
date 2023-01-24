import logo from './logo.svg';
import './App.css';
import './css/style.css'
import ThongTinSinhVien from './QLSV/ThongTinSinhVien';
import DanhSachSinhVien from './QLSV/DanhSachSinhVien';

function App() {
  return (
    <div className="container">
      <ThongTinSinhVien />
      <DanhSachSinhVien />
    </div>
  );
}

export default App;
