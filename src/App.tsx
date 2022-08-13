import React from "react";
// import "./App.css";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { SyukkinHeader } from "./components/common/Header";
import { AttendanceStamp } from "./components/site/AttendanceStamp/AttendanceStamp";
import { AttendanceSummary } from "./components/site/AttendanceSummary/AttendanceSummary";
import { AttendanceList } from "./components/site/AttendanceList/AttendanceList";

function App() {
  return (
    <>
      <SyukkinHeader />
      <Grid display={"flex"} mx={2} gap={2}>
        <GridItem w={400}>
          <Box mb={5}>
            <AttendanceStamp />
          </Box>
          <Box mb={5}>
            <AttendanceSummary />
          </Box>
        </GridItem>
        <GridItem w={1300}>
          <AttendanceList />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
