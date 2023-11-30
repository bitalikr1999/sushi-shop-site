"use client";

import React, { FC, useEffect, useState } from "react";
import { TimeRoundedArrayGenerator } from "./helper";
import { InputPicker } from "rsuite";

interface Props {
  start: number;
  end: number;
  value: string;
  onChange: (value: string) => void;
}

export const FormSelectTime: FC<Props> = ({ start, end, onChange, value }) => {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    console.log(start, end);
    const timeGenerator = new TimeRoundedArrayGenerator(start, end, 10);
    const timeArray = timeGenerator.generateRoundedTime();

    setOptions(timeArray.map((it) => ({ label: it, value: it })));
  }, [start, end]);

  return (
    <InputPicker
      data={options}
      value={value}
      onChange={onChange}
      placeholder="Оберіть час"
      placement="top"
    />
  );
};
