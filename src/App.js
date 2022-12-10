import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteID" element={<QuoteDetail />}></Route>
        <Route path="/quotes/new_quote" element={<NewQuote />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
