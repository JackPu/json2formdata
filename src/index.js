
function _buildFormData(formData, data, parentKey) {
  if (data && typeof data === 'object'
    && !(data instanceof Date)
    && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      _buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
}

export default function json2formdata(json) {
  let obj = {};
  const formData = new FormData();
  if (typeof json === 'string') {
    try {
      obj = JSON.parse(json);
    } catch(err) {
      console.err(err);
    }
  } else if (typeof json === 'object') {
    obj = json;
  }

  _buildFormData(formData, obj);
  return formData;
}