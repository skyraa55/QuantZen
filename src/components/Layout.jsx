import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  // Mirror the original site's behavior of jumping to the top of the
  // page whenever the user navigates to a new section.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="animate-fade" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
