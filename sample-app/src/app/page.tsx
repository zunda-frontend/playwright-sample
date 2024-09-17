import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>トップページ</h1>
        <p>これは playwright のテストを書くためのサンプルアプリです。</p>
        <p>以下のテストを書いてみましょう。</p>
        <ul>
          <li>
            ヘッダーに「ページA」というリンクがあり、押すとページAへ遷移すること
          </li>
          <li>
            ヘッダーに「ページB」というリンクがあり、押すとページBへ遷移すること
          </li>
          <li>
            ヘッダーに Next.js
            のロゴ画像があり、押すとトップページへ遷移すること
          </li>
          <li>
            ページAで、非同期（表示にラグがある）なデータが正しく取得できた場合に想定された文言が表示されること
          </li>
          <li>
            ページBで、フォームを正しく送信できた場合に「送信されました」と表示されること
          </li>
          <li>
            ページBで、コメントを空で送信した場合に「コメントは必須項目です」と表示されること
          </li>
        </ul>
        <span className={styles.playwright}>
          わからない場合は{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://playwright.dev/docs/writing-tests"
          >
            playwright 公式ドキュメント
          </Link>{" "}
          を参考にしてみても良いかもしれません！
        </span>
      </main>
    </div>
  );
}
