import React from 'react';
import '../../scss/Posts/textBox.scss';

export default function TextBox(props) {
    return <input type="text" className="text-box" {...props} />;
}
