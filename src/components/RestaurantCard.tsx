import { ShopItem } from "../services/ramenAPIservice";
import ShopRankBadge from "./ShopRankBadge";
import styles from "../styles/RestaurantCard.module.css";

type RestaurantCardProps = {
  restaurant: ShopItem;
  index: number;
};

export default function RestaurantCard({
  restaurant,
  index,
}: RestaurantCardProps) {
  return (
    <div key={restaurant.id} className={styles["restaurant-contianer"]}>
      <div key={restaurant.id} className={styles["restaurant-card"]}>
        <div className={styles.name}>{restaurant.name}</div>
        <ShopRankBadge index={index} />
        <div className={styles.area}>{restaurant.station_name}</div>
        <img src={restaurant.photo.pc.l} />
        <div className={styles["catch-copy"]}>{restaurant.catch}</div>
        <div className={styles["bottom-details"]}>
          {/* to do: show name of shop - different approaches */}
          <a
            href={`https://www.google.com/maps?q=${restaurant.lat},${restaurant.lng}`}
            target="_blank"
          >
            <div className={styles.map}>Map</div>
          </a>
          <a href={restaurant.urls.pc} target="_blank">
            <div className={styles["more-details"]}>Find Out More</div>
          </a>
        </div>
      </div>
    </div>
  );
}
