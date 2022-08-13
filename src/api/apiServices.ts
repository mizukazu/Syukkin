import axios from "axios";
import { format } from "date-fns";

export interface EndPoint {
  name: string;
  attendances: string;
  startTime: string;
  endTime: string;
}
export interface ApiResponse {
  nowDate: string | undefined;
  message: string;
}
export type ApiService = string | undefined;
export type PostTime = ApiResponse | undefined;

export const ENDPOINT: EndPoint = {
  name: "http://localhost:5000/api/name",
  attendances: "http://localhost:5000/api/attendances",
  startTime: "http://localhost:5000/api/start",
  endTime: "http://localhost:5000/api/end",
};

export const getName = async (): Promise<string> => {
  const result = await axios.get(ENDPOINT.name);
  console.log(result);
  return result.data.name;
};

export const getAttendances = async () => {
  const result = await axios.get(ENDPOINT.attendances);
  return result.data.data;
};

export const getStartTime = async (): Promise<ApiService> => {
  const result = await axios.get(ENDPOINT.startTime);
  if (!result.data.startTime) {
    return;
  }
  const startTime = format(new Date(result.data.startTime), "HH:mm");
  return startTime;
};

export const getEndTime = async (): Promise<ApiService> => {
  const result = await axios.get(ENDPOINT.endTime);
  if (!result.data.endTime) {
    return;
  }
  return format(new Date(result.data.endTime), "HH:mm");
};

export const postStartTime = async (): Promise<PostTime> => {
  const result = await axios.post(ENDPOINT.startTime);
  if (!result.data.nowDate) {
    return {
      nowDate: undefined,
      message: result.data.message,
    };
  }
  return {
    nowDate: format(new Date(result.data.nowDate), "HH:mm"),
    message: result.data.message,
  };
};

export const postEndTime = async (): Promise<PostTime> => {
  const result = await axios.post(ENDPOINT.endTime);
  if (!result.data.nowDate) {
    return {
      nowDate: undefined,
      message: result.data.message,
    };
  }
  return {
    nowDate: format(new Date(result.data.nowDate), "HH:mm"),
    message: result.data.message,
  };
};
