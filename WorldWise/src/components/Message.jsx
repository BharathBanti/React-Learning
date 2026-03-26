import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img" aria-label="wave hand">
        &#128075;
      </span>{" "}
      {message}
    </p>
  );
}

export default Message;
