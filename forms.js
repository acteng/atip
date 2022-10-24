function checkbox(props, key, label) {
  const checked = props[key] ? "checked" : "";
  return `<input type="checkbox" id="${key}" ${checked}>
		      <label for="${key}">${label}</label><br>`;
}

function dropdown(props, key, label, values) {
  var html = `<div class="form-row">`;
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
