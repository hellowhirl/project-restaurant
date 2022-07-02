import React, { useEffect, useState } from "react";
import "./App.css";
import { APIResponse, fetchRestaurants } from "./services/ramenAPIservice";
import { debounce } from "./utils/debounce";
import FilterInput from "./components/FilterInput";
import ResultsCount from "./components/ResultsCount";
import ResultsDisplay from "./components/ResultsDisplay";
import TopTitle from "./components/TopTitle";

function App() {
  const [datum, setDatum] = useState<APIResponse | null>(null);
  const [query, setQuery] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const debouncedOnChange = debounce(onChange, 700);

  const doFetch = async (query: string) => {
    const response = await fetchRestaurants(query);
    setDatum(response);
  };

  useEffect(() => {
    doFetch(query);
  }, [query]);

  if (!datum) {
    return <div className="loading-screen">Loading ...</div>;
  }

  if ("error" in datum.results) {
    return (
      <div className="error-screen">
        <h1>Error {datum.results.error[0].code}</h1>
        <p>{datum.results.error[0].message}</p>
      </div>
    );
  }

  const hasResults =
    "results_returned" in datum.results
      ? parseInt(datum.results.results_returned) > 0
      : false;

  return (
    <div className="App">
      <TopTitle />
      <FilterInput debouncedOnChange={debouncedOnChange} />
      <ResultsCount hasResults={hasResults} datum={datum} query={query} />
      <ResultsDisplay datum={datum} />
    </div>
  );
}

export default App;
