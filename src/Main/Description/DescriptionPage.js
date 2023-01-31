import { Box, Grid } from "@mui/material";
export const DescriptionPage = () => {
  return (
    <Box>
      <Grid item container sx={{ bgcolor: "#fbe2f0" }}>
        <Grid item container>
          <p
            style={{
              textAlign: "justify",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            Konidela Ram Charan Teja (born 27 March 1985) is an Indian actor,
            producer, and entrepreneur who works predominantly in Telugu films.
            One of the highest-paid Telugu film actors, he is the recipient of
            three Filmfare Awards and two Nandi Awards. Since 2013, he has
            featured in Forbes India's Celebrity 100 list.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};
