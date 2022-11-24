"use strict";

export function dropdown(props, key, label, values) {
  var html = `<div>`;
  html += `<label for="${key}">${label}</label>`;
  html += `<select id="${key}">`;
  html += `<option></option>`;
  for (const val of values) {
    const selected = props[key] == val ? "selected" : "";
    html += `<option value="${val}" ${selected}>${val}</option>`;
  }
  html += `</select>`;
  html += `</div>`;
  return html;
}

export function radio(props, id, key, values) {
  var html = `<div style="display: flex; justify-content: space-between;">`;
  for (const val of values) {
    const checked = props[key] == val ? "checked" : "";
    html += `<input type="radio" id="${val}" name="${id}" ${checked}>`;
    const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
    html += `<label for="${val}">${capitalized}</label>`;
  }
  html += `</div>`;
  return html;
}

export function checkbox(props, key, label) {
  const checked = props[key] ? "checked" : "";
  return `<input type="checkbox" id="${key}" ${checked}>
		      <label for="${key}">${label}</label><br>`;
}

export function checkboxes(props, prefix, labels) {
  var result = ``;
  var idx = 0;
  for (const label of labels) {
    const key = prefix + String.fromCharCode("a".charCodeAt(0) + idx);
    result += checkbox(props, key, label);
    idx += 1;
  }
  return result;
}

export function checkbox_ids(prefix, num) {
  return Array.from(
    { length: num },
    (_, i) => prefix + String.fromCharCode("a".charCodeAt(0) + i)
  );
}
