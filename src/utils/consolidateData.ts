/* eslint-disable */
type TObj = {
  columns: string[]
  records: Object[]
}

export default function consolidateValues(obj: TObj) {
  const dict = {}
  obj.columns.forEach((col) => {
    dict[col] = obj.records.map(rec => rec[col])
  })

  return dict
}