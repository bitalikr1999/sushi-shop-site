"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./schedule-alert.module.css";
import { IScheduleShift } from "@/typing/interfaces";
import { getCurrentShiftReq } from "@/api/schedule";
import { workTimeService } from "@/services/work-time.service";

export const ScheduleAlert = () => {
  const [shift, setShift] = useState<IScheduleShift>();

  const load = async () => {
    try {
      const { data } = await getCurrentShiftReq();
      setShift(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const message = useMemo(() => {
    return workTimeService.getCurrentStateMessage(shift);
  }, [shift]);

  if (!shift || !message) return null;

  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
};
