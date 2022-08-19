import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

const Contexts = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
};

export default Contexts;
