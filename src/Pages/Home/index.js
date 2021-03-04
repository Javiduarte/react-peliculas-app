import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
// Para activar los className
import styles from "./style";

// Para importa los de MovieIcon
import { MovieIcon } from "../../Icons";

export default ({ history }) => {
  console.log(history);
  // Para activar style
  const classes = styles();

  // Para sacar del error a Value y onChange
  const [searchText, setSearchText] = useState("");

  // Para onChange
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  // Para que funcionen los botones
  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };

  const handleClearTextClick = (event) => {
    setSearchText("");
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Sigma Σ</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon}></MovieIcon>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            onClick={handleSearchTextClick}
            className={classes.button}
          >
            Buscar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClearTextClick}
            className={classes.button}
          >
            Limpiar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
