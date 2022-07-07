import styles from "../styles/ShopRankBadge.module.css";

type RankBadgeProps = {
  index: number;
};

const first = "#F3CE72";
const runnerUp = "#EAEAEA";

export default function RankBadge({ index }: RankBadgeProps) {
  const rank = index + 1;

  return (
    <div className={styles["badge-container"]}>
      <div className={styles.badge}>
        <div className={styles.rank}>{rank}</div>
        <svg
          width={rank <= 3 ? 40 : 30}
          height={rank <= 3 ? 40 : 30}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {rank <= 3 ? (
            <path
              d="M19.74 0L23.7776 4.43156L29.49 2.6125L30.7709 8.46913L36.6275 9.75L34.8084 15.4624L39.24 19.5L34.8084 23.5376L36.6275 29.25L30.7709 30.5309L29.49 36.3875L23.7776 34.5684L19.74 39L15.7024 34.5684L9.98999 36.3875L8.70912 30.5309L2.8525 29.25L4.67155 23.5376L0.23999 19.5L4.67155 15.4624L2.8525 9.75L8.70912 8.46913L9.98999 2.6125L15.7024 4.43156L19.74 0Z"
              fill={rank === 1 ? first : runnerUp}
            />
          ) : (
            <circle cx="15" cy="15.377" r="15" fill="#EAEAEA" />
          )}
        </svg>
      </div>
    </div>
  );
}
