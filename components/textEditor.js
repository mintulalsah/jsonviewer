import React from 'react';
// import brace from 'brace';
// import 'brace/mode/javascript';
// // import 'brace/mode/c_cpp';
// import 'brace/theme/twilight';
// import 'brace/theme/xcode';
import AceEditor from 'react-ace';

const TextEditor = (props) => (
  <div>
    <AceEditor
      mode={props.lan}
      theme={props.theme}
      onChange={props.onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{
        $blockScrolling: Infinity // Use Infinity instead of true
      }}
      fontSize={21}
      height='80vh'
      width='100%'
      setOptions={{
        useWorker: false // Disable worker to prevent the 'ace is not defined' error
      }}
    />
  </div>
);

export default TextEditor;
