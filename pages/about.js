import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "@mui/material/Button";
import { js_beautify } from "js-beautify";
import { Box, Typography } from "@mui/material";
import styles from '../styles/editor.module.css';
import { JSONTree } from "react-json-tree";
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from "immutable";
import Head from "next/head";

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
  const [editorValueForTreeview, setEditorValueForTreeViewe] = useState("");
  const [activeComponent, setActiveComponent] = useState('Format');
  const options = { indent_size: 2, space_in_empty_paren: true };

  const dataObj = {
    completed: false,
    id: 1,
    title: "delectus aut autem",
    userId: 1,
  };
  const buttonList = [
    "Format",
    "jsontreeviewer",
    "Button 3",
    "Button 4",
    "Button 5",
  ];
  const handleClick = (buttonText) => {
    console.log(`Button clicked: ${buttonText}`);
   
    // Perform actions based on the clicked button
    if (buttonText === "Format") {
      setActiveComponent(buttonText);
      // Action for Button 1
      const formattedValue = js_beautify(editorValue, options);
    setEditorValue(formattedValue);
    } else if (buttonText === "jsontreeviewer") {
      try {
        setActiveComponent(buttonText);
        const jsonData = JSON.parse(editorValue);
        setEditorValueForTreeViewe(jsonData)
        console.log('JSON is valid:', jsonData);
      } catch (error) {
        setActiveComponent('Format');
        alert("Invalid JSON")
      }
      // Action for Button 2
    } else if (buttonText === "Button 3") {
      // Action for Button 3
    } else if (buttonText === "Button 4") {
      // Action for Button 4
    } else if (buttonText === "Button 5") {
      // Action for Button 5
    }
  };


  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) {
   return (
      <>
        <Head>
          <title>about us</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
        )
  }

  return (
    <>
      <Head>
        <title>about us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" gap={1}>
      {buttonList.map((buttonText, index) => (
        <Typography key={index}>
          <Typography variant="outlined" onClick={() => handleClick(buttonText)}>
            {buttonText}
          </Typography>
        </Typography>
      ))}
    </Box>
{/* <Ace mode="json"  theme="xcode"  /> */}
{activeComponent === 'Format' && 
<AceEditor
// style={{ borderTop: '10px solid red',borderBottom: '10px solid #f0f0f',borderRight: '10px solid #f0f0f' }}
        mode="json"
        className={styles.editor_border}
        // theme="github"
        value={editorValue}
        wrapEnabled={true}
        onChange={handleEditorChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        height='90vh'
        width="100%"
        showPrintMargin={false}
      />}
        {activeComponent === 'jsontreeviewer' && <JSONTree data={editorValueForTreeview} />}
        {/* {activeComponent === 'Component3' && <Component3 />} */}
        {/* {activeComponent === 'Component4' && <Component4 />} */}
        {/* {activeComponent === 'Component5' && <Component5 />} */}

    </>
  );
};

export default CodeEditor;
