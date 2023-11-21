import _cloneDeep from "lodash/cloneDeep";
import type { LabelValueOptions } from "~/types/label-value-options";
import { setLabelVale } from "~/utils/label";

const makeTree = (
  list: Array<any>,
  childField: string,
  idField: string,
  parentIdField: string,
  opts?: LabelValueOptions
): Array<any> => {
  if (list === undefined || list === null || list.length < 1) {
    return [];
  }

  const rtArray: Array<any> = [];

  for (const item of list) {
    let nItem: any;

    if (opts !== undefined && opts !== null) {
      nItem = setLabelVale(item, opts);
    } else {
      nItem = _cloneDeep(item);
    }

    if (
      nItem[parentIdField] !== undefined &&
      nItem[parentIdField] !== null &&
      nItem[parentIdField] !== 0
    ) {
      const parentItem = findTreeItemById(
        rtArray,
        childField,
        idField,
        nItem[parentIdField]
      );

      if (parentItem !== undefined) {
        if (parentItem[childField] === undefined) {
          parentItem[childField] = [];
        }
        nItem.depth = parentItem.depth + 1;
        parentItem[childField].push(nItem);
      }
    } else {
      nItem[childField] = [];
      nItem.depth = 1;
      rtArray.push(nItem);
    }
  }

  return rtArray;
};

const findTreeItemById = (
  list: Array<any>,
  childField: string,
  idField: string,
  id: any
): any | undefined => {
  for (const item of list) {
    if (
      item[idField] !== undefined &&
      item[idField] !== null &&
      item[idField] === id
    ) {
      return item;
    }
    if (item[childField]?.length) {
      const innerResult = findTreeItemById(
        item[childField],
        childField,
        idField,
        id
      );
      if (innerResult) {
        return innerResult;
      }
    }
  }
  return undefined;
};

export { makeTree, findTreeItemById };
