import React from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { CssBaseline, Grid } from "@mui/material";

const App = () => {
      return (
            <>
                  <Header />
                  <Grid container>
                        <Grid item xs={12} md={4}>
                              <List />
                        </Grid>
                        <Grid item xs={12} md={8}>
                              <Map />
                        </Grid>
                  </Grid>
            </>
      );
};

export default App;
