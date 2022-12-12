import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  // prettier-ignore
  return (
    <Layout>
      <Routes>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteID/*" element={<QuoteDetail />}></Route>
        <Route path="/quotes/new_quote" element={<NewQuote />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

// Outlet version below: https://ui.dev/react-router-nested-routes

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AllQuotes from "./components/pages/AllQuotes";
// import NewQuote from "./components/pages/NewQuote";
// import QuoteDetail from "./components/pages/QuoteDetail";
// import Comments from "./components/comments/Comments";

// function App() {
//   // prettier-ignore
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/quotes" element={<AllQuotes />}></Route>
//         <Route path="/quotes/:quoteID" element={<QuoteDetail />}>
//           <Route
//               path="comments"
//               element={<Comments />}
//             ></Route>
//         </Route>
//         <Route path="/quotes/new_quote" element={<NewQuote />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
