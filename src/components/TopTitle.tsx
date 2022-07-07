import { ReactComponent as RamenIcon } from "../icons/ramen.svg";
import styles from "../styles/TopTitle.module.css";

export default function TopTitle() {
  return (
    <div className={styles["title-container"]}>
      <h1>TOKYO RAMEN FINDER</h1>
      <RamenIcon />
    </div>
  );
}
