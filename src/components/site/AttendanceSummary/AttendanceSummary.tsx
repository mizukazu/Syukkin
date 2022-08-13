import { ReactElement } from "react";
import { Box, Center, HStack } from "@chakra-ui/react";
import { TextStack } from "../../common/TextStack";
import { SiteColorEnum } from "../../../utils/siteColorEnum";

export const AttendanceSummary = (): ReactElement => {
  return (
    <Box boxShadow={"base"}>
      <Center
        h={30}
        bg={SiteColorEnum.navy}
        color={SiteColorEnum.white}
        fontWeight={"bold"}
      >
        勤怠状況集計
      </Center>
      <Box py={3} px={3}>
        <HStack mb={1}>
          <TextStack title="所定時間" text="160:00" />
          <TextStack title="稼働時間" text="150:00" />
          <TextStack title="時間外" text="20:00" />
        </HStack>
        <HStack>
          <TextStack title="出勤日数" text="20日" />
          <TextStack title="欠勤日数" text="1日" />
        </HStack>
      </Box>
    </Box>
  );
};
