import { LegacyRef, RefObject } from "react";

export interface HashlinkModel {
  id: number;
  title: string;
  url: string;
}

export interface User {
  name: string;
  phoneNumber: number;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Timeline {
  id: number;
  title: string;
  description: string;
  date: string;
  alternate: boolean;
}

export interface Prize {
  id: number;
  position: string;
  prize: string;
  imgUrl: string;
}

export interface InputProps {
  inputName: string;
  inputLabel: string;
  requiredValue: boolean;
  readOnly?: boolean;
  inputType: string;
  inputRef?: RefObject<HTMLInputElement>;
  placeholder?: string;
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface SelectInputProps {
  inputName: string;
  inputLabel: string;
  requiredValue: boolean;
  inputRef?: LegacyRef<HTMLSelectElement>;
  placeholder?: string;
  options: SelectOption[];
}
