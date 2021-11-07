import React from 'react';

function Input({ type,name,id,value,onchange,rows }) {
     
  if( type !== "textarea"){
    return(
      <input
          type={type}
          name={name}
          id={id}
          required
          value={value}
          onChange={onchange}
      />
    )
  } else{
    return(
      <textarea
        name={name}
        id={id}
        rows={rows}
        onChange={onchange}
        defaultValue={ value }
      ></textarea>
    )
  }
}
export default Input;