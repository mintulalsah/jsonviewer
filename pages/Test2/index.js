import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicAceEditor = dynamic(import('react-ace'), { ssr: false });

const Test2 = () => {
  const [html, setHtml] = useState('<div>Hello, <strong>World!</strong></div>');
  const [jsx, setJSX] = useState('');

  const handleEditorChange = (newValue) => {
    setHtml(newValue);
  };

  useEffect(() => {
    // Perform any necessary server-side checks or operations here
  }, []);

  return (
    <div>
      {typeof window !== 'undefined' && (
        <DynamicAceEditor
          mode="html"
          theme="github"
          value={html} // Ensure html is a string value
          onChange={handleEditorChange}
          editorProps={{ $blockScrolling: true }}
          height="300px"
          width="100%"
        />
      )}
     
     {typeof window !== 'undefined' && (
        <DynamicAceEditor
          mode="jsx"
          theme="github"
          value={jsx} // Ensure html is a string value
          onChange={handleEditorChange}
          editorProps={{ $blockScrolling: true }}
          height="300px"
          width="100%"
        />
      )}
     
    </div>
  );
};

export default Test2;
