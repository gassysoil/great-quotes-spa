// Outlet version below: https://ui.dev/react-router-nested-routes
import React, { Fragment, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getSingleQuote } from "../lib/api";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";

function QuoteDetail() {
  const parameter = useParams();
  const { quoteID } = parameter;

  //prettier-ignore
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </Fragment>
  );
}

export default QuoteDetail;
