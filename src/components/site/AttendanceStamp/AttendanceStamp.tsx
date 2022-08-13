import { ReactElement, useEffect, useState } from "react";
import { Box, Center, Button, VStack, HStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { SiteColorEnum } from "../../../utils/siteColorEnum";
import {
  getStartTime,
  getEndTime,
  postStartTime,
  postEndTime,
} from "../../../api/apiServices";

export const AttendanceStamp = (): ReactElement => {
  const [currentDate] = useState(
    format(new Date(), "yyyy年MM月dd日(E)", { locale: ja })
  );
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [isEndButtonDisabled, setIsEndButtonDisabled] = useState(true);

  const toast = useToast();

  useEffect(() => {
    /** 出勤時刻の取得 */
    getStartTime().then((startTime) => {
      if (startTime !== "00:00" && startTime !== undefined) {
        setIsEndButtonDisabled(false);
      }
      setStartTime(startTime ?? "00:00");
    });

    /** 退勤時刻の取得 */
    getEndTime().then((endTime) => {
      setEndTime(endTime ?? "00:00");
    });
  });

  const clickStartButton = async () => {
    const res = await postStartTime();
    if (res?.nowDate) {
      setStartTime(res?.nowDate);
      toast({
        title: "出勤打刻完了",
        description: res?.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "エラー",
        description: res?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const clickEndButton = async () => {
    const res = await postEndTime();
    if (res?.nowDate) {
      setEndTime(res?.nowDate);
      toast({
        title: "退勤打刻完了",
        description: res?.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "エラー",
        description: res?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box boxShadow={"base"}>
      <Center
        h={30}
        bg={SiteColorEnum.navy}
        color={SiteColorEnum.white}
        fontWeight={"bold"}
      >
        {currentDate}
      </Center>
      <HStack py={3} justify="space-around">
        <VStack>
          <Button onClick={clickStartButton} colorScheme="blue" size={"lg"}>
            出勤
          </Button>
          <Center fontWeight={"bold"}>{startTime}</Center>
        </VStack>
        <VStack>
          <Button
            onClick={clickEndButton}
            colorScheme="red"
            size={"lg"}
            isDisabled={isEndButtonDisabled}
          >
            退勤
          </Button>
          <Center fontWeight={"bold"}>{endTime}</Center>
        </VStack>
      </HStack>
    </Box>
  );
};
