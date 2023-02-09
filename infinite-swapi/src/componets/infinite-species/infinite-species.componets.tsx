import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteFetchSpecies } from "../../api/services/star-wars.api";
import Species from "../species/species.components";

const InfiniteSpecies = () => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchSpecies();

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <h4 className="status">
          Loading
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </h4>
      }
    >
      loader=
      {
        <h4 className="status">
          Loading
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </h4>
      }
      {data &&
        data.pages.map((pageData) =>
          pageData.data.results.map(
            (
              { name, language, averageLifespan },
              index
            ) => (
              <Species
                key={index}
                name={name}
                language={language}
                averageLifespan={averageLifespan}
              />
            )
          )
        )}
    </InfiniteScroll>
  );
};

export default InfiniteSpecies;
