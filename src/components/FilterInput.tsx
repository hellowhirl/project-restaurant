import React from "react";
import styles from "../styles/FilterInput.module.css";

interface FilterFieldProps {
  debouncedOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterInput({ debouncedOnChange }: FilterFieldProps) {
  return (
    <div className="container">
      <div className={styles["input-container"]}>
        <input
          onChange={debouncedOnChange}
          placeholder="Filter by speciality, location or keyword..."
        ></input>
      </div>
    </div>
  );
}
