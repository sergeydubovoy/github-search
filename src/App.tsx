import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { RepositoryPage } from "./pages/RepositoryPage/RepositoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/github-search-smartway/" element={<SearchPage />} />
        <Route
          path="/github-search-smartway/repository/:repositoryId"
          element={<RepositoryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
