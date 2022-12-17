import { GlobalStyles, ThemeProvider } from "@mui/material";
import Components from "./pages/Components";
import { globalStyles } from "./styles/global";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world</h1>
      <Components />
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
