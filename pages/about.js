import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "@mui/material/Button";
import { js_beautify } from "js-beautify";


// const AceEditor = dynamic(() => import("react-ace"), {
//   ssr: false, // Render on the client-side only
// });
const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-json');
    require('ace-builds/src-noconflict/theme-xcode');
    return ace;
  },
{
  loading: () => (
    <>Loading...</>
  ),
  ssr: false,
})

const CodeEditor = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const options = { indent_size: 2, space_in_empty_paren: true };

  const dataObj = {
    completed: false,
    id: 1,
    title: "delectus aut autem",
    userId: 1,
  };

  const dataJson = JSON.stringify(dataObj);

  const handleFormatClick = () => {
    const formattedValue = js_beautify(editorValue, options);
    setEditorValue(formattedValue);
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) {
    return null; // or show a loading indicator
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleFormatClick}>
        Format
      </Button>
    
{/* <Ace mode="json"  theme="xcode"  /> */}
<AceEditor
        mode="json"
        theme="github"
        value={editorValue}
        onChange={handleEditorChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        height="300px"
        width="100%"
      />
    </>
  );
};

export default CodeEditor;
