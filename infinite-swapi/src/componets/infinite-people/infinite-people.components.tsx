import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteFetchPeople } from "../../api/services/star-wars.api";
import Person from "../person/person.components";

const InfinitePeople = () => {
  const {
    data,
    isLoading,
    // isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchPeople();

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      useWindow={false}
      loader={
        <h4 className="status">
          Loading
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </h4>
      }
    >
      {isLoading && (
        <h4 className="status">
          Loading
          <span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </h4>
      )}
      {/* {isError && (
        <h4 className="status">
          Error fetching data
        </h4>
      )} */}
      {data &&
        data.pages.map((pageData) =>
          pageData.data.results.map(
            (
              {
                name,
                mass,
                height,
                hair_color,
                eye_color,
                skin_color,
                created,
              },
              index
            ) => (
              <Person
                key={index}
                name={name}
                mass={mass}
                height={height}
                hairColor={hair_color}
                eyeColor={eye_color}
                skinColor={skin_color}
                created={created}
              />
            )
          )
        )}
    </InfiniteScroll>
  );
};

export default InfinitePeople;
