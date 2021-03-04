import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { searchMovieById } from "../../redux/actions/search";
import { movieResult as movieResultSelector } from "../../redux/selectors";
import MovieResult from "../../Components/MovieResult";

export default ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));

  useEffect(() => {
    const movieId = match.params.id;

    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });
  if (!movieResult) {
    return <CircularProgress size={100} color="primary" />;
  }

  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Año:</strong>
        {movieResult.Year}
      </Typography>
      <Typography>
        <strong>Actores:</strong>
        {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director:</strong>
        {movieResult.Director}
      </Typography>
      <Typography>
        <strong>Género:</strong>
        {movieResult.Type}
      </Typography>
      <Typography>
        <strong>Sinopsis:</strong>
        {movieResult.Plot}
      </Typography>
      <Typography>
        <strong>Origen:</strong>
        {movieResult.Country}
      </Typography>
    </Container>
  );
};
