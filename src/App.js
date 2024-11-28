import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./styles/Theme"
import { ThemeContext } from "./context/ThemeContext"


function App() {
  const {theme} = useContext(ThemeContext)

  const mode = (theme === "light" ? lightTheme : darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
