import React from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

function NewQuote() {
  const navigate = useNavigate();

  function addQuoteHandler(data) {
    console.log(data);
    navigate("/quotes"); //naviagte back to some homepage
  }

  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
}

export default NewQuote;
