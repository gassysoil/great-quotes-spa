import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.text.length < quoteB.text.length ? 1 : -1;
    } else {
      return quoteA.text.length < quoteB.text.length ? -1 : 1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const queryParameter = new URLSearchParams(location.search);
  const isAscending = queryParameter.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isAscending);

  const changeSortingHander = () => {
    navigate(location.pathname + `?sort=${isAscending ? "desc" : "asc"}`);
  };

  return (
    <Fragment>
      <div>
        <button onClick={changeSortingHander}>
          Sort {isAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
