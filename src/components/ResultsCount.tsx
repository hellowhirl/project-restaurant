import { APIResponse } from "../services/ramenAPIservice";
import styles from "../styles/ResultsCount.module.css";

interface ResultsCountProps {
  hasResults: boolean;
  datum: APIResponse;
  query: string;
}

export default function ResultsCount({
  hasResults,
  datum,
  query,
}: ResultsCountProps) {
  return (
    <div className="container">
      <div className={styles["display-count"]}>
        {"results_returned" in datum.results && hasResults
          ? `Displaying the top ${datum.results.results_returned} of ${datum.results.results_available} results`
          : `No results for "${query}"`}
      </div>
    </div>
  );
}
