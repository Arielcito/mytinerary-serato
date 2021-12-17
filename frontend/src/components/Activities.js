import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { connect } from "react-redux";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  activitiesContainer: {
    height: "60%",
    width:"90%",
    overflow:"hidden"
  },
}));
const Activities = (props) => {
  const classes = useStyles();

  let arrayActivities = props.activities.filter(
    (activity) => activity.itinerary._id === props.id
  );
  return (
    <Box className={classes.activitiesContainer}>
      <h3>Activities</h3>
      <Grid container>
        {arrayActivities ? (
          arrayActivities.map((activity) => {
            return (
              <Grid item >
                <div className="card 1">
                  <div className="card_image">
                    {" "}
                    <img src={activity.src} alt={activity.title}/>{" "}
                  </div>
                  <div className="card_title title-white">
                    <p>{activity.title}</p>
                  </div>
                </div>
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}
          >
            <Loader />
          </Box>
        )}
      </Grid>
    </Box>
  );
};
const mapDispatchToProps = {
  fetchActivities: itinerariesActions.fetchActivities,
};
const mapStateToProps = (state) => {
  return {
    activities: state.itinerariesReducer.activities,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
