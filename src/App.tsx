import AssetView from "./components/AssetPage/AssetView"
import NavHeader from "./components/NavHeader/NavHeader"
import TransaksiView from "./components/TransaksiPage/TransaksiView"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import PembayaranView from "./components/PembayaranPage/PembayaranView"
import { Route, Routes } from "react-router"
import HomeView from "./components/HomePage/HomeView"

function App() {

  return (
    <>
    <NavHeader/>
    <Routes>
      <Route path="/home" element={<HomeView/>}/>
      <Route path="/transaksi" element={<TransaksiView/>}/>
      <Route path="/aset" element={<AssetView/>}/>
      <Route path="/pembayaran" element={<PembayaranView/>}/>
    </Routes>
    </>
  )
}

export default App;
library.add(fab, fas, far);
