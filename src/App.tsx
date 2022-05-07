import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoute />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

