import { FC } from "react";

const sleep = (time: number) => new Promise((r) => setTimeout(r, time));

const fetchData = async (): Promise<string> => {
  await sleep(6000);
  return "遅れて表示されるテキスト";
};
export const StreamingText: FC = () => {
  const message = fetchData();
  return (
    <>
      <p>{message}</p>
    </>
  );
};
