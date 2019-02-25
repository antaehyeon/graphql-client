import React from "react";
import { Query } from "react-apollo";

const Detail = ({
  location,
  history,
  match: {
    params: { movieId }
  }
}) => {
  console.log(movieId);
  return <div>Detail</div>;
};

export default Detail;
