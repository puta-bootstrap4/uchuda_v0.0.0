
import dynamic from "next/dynamic";

export default function End() {
  const Finish = dynamic(() => import("../../features/finish"), {
    ssr: false, // SSRを無効化
  });
  return (
    <>
      <Finish />
    </>
  );
}
