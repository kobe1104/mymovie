import _ from "lodash";

export function paginate(items, currentPage, pageSize) {
  const startIdx = (currentPage - 1) * pageSize;
  // convert it to a lodash obj to chain methods
  return _(items).slice(startIdx).take(pageSize).value();
}
