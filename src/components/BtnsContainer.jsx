import React from "react";
import styles from "./BtnsContainer.module.css";

function BtnsContainer() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button className={styles.buttons}>{buttonNames}</button>
      ))}
    </div>
  );
}

export default BtnsContainer;
