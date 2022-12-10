import React from "react";
import { Link } from "react-router-dom";

function AllQuotes() {
  return (
    <section>
      <h1>All Quotes Page</h1>
      <ul>
        <li>
          <Link to="quotes/q1">q1</Link>
        </li>
        <li>
          <Link to="quotes/q2">q2</Link>
        </li>
        <li>
          <Link to="quotes/q3">q3</Link>
        </li>
      </ul>
    </section>
  );
}

export default AllQuotes;
