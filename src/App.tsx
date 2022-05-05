import { Header } from "./components/Header";
import { ShowMovie } from "./components/ShowMovies";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ShowMovie />
      <GlobalStyle />
    </>
  );
}

