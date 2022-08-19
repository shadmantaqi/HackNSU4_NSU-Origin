import Contexts from "../context/Contexts";

const { default: Navbar } = require("../components/Navbar");

const Layout = ({ children }) => {
  return (
    <Contexts>
      <>
        <Navbar />
        {children}
      </>
    </Contexts>
  );
};

export default Layout;
