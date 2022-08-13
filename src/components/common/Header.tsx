import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getName } from "../../api/apiServices";
import { SiteColorEnum } from "../../utils/siteColorEnum";

export const SyukkinHeader = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    getName().then((name) => {
      console.log(name);
      setName(name);
    });
  });
  return (
    <Flex mb={4} py={3} px={2} boxShadow="base">
      <Box fontWeight={"bold"} color={SiteColorEnum.navy}>
        勤怠管理システム
      </Box>
      <Spacer />
      <Box fontWeight={"bold"}>{name}</Box>
    </Flex>
  );
};
