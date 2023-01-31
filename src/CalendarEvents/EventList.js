import datesOfMonth from "../CalendarEvents/DateComponents/Date.json";
import { Box, Grid } from "@mui/material";
export const EventList = ({ eventDate }) => {
  return (
    <Box style={{ width: "100%" }}>
      {datesOfMonth
        .filter((item) => item.date === eventDate)
        .map((item) => (
          <Grid container key={item.date} sx={{ width: "100%" }}>
            <Grid
              item
              container
              xs={12}
              sx={{
                height: "auto",
                backgroundColor: "#A4C4D4",
                borderRadius: "10px",
                mb: 2,
              }}
            >
              <h4
                style={{
                  lineHeight: "50px",
                  margin: "0",
                  padding: "0px 0px 0px 10px",
                }}
              >
                {item.events[0].title}
              </h4>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#DCE4BC",
                borderRadius: "10px",
              }}
            >
              <h4
                style={{
                  lineHeight: "50px",
                  margin: "0",
                  padding: "0px 0px 0px 10px",
                }}
              >
                {item.events[0].description}
              </h4>
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};
