import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "./Select";
import Select1 from "./Select";
import CardItem from "./CardItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Card() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Select1 />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <CardItem />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
