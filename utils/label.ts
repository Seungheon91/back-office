import _cloneDeep from "lodash/cloneDeep";
import type {
  LabelValueOptionsData,
  LabelValueOptions,
} from "~/types/label-value-options";

const setLabelVale = (
  value: any,
  opts: LabelValueOptions
): LabelValueOptionsData<any> => {
  const rtValue = _cloneDeep(value);

  rtValue.label = value[opts.labelKey];
  rtValue.value = value[opts.valueKey];

  return rtValue;
};

const convertToOptionsData = (
  list: Array<any>,
  opts: LabelValueOptions
): Array<LabelValueOptionsData<any>> => {
  const rtArray: Array<LabelValueOptionsData<any>> = [];

  for (const item of list) {
    rtArray.push(setLabelVale(item, opts));
  }

  return rtArray;
};

export { setLabelVale, convertToOptionsData };
