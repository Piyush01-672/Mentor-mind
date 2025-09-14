import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Pages that should have full-width layout without footer
  const authPages = ["/login", "/signup"];
  const isAuthPage = authPages.includes(location.pathname);
  
  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;