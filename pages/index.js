// google-site-verification=qqrTUlvlaGxHcq3jeQz4-Zimzw5cFt7ypk5fYSSVizw

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { js_beautify } from "js-beautify";
import { Box, Typography } from "@mui/material";
import styles from '../styles/editor.module.css';
import { JSONTree } from "react-json-tree";
import Head from "next/head";
import imagepaths from "@/public/imagepaths";
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

const IndexPage = () => {
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
  return (
    <>
      <Head>
        <title>Online JSON Viewer</title>
  <meta
    name="description"
    content="Online JSON Viewer- Simplify Your JSON data with JSON Viewer tool"
  />
  <meta
    name="keywords"
    content="Online JSON Viewer, JSON Viewer"
  />
  <link rel="canonical" href="https://onlinejsonviewer.com/" />
  <meta name="robots" content="index,follow" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="favicon/site.webmanifest" />
  <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
      </Head>
      <Box display="flex" gap={1} sx={{padding:1}}>
      {buttonList.map((buttonText, index) => (
       
       <Typography  className={styles.buttons} key={index} variant="outlined" onClick={() => handleClick(buttonText)}>
         {buttonText}
       </Typography>
    
   ))}
    </Box>

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
        <>

{/* blog content */}

  <header className={styles.header}>
    <h1 className={styles.h1}>Online JSON Viewer</h1>
    <p className={styles.p}>(with a best json tree viewer)</p>
  </header>
  <main role="main" className={styles.main_div}>
    <article>
      <section className={styles.introduction}>
      <p className={styles.p}>
        An online JSON viewer is a json tree viewer tool that allows developers to fast visualise and analyse JSON information in a human-readable format. It offers a smooth interface for you to find, sort, and explore JSON objects values associated with keys. Using the online JSON viewer, you may effortlessly recognize the structure of your JSON key and their value, that is specifically helpful while dealing with big or nested data.
        </p>
       
      </section>
  
     
      <h2 className={styles.h2}>Key Features and Benefits</h2>
      
     
   
      <h3 className={styles.h3}>Visual Representation:</h3>
      <p className={styles.p}>
      The primary benefit of using an online JSON viewer is to make JSON data in a structured and readable manner. Instead of dealing with raw JSON strings, this tool will  display the data as a hierarchical tree or a formatted table, making it easier to read your key value and check how many keys are present in each of your objects or inside the array.
      </p>
     
     
      <h3 className={styles.h3}>Syntax Highlighting:</h3>
      <p className={styles.p}>
      JSON viewer tools have features of highlighting key, meaning it will highlight different data types, key value pairs with different colors to analyse key- value is more efficient, This tool feature will help developers to easily see if there are any errors in your json data.
      </p>
    
    
      <figure>
              <img className={styles.img}
                src={imagepaths.raw_json}
                alt="Online Json Viewer"
              />
               <p className={styles.p}>
      when you clcik on json tree viewer - 
      </p>
            </figure>
            <figure>
              <img className={styles.img}
                src={imagepaths.json_tree_view}
                alt="Json tree Viewer"
              />
              
            </figure>
    
      <h3 className={styles.h3}>Collapsible and Expandable Nodes:</h3>
      <p className={styles.p}>
      After clicking on the json viewer you can collapse and expand any json object or array to focus on where you have i.e focus on a particular key object. By collapsing nested objects or arrays, developers can focus on specific parts of the JSON data, reducing visual clutter and enhancing data analysis.

      </p>
      <figure>
              <img className={styles.img}
                src={imagepaths.expanded}
                alt="Json Viewer"
              />
              
            </figure>
      <h3 className={styles.h3}>JSON Data Validation:</h3>
      <p className={styles.p}>
      Our online JSON viewer tool can validate your JSON data, It required when we are creating API or when working with data received from APIs to integrate with UI it helps us to validate whether JSON is coming correct data or not.
      </p>
      <h3 className={styles.h3}>We support URL Integration:</h3>
      <p className={styles.p}>
      We have given feature that you can fetch your JSON data from external sources as well and see your JSON data online without having to copy and paste the data into the viewer
       </p>
       <h3 className={styles.h3}>Conclusion:</h3>
      <p className={styles.p}>
      The online JSON viewer tool is very useful for developers who work with JSON data while fetching data from APIs integration in our software. Its user-friendly interface, with highlighting syntax, error detection and understanding JSON objects. By using an online JSON viewer, developers can save time.
      </p>
     

      <p className={styles.p}>
      So why are you struggling with raw JSON strings analysing your data with an online JSON viewer? Try today and experience the ease of JSON parsing Happy coding!
     </p>
    </article>
  </main>
</>

    </>
    

  );
};

export default IndexPage;