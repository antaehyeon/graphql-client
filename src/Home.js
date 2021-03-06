import React from "react";
import styled from "styled-components";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => {
  const { data: movieData, error, loading } = useQuery(HOME_PAGE);

  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>
      {loading && "Loading"}
      {error && "Something is wrong"}
      {!loading &&
        movieData &&
        movieData.movies &&
        movieData.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
    </Container>
  );
};

export default Home;
