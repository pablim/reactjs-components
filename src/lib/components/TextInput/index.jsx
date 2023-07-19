import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import "./style.module.scss";

const TextInput = ({ type = "text", label, value, onChange }) => {
  const [name, setName] = useState('')
  useEffect(() => {}, [])

  return (<div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>)
};

export default TextInput;