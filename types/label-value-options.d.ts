export interface LabelValueOptions {
  labelKey: string;
  valueKey: string;
}

export type LabelValueOptionsData<T extends any> = T & {
  label: string;
  value: any;
};
