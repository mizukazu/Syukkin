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
