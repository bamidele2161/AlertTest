import { ReactElement, ReactNode } from "react";

export interface Modal {
  id?: string | number;
  close?: () => void;
}
export interface Layout {
  children: ReactNode;
}
export interface AccountOption {
  icon: any;
  title: string;
  description: string;
}
export interface AddProps {
  setActiveTab: any;
}
export type Currency = "NGN" | "GBP" | "USD" | "CAD";
export interface Route {
  path: string;
  name: string;
  element: ReactElement;
}
export interface IFormInputProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  shortP?: string;
  error?: string | undefined;
  defaultValue?: string | number;
  type?: React.HTMLInputTypeAttribute | "textarea" | "select";
  inputClassName?: string;
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  icon?: JSX.Element | string;
  required?: boolean;
  disabled?: boolean;
  selectOptions?: any[];
  valuePropertyName?: string;
  keyPropertyName?: string;
  itemPropertyName?: string;
}

export interface AnalyticsChartProps {
  data: GraphData[];
}

export interface GraphData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
