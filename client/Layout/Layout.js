import Contexts from "../context/Contexts";

const { default: Navbar } = require("../components/Navbar");

const Layout = ({ children }) => {
  return (
    <Contexts>
      <main>
        <Navbar />
        {children}
      </main>
    // </Contexts>
  );
};

export default Layout;
