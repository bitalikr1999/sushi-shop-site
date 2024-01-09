"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./schedule-alert.module.css";
import { workTimeService } from "@/services/work-time.service";

export const ScheduleAlert = () => {
  const message = useMemo(() => {
    return workTimeService.getCurrentStateMessage();
  }, []);

  const isOpenLater = useMemo(() => {
    return workTimeService.getOpenLaterMessage();
  }, []);

  if (!message && !isOpenLater) return null;

  return (
    <div className={styles.container}>
      <p>{message || isOpenLater}</p>
    </div>
  );
};
