"use client";

import React, { FC } from "react";
import { Radio } from "rsuite";

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
}
export const FormRadioControll: FC<Props> = ({ value, onChange, options }) => {
  return options.map((item) => {
    return (
      <Radio
        key={item.value}
        value={item.value}
        checked={value === item.value}
        onClick={() => onChange(String(item.value))}
      >
        {item.label}
      </Radio>
    );
  });
};
