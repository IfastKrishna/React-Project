import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
