// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from './Components/Header.jsx';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* This is where the page-specific content will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
