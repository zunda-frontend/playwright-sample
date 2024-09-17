import { FC } from "react";

const sleep = (time: number) => new Promise((r) => setTimeout(r, time));

const fetchData = async (): Promise<string> => {
  await sleep(1000);
  return "遅れて表示されるテキスト";
};
export const StreamingText: FC = async () => {
  const message = await fetchData();
  return (
    <>
      <p>{message}</p>
    </>
  );
};
