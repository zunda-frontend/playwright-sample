"use client";
import { Suspense, useEffect } from "react";
import styles from "./page.module.css";
import { StreamingText } from "@/components/StreamingText";
import { useRouter } from "next/navigation";
export default function PageA() {
  const router = useRouter();

  // MEMO: AppRouterのRouter CacheによってCSR遷移がキャッシュされてしまうため明示的にキャッシュを捨てている
  // @see: https://ja.next-community-docs.dev/docs/app-router/building-your-application/caching/#router-cache
  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>ページA</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <StreamingText />
        </Suspense>
      </main>
    </div>
  );
}
