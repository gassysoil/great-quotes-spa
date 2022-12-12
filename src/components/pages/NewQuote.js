import React, { useEffect } from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

function NewQuote() {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes"); //naviagte back to some homepage
    }
  }, [status, navigate]);

  function addQuoteHandler(quoteData) {
    sendRequest(quoteData);
  }

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
}

export default NewQuote;
