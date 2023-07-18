import React, { useState } from "react";
import "./style.module.scss";

const TextInput = ({ type = "text", label, value, onChange }) => {
  const [text, setText] = useState('');

  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
};

export default TextInput;