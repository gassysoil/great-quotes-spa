import React, { Fragment } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "John", text: "Learning is fun" },
  { id: "q2", author: "Zhang", text: "Learning is NOT fun" },
  { id: "q3", author: "Zha", text: "Learning is NOT fun at all!" },
];

function QuoteDetail() {
  const parameter = useParams();
  const curQuote = DUMMY_DATA.find((quote) => quote.id === parameter.quoteID);

  if (!curQuote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={curQuote.text} author={curQuote.author} />
      <Routes>
        {/* Use nested Route to conditionally render Link, to avoid complex state management */}
        <Route
          path="/"
          element={
            <div className="centered">
              <Link to="comments">Load Comments</Link>
            </div>
          }
        ></Route>
        <Route path="comments" element={<Comments />}></Route>
      </Routes>
    </Fragment>
  );
}

export default QuoteDetail;

// Outlet version below: https://ui.dev/react-router-nested-routes

// import React, { Fragment } from "react";
// import { useParams, Outlet } from "react-router-dom";

// function QuoteDetail() {
//   const parameter = useParams();

//   return (
//     <Fragment>
//       <h1>Quote Detail Page</h1>
//       <p>{parameter.quoteID}</p>
//       {/* Outle will render "/quotes/:quoteID/comments" */}
//       <Outlet />
//     </Fragment>
//   );
// }

// export default QuoteDetail;
