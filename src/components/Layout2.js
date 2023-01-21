import CartNavbar from "./CartNavbar";
import { Outlet } from 'react-router-dom';


const Layout2 = () => {
  return (
    <div>
      <CartNavbar />
      <Outlet />
    </div>
  )
}

export default Layout2