import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SearchPage } from "./pages/search/SearchPage";
import { RepositoryPage } from "./pages/repository/RepositoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/github-search/" element={<SearchPage />} />
        <Route
          path="/github-search/repository/:repositoryId"
          element={<RepositoryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
