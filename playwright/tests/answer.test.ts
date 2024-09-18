import { test, expect } from "@playwright/test";

/*
 * ⚠️ こちらは解答例です。
 * 先に problem.test.ts の問題を解いてから見ることを推奨します。
 */

/*
 * 要素の取得をどうすれば良いかわからない場合は↓を参考にしてみてください
 * @see: https://playwright.dev/docs/api/class-page
 *
 * クリックなどをどうすれば良いかわからない場合は↓を参考にしてみてください
 * @see: https://playwright.dev/docs/api/class-locator
 */

test.describe("ヘッダーのテスト", () => {
  test("ヘッダーのリンクからページAに遷移できること", async ({ page }) => {
    // Arrange
    // トップページへ遷移
    await page.goto("/");

    /*
     * 問題 1-1. ヘッダーの「ページA」という要素を取得してください
     * (例) const pageALinkElement = page.getByRole("button", { name: "ボタンのテキスト" });
     */
    const pageALinkElement = page.getByRole("link", { name: "ページA" });

    // Act
    /*
     * 問題 1-2. 問題1-1で定義した要素をクリックしてください
     */
    await pageALinkElement.click();

    // Assert
    /*
     * 問題 1-3. ページ内に「ページA」というタイトルがあることをテストして、ページAに遷移できたことを確認してください
     * (例) expect(page.getByRole("heading", { name: "ページAの見出しテキスト" })).toBeVisible();
     */
    await expect(page.getByRole("heading", { name: "ページA" })).toBeVisible();
  });

  test("ヘッダーのリンクからページBに遷移できること", async ({ page }) => {
    // Arrange
    // トップページへ遷移
    await page.goto("/");
    /*
     * 問題 2-1. ヘッダーの「ページB」という要素を取得してください
     */
    const pageBLinkElement = page.getByRole("link", { name: "ページB" });

    // Act
    /*
     * 問題 2-2. 問題2-1で定義した要素をクリックしてください
     */
    await pageBLinkElement.click();

    // Assert
    /*
     * 問題 2-3. ページ内に「ページB」というタイトルがあることをテストして、ページBに遷移できたことを確認してください
     */
    await expect(page.getByRole("heading", { name: "ページB" })).toBeVisible();
  });

  test("ヘッダーのリンクからトップページに遷移できること", async ({ page }) => {
    // Arrange
    // ページBへ遷移
    await page.goto("/b");
    /*
     * 問題 3-1. ヘッダーの「Next.js」という画像要素を取得してください
     */
    const logoElement = page.getByAltText("Next.js");

    // Act
    /*
     * 問題 3-2. 問題1で定義した pageALinkElement をクリックしてください
     */
    await logoElement.click();

    // Assert
    /*
     * 問題 3-3. ページ内に「トップページ」というタイトルがあることをテストして、トップページに遷移できたことを確認してください
     * (例) expect(page.getByRole("heading", { name: "ページAの見出しテキスト" })).toBeVisible();
     */
    await expect(
      page.getByRole("heading", { name: "トップページ" })
    ).toBeVisible();
  });
});

test.describe("ページAのテスト", () => {
  test("ヘッダーのリンクからトップページに遷移できること", async ({ page }) => {
    // Arrange
    /*
     * 問題 4-1. 前処理として、page.goto を使ってページAに遷移してください
     */
    await page.goto("/a");

    // Act

    // Assert
    /*
     * 問題 4-2. 「遅れて表示されるテキスト」があることをテストして、非同期なデータが表示できていることを確認してください
     *
     * ヒント) 非同期なテキストの読み込みに6秒ほどかかっているようです。
     *        playwright デフォルトでは expect の待機時間は5秒です。
     * 　　　　どうにかして待機時間を延ばせばテストが通りそう？
     *        @see: https://playwright.dev/docs/test-timeouts
     */
    await expect(page.getByText("遅れて表示されるテキスト")).toBeVisible({
      timeout: 10000,
    });
  });
});

test.describe("ページBのテスト", () => {
  test("コメントに値を入れて送信した際に、送信が完了されること", async ({
    page,
  }) => {
    // Arrange
    await page.goto("/b");

    /*
     * 問題 5-1. フォーム内の「コメント」に対するinput要素を取得してください
     */
    const commentInputElement = page.getByLabel("コメント");

    /*
     * 問題 5-2. フォームの「送信する」ボタン要素を取得してください
     */
    const submitButtonElement = page.getByRole("button", { name: "送信する" });

    // Act
    /*
     * 問題 5-3. 5-1で取得したinput要素に「ずんだ」と入力してください
     */
    await commentInputElement.fill("ずんだ");

    /*
     * 問題 5-4. 5-2で取得した送信ボタンを押してください
     */
    await submitButtonElement.click();

    // Assert
    /*
     * 問題 5-5. 画面から「送信されました」のテキストを取得して、送信が正しく行われたことを確認してください
     */
    await expect(page.getByText("送信されました")).toBeVisible();
  });

  test("コメントを空で送信した際に、バリデーションエラーになること", async ({
    page,
  }) => {
    // Arrange
    await page.goto("/b");

    /*
     * 問題 6-1. フォームの「送信する」ボタン要素を取得してください（5-2と同じ）
     */
    const submitButtonElement = page.getByRole("button", { name: "送信する" });

    // Act
    /*
     * 問題 6-2. 6-1で取得した送信ボタンを押してください（5-4と同じ）
     */
    await submitButtonElement.click();

    // Assert
    /*
     * 問題 6-3. 画面から「コメントは必須入力です。」のテキストを取得して、バリデーションエラーになったことを確認してください
     */
    await expect(page.getByText("コメントは必須項目です。")).toBeVisible();
  });
});
