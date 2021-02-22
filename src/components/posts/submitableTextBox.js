import React from 'react';
import TextBox from './textBox';

export default function SubmitableTextBox(props) {
    return (
        <div>
            <TextBox {...props} />
            <div></div>
        </div>
    );
}
