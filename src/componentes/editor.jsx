import React from 'react';
import { useState } from 'react';

function Editor() {
    const [textInit, setText] = useState("texto inicial");

    const TextDefault = () => {
        <h1>Texto Default</h1>
    };

    const TextEdit = () => {
        <h1>Texto nuevo</h1>
    };

    return (
    <div>
        <label>
            Editor
            <textarea 
                id="editor"
                defaultValue={TextDefault}
                rows={4}
                cols={30}
                 />
        </label>
    </div>
    )
};

export default Editor;