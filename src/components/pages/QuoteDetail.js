import React from "react";
import { useParams } from "react-router-dom";

function QuoteDetail() {
  const parameter = useParams();

  return (
    <section>
      <h1>Quote Detail Page</h1>
      <p>{parameter.quoteID}</p>
    </section>
  );
}

export default QuoteDetail;
