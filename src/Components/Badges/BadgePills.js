import React from "react";

/**
 *
 * @param {*} type = 'primary, seconday, success, danger, warning, info, light, dark'
 * @param {*} label = ''
 * @returns BadgePills
 */
export default function BadgePills({ type = "", label = "" }) {
  return <span className={`badge rounded-pill text-bg-${type}`}>{label}</span>;
}
