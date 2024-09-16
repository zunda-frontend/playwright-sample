# テスト実行の手順

## 1. ブラウザのインストール

手元で playwright のテストを実行する場合、テストに使用するためのブラウザをインストールする必要があります。
以下のコマンドを実行してインストールしてください。

```bash
pnpm exec playwright install
```

## 2. 各種パッケージのインストール

本リポジトリ内に Next.js で作られたウェブアプリケーションを用意しています。
このアプリケーションを手元で起動して、それに対して playwright のテストを試せるようにしています。
そのため、手元でウェブアプリケーション、playwright が動くよう以下のコマンドで各種パッケージをインストールしてください。
※ 本リポジトリは Node.js のパッケージマネージャーとして pnpm を使用しています。

```bash
pnpm i
```

## 3. テスト実行

playwright でのテスト実行として、以下 2 つのコマンドを用意しています。
お好みの方をお使いください。

```bash
pnpm e2e-test # CLI上でテストを実施します
```

```bash
pnpm e2e-test:ui # GUI上でテストを実施します
```
