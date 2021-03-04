// (Para el color de los botones)
import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "Center",
};

export default makeStyles({
  container: {
    height: "100vh",
    ...centeredStyleObj,
    flexDirection: "column",
  },
  cardContainer: {
    ...centeredStyleObj,
    flexDirection: "column",
    height: "200",
    padding: "2rem",
    width: "400",
  },
  button: {
    margin: "5px",
  },
  title: {
    fontSize: "4rem",
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textField: {
    width: "100%",
  },
  buttonsContainer: {
    margintop: "2rem",
  },
  movieIcon: {
    fontSize: "4rem",
  },
});
