/* eslint-disable */

export default function consolidateValues(obj: object) {
  const dict = {}
  obj.columns.forEach((col) => {
    dict[col] = obj.records.map(rec => rec[col])
  })

  return dict
}