import { APIResponse } from "../services/ramenAPIservice";
import RestaurantCard from "./RestaurantCard";
import styles from "../styles/ResultsDisplay.module.css";

type ResultsDisplayProps = { datum: APIResponse };

export default function ResultsDisplay({ datum }: ResultsDisplayProps) {
  if ("error" in datum.results) {
    return null; // bail
  }

  return (
    <div className="container">
      <div className={styles.results}>
        {datum.results.shop.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
