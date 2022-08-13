import React, { ReactElement, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import { SiteColorEnum } from "../../../utils/siteColorEnum";
import { getAttendances } from "../../../api/apiServices";
import ja from "date-fns/locale/ja";
import { format } from "date-fns";
import { Attendance } from "./types/attendanceList";

export const AttendanceList = (): ReactElement => {
  const [attendances, setAttendances] = useState<Attendance[]>([]);
  useEffect(() => {
    getAttendances().then((data) => {
      console.log(data);
      setAttendances(data);
    });
  }, []);

  return (
    <TableContainer>
      <Center
        h={30}
        bg={SiteColorEnum.navy}
        color={SiteColorEnum.white}
        fontWeight={"bold"}
      ></Center>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>日付</Th>
            <Th>勤務区分</Th>
            <Th>開始</Th>
            <Th>終了</Th>
            <Th>休憩時間</Th>
            <Th>労働時間</Th>
            <Th>時間外</Th>
            <Th>備考</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* {attendances[0].attendanceId} */}
          {attendances?.map((a, i) => (
            <React.Fragment key={i}>
              <Tr>
                <Td>
                  {format(new Date(a.start_time), "M/d(E)", { locale: ja })}
                </Td>
                <Td>test{i}</Td>
                <Td>{a.start_time}</Td>
                <Td>{a.end_time}</Td>
                <Td>{a.start_rest_time}</Td>
                <Td>{a.end_rest_time}</Td>
                <Td>{a.rest_time}</Td>
              </Tr>
            </React.Fragment>
          ))}
          {/* {[...Array(20)].map((num, i) => (
            <React.Fragment key={i}>
              <Tr>
                <Td>8/{i + 1}(月)</Td>
                <Td>出勤</Td>
                <Td>09:30</Td>
                <Td>18:30</Td>
                <Td>01:00</Td>
                <Td>08:00</Td>
                <Td>00:00</Td>
                <Td></Td>
              </Tr>
            </React.Fragment>
          ))} */}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
