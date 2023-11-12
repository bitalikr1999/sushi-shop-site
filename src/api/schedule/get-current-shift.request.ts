import { IScheduleShift } from "@/typing/interfaces";
import api from "../axios";

export const getCurrentShiftReq = () => {
  return api.get<IScheduleShift>("api/schedule/current-shift");
};
