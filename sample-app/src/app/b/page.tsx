"use client";
import { useId, useState } from "react";
import styles from "./page.module.css";

export default function PageB() {
  const id = useId();
  const [input, setInput] = useState("");
  const [isValidationError, setIsValidationError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkValidation = () => {
    setIsValidationError(input.length === 0);
  };

  const handleSubmit = () => {
    setIsSubmitted(false);
    checkValidation();

    if (input.length !== 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ページB</h1>
        ※送信ボタンを押しても実際には何も送られないので安心してください！
        <div className={styles.messageWrapper}>
          {isSubmitted && (
            <span className={styles.submitMessage}>送信されました</span>
          )}
          {isValidationError && (
            <span className={styles.errorMessage}>
              コメントは必須項目です。
            </span>
          )}
        </div>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor={id}>コメント</label>
            <input
              className={styles.input}
              id={id}
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button
            className={styles.submitButton}
            type="button"
            onClick={handleSubmit}
          >
            送信する
          </button>
        </form>
      </main>
    </div>
  );
}
