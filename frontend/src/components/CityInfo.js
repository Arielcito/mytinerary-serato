import { Box } from "@mui/system";
import ButtonNav from "./Button";
import { makeStyles } from "@mui/styles";
import underconstruction from "../assets/underconstruction.png";
import websiteuc from "../assets/websiteuc.png";
const useStyles = makeStyles((theme) => ({
  underconstruction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10rem",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  ucimage: {
    width: "8rem",
    height: "8rem",
  },
}));
const CityInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.underconstruction}>
        <Box className={classes.containerImage}>
          <img
            src={underconstruction}
            alt="underconstruction"
            className={classes.ucimage}
          />

          <img
            src={websiteuc}
            alt="underconstructionweb"
            className={classes.ucimage}
          />

          <h3 sx={{ textAlign: "center" }}>
            Oops... this page is under construction, come back on sprint 3
          </h3>
        </Box>
        <ButtonNav page={"cities"}></ButtonNav>
      </Box>
    </>
  );
};

export default CityInfo;
