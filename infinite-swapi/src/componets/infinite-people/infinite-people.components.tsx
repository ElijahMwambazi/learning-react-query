import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteFetchPeople } from "../../api/services/star-wars.api";
import Person from "../person/person.components";

const InfinitePeople = () => {
  const { data, fetchNextPage, hasNextPage } =
    useInfiniteFetchPeople();

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage}
      hasMore={hasNextPage}
    >
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
