import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";
import Comments from "./components/comments/Comments";

function App() {
  return (
    // prettier-ignore
    <Layout>
      <Routes>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteID" element={<QuoteDetail />}>
          {/* Use nested Route to conditionally render Link, to avoid complex state management */}
          {/* show "Load Comments" with url=/quotes/:quoteID */}
          <Route path="" element={ <div className="centered"> <Link to="comments">Load Comments</Link> </div> } />
          {/* hide "Load Comments" and load "Comments Compoent" with url=/quotes/:quoteID/comments */}
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/new_quote" element={<NewQuote />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
