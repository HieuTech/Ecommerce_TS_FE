import {lazy, Suspense} from "react";
import Loading from "../Components/Loading/Loading"



export const lazyFn = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};