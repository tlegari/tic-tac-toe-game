import Router from "./Router";
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeContext } from "./contexts/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const { theme } = useContext(ThemeContext);
  //Toggle between themes
  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <MusicPlayer />
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
