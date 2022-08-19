import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

import Link from "next/link";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);
  console.log(theme, userData);
  return (
    <div className="container section-gap">
      <Link href="/login">Login</Link>
      <button className="btn">Primary</button>
    </div>
  );
};

export default Home;
