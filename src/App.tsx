import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { RepositoryPage } from "./pages/RepositoryPage/RepositoryPage";

import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/github-search/" element={<SearchPage />} />
          <Route
            path="/github-search/repository/:repositoryId"
            element={<RepositoryPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
