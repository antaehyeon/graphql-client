import gql from "graphql-tag";

// https://github.com/apollographql/graphql-tag
export const HOME_PAGE = gql`
  {
    movies(rating: 8.5, limit: 3) {
      id
      title
      rating
    }
  }
`;
