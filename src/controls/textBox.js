import React from 'react';
import '../scss/textBox.scss';

export default function TextBox(props) {
    return <input type="text" className="text-box" {...props} />;
}
