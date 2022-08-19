import Footer from "../components/Footer";
import Contexts from "../context/Contexts";

const { default: Navbar } = require("../components/Navbar");

const Layout = ({ children }) => {
  return (
    <Contexts>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </Contexts>
  );
};

export default Layout;
