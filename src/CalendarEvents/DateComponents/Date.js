import { Box, Grid } from "@mui/material";
export const Date = ({ date, week, onclickHandler }) => {
  return (
    <Box
      onClick={() => onclickHandler(date)}
      sx={{
        width: "50px",
        height: "70px",
        backgroundColor: "#F4FCFC",
        margin: "5px",
        boxShadow: "3px 3px 3px grey",
        borderRadius: "10px",
      }}
    >
      <Grid container p={1}>
        <Grid
          item
          container
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, padding: 0 }}>{week}</h3>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0, padding: 0 }}>{date}</h1>
        </Grid>
      </Grid>
    </Box>
  );
};
