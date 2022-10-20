import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/theme/defaultTheme";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </ThemeProvider>
  )
}
