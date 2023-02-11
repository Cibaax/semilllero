
import React from "react";

function RegisterButton() {
  return (
    <button style={styles.button}>
      Register <span style={styles.arrow}>→</span>
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer"
  },
  arrow: {
    fontSize: "1.2em"
  }
};

export default RegisterButton;
