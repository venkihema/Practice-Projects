import { Box, Grid } from "@mui/material";
import { Dates } from "./DateComponents/Dates";
import { useState } from "react";
import { EventList } from "./EventList";
export const CalendarEvents = () => {
  const [show, setShow] = useState(false);
  const [eventDate, setEventDate] = useState(null);
  const onclickHandler = (date) => {
    setShow(true);
    setEventDate(date);
  };
  return (
    <div>
      <Box
        sx={{
          maxWidth: 500,
          borderRadius: "15px",
          height: "100vh",
          m: "auto",
        }}
      >
        <Grid container>
          <Grid item container xs={12} sx={{ height: "30vh" }}>
            <img
              style={{
                width: "100%",
                height: "32vh",
                borderRadius: "15px 15px 0px 0px ",
              }}
              src="https://www.teahub.io/photos/full/103-1039229_google-calendar-google-calendar-wallpaper-august.jpg"
              alt="google-img"
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sx={{
              backgroundColor: "#FBF4DD",
              height: "70vh",
              borderRadius: "15px",
            }}
          >
            <Grid
              item
              container
              sx={{
                height: "100px",
                backgroundColor: "#F4FCFC",
                p: "10px",
                borderRadius: "15px",
              }}
            >
              <Dates onclickHandler={onclickHandler} />
              <Grid item container>
                <h3>Calendar Events</h3>
                <Grid item container>
                  {show ? <EventList eventDate={eventDate} /> : null}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
