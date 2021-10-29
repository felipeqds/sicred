import React from 'react';

function Input({ type,name,id,value,onchance,rows }) {
     
  if( type !== "textarea"){
    return(
      <input
          type={type}
          name={name}
          id={id}
          required
          value={value}
          onChange={onchance }
      />
    )
  } else{
    return(
      <textarea
        name={name}
        id={id}
        rows={rows}
        onChange={onchance}
        defaultValue={ value }
      ></textarea>
    )
  }
}
export default Input;