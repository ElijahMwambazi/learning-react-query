import {
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import InfinitePeople from "./componets/infinite-people/infinite-people.components";
import InfiniteSpecies from "./componets/infinite-species/infinite-species.componets";

declare global {
  interface Window {
    toggleDevtools: any;
  }
}

const App = () => {
  const queryClient = new QueryClient();

  const ReactQueryDevtoolsProduction = lazy(() =>
    import(
      "@tanstack/react-query-devtools/build/lib/index.prod.js"
    ).then((d) => ({
      default: d.ReactQueryDevtools,
    }))
  );

  const [showDevtools, setShowDevtools] =
    useState(false);

  useEffect(() => {
    window.toggleDevtools = () =>
      setShowDevtools((old) => !old);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};

export default App;
