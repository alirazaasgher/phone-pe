import { Suspense } from "react";
import HomeClientWrapper from "./HomeClientWrapper";

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
          <HomeClientWrapper />
    </Suspense>
  );
}

