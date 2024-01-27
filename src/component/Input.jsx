import React from 'react';

function Input({input, onChange}) {
    return (
        <input type="text" value={input} onChange={onChange}/>
    );
}

export default Input;