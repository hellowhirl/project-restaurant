import { APIResponse } from "../services/ramenAPIservice";
import styles from "../styles/ResultsCount.module.css";

interface ResultsCountProps {
  datum: APIResponse;
  query: string;
}

export default function ResultsCount({ datum, query }: ResultsCountProps) {
  if ("error" in datum.results) {
    return null; // bail
  }

  const hasResults = parseInt(datum.results.results_returned) > 0;

  return (
    <div className="container">
      <div className={styles["display-count"]}>
        {hasResults
          ? `Displaying the top ${datum.results.results_returned} of ${datum.results.results_available} results`
          : `No results for "${query}"`}
      </div>
    </div>
  );
}
