import React from "react";
import { Link } from "react-router-dom";
import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "John", text: "Learning is fun" },
  { id: "q2", author: "Zhang", text: "Learning is NOT fun" },
  { id: "q3", author: "Zha", text: "Learning is NOT fun at all!" },
];

function AllQuotes() {
  return (
    // <section>
    //   <h1>All Quotes Page</h1>
    //   <ul>
    //     <li>
    //       <Link to="quotes/q1">q1</Link>
    //     </li>
    //     <li>
    //       <Link to="quotes/q2">q2</Link>
    //     </li>
    //     <li>
    //       <Link to="quotes/q3">q3</Link>
    //     </li>
    //   </ul>
    // </section>
    <QuoteList quotes={DUMMY_DATA}></QuoteList>
  );
}

export default AllQuotes;
