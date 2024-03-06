import React from "react";
import {lazy, Suspense} from "react";
import Loading from "../Components/Loading/Loading"
import PermissionDenied from "../Pages/Admin/Pages/PermissionDenied/PermissionDenied";


export const lazyFn = (
  importFunc: any,
  access: boolean = true,
  url: string | null = null
) => {
  const LazyComponent = lazy(importFunc);
  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 1000);
  //   });
  // });
  
  
 if (!access) {
   return <PermissionDenied url={url}></PermissionDenied>;
 }

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};