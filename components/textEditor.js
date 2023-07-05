import React from 'react';
import AceEditor from 'react-ace';

const TextEditor = (props) => (
  <div>
    <AceEditor
      mode={props.lan}
      theme={props.theme}
      onChange={props.onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{
        $blockScrolling: Infinity 
        // Use Infinity instead of true
      }}
      showPrintMargin={false}
      fontSize={21}
      height='80vh'
      wrapEnabled={true}
      width='90%'
      setOptions={{
        useWorker: false,
        wrap: true, // Enable text wrapping
        maxLines: Infinity,  // this is going to be very slow on large documents
        useWrapMode: true,   // wrap text to view
        indentedSoftWrap: false, 
        behavioursEnabled: false, // disable autopairing of brackets and tags
        showLineNumbers: false, // hide the gutter
        theme: "ace/theme/xcode"
         // Disable worker to prevent the 'ace is not defined' error
      }}
    />
  </div>
);

export default TextEditor;
