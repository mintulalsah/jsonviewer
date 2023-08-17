// google-site-verification=qqrTUlvlaGxHcq3jeQz4-Zimzw5cFt7ypk5fYSSVizw
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState,useRef } from "react";
import dynamic from "next/dynamic";
import { js_beautify } from "js-beautify";
import { Box,Button, CircularProgress } from "@mui/material";
import styles from '../../styles/editor.module.css';
import Head from "next/head";
import Image from 'next/image'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import imagepaths from "@/public/imagepaths";
import CodeBlock from "@/components/CodeBlock";
import { JSONTree } from 'react-json-tree';
const jsonObject = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    zipCode: "10001"
  }
};
const jsonArray = [
  {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "address": {
      "city": "New York",
      "zipCode": "10001"
    }
  },
  {
    "name": "Jane Smith",
    "age": 25,
    "isStudent": true,
    "address": {
      "city": "Los Angeles",
      "zipCode": "90001"
    }
  },
  {
    "name": "Mike Johnson",
    "age": 40,
    "isStudent": false,
    "address": {
      "city": "Chicago",
      "zipCode": "60601"
    }
  }
]

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-json');
    require('ace-builds/src-noconflict/theme-xcode');
    return ace;
  },
  {
    loading: () => (
      <Box display="flex" sx={{ justifyContent:'center',alignItems:'center',
    height: '100vh', width: '100vw' }}>
  <CircularProgress color="secondary" />
  </Box>
    ),
    ssr: false,
  })
  const options = { indent_size: 2, space_in_empty_paren: true };
  const DataPage = ({ data }) => {
    const [activeComponent, setActiveComponent] = useState('format');
    const [editorValue, setEditorValue] = useState("");
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [editorValueForTreeview, setEditorValueForTreeViewe] = useState("");
  // Use the 'data' variable, which contains the parsed JSON data
  console.log(data);
 
  useEffect(() => {
    setEditorLoaded(true)
   
  }, []);
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the event
  
    // Check if a file was selected
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        // Use the 'content' variable, which contains the content of the selected file
        console.log(content);
        setEditorValue(content)
      };
      reader.readAsText(file); // Read the selected file as text
    }
  };
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  const samplehandleClick=(data)=>{
    setEditorValue(data);
  }
 const format=()=>{
  try {
    setActiveComponent('format');
    const jsonData = JSON.parse(editorValue); // Check if JSON is valid
    const formattedValue = js_beautify(editorValue, options);
    setEditorValue(formattedValue);
    console.log("JSON is valid:", jsonData);
  } catch (error) {
    var formattedString = editorValue.replace(/(\\t|\\r)/g, '')
    .replace(/\\n/g, '\n')
    .replace(/},/g, "},\n")
    .replace(/{/g, "{\n")
    .replace(/}/g, "\n}")
    .replace(/,/g, ",\n");
    setEditorValue(formattedString);
    alert("Invalid JSON but still we prettify your json data for easy to read");
    console.log("Invalid JSON:", editorValue);
  }
 }

 const treeview=()=>{
    try {
      setActiveComponent('jsonview');
      const jsonData = JSON.parse(editorValue);
      setEditorValueForTreeViewe(jsonData)
      console.log('JSON is valid:', jsonData);
    } catch (error) {
      setActiveComponent('format');
      alert("Invalid JSON")
    }
 }

  return (
    <>
      <Head>
        <title>Json Tree Viewer</title>
        <meta
          name="description"
          content="Json Tree Viewer is free tool view your json data in Tree format"
        />
        <meta
          name="keywords"
          content="json tree viewer,json file reader,json file viewer online"
        />
        <link rel="canonical" href="https://jsonformatteronline.com/json-tree-viewer" />
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
        {/* <link rel="stylesheet" href="css/blog.css" /> */}


      </Head>
      <Box display="flex" gap={1} sx={{ padding: 1,alignItems:'center' }}>
         
           <input  style={{ backgroundColor: '#b18def',paddingTop:8,paddingBottom:8,width:'200px',paddingLeft:5,paddingRight:5,borderRadius:5,color:'white' }} 
         type="file" accept=".json" onChange={handleFileUpload} />
      
    
 <Button 
          sx={{
            backgroundColor: '#b18def',
            marginRight: 2,
            textTransform: "none", // Prevent uppercase transformation
            '&:hover': {
              backgroundColor: '#772ff4',
              // Add more styles as needed
            },
          }}
          variant="contained" onClick={() => samplehandleClick(data)}>
          sample data
        </Button>
        <Button 
          sx={{
            backgroundColor: '#b18def',
            marginRight: 2,
            textTransform: "none", // Prevent uppercase transformation
            '&:hover': {
              backgroundColor: '#772ff4',
              // Add more styles as needed
            },
          }}
          variant="contained" onClick={() => format()}>
         format
        </Button>
        <Button 
          sx={{
            backgroundColor: '#b18def',
            marginRight: 2,
            textTransform: "none", // Prevent uppercase transformation
            '&:hover': {
              backgroundColor: '#772ff4',
              // Add more styles as needed
            },
          }}
          variant="contained" onClick={() =>treeview()}>
        tree viewer
        </Button>
       
      </Box>
        {activeComponent === 'format' && editorLoaded && <AceEditor
          // style={{ borderTop: '10px solid red',borderBottom: '10px solid #f0f0f',borderRight: '10px solid #f0f0f' }}
          mode="json"
        //   className={styles.editor_border}
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
          {activeComponent === 'jsonview' &&  <div className={styles.tree_viewer}>
        <JSONTree  data={editorValueForTreeview} />
      </div>}
        {/* blog content */}

        <header className={styles.header}>
          <h1 className={styles.h1}>Json Tree Viewer</h1>
          
        </header>
        <main role="main" className={styles.main_div}>
          <article>
            <section className={styles.introduction}>

              <p className={styles.p}>
              Hey Are you a developer working with JSON Data and you are searching for how to open json file online and make change; we have got you covered! Say hello to our super cool JSON Tree Viewer - your new best friend for simplifying the way you handle JSON Data!
              </p>
              <p className={styles.p}>
              let me tell you the basics - JSON is a data format that we widely used to exchange data or can called information between servers and web or mobile applications. But when it comes to human eyes it is more readable other than xml data.
              </p>
            </section>
            <figure>
              {/* <image className={styles.img}
                src='/images/json-tree-viewer.png'
                alt="json tree viewer"
              /> */}
               <div style={{ maxWidth: '100%', height: 'auto' }}>
               <Image
      src="/images/json-tree-viewer.png"
      className={styles.img}
      width={800}
      height={500}
      alt="Picture of the author"
    />
    </div>
              <p className={styles.p}>
                Json data is easy for humans to read and write. Json is basically based on
                javascript programming language,
                but it is compatible with another language as well because it is language independent format.
              </p>
            </figure>

            <section className={styles.introduction}>
            <p className={styles.p}>
            Maybe you will get some other json tree viewer page like they open your json file and show as plain text</p>
            <CodeBlock codes={JSON.stringify(jsonArray, null, 2)} />
            <p className={styles.p}>
            but we show your json data in json editor so that you can edit your json data if required and with many more features like
            </p> 
            <h2 className={styles.h2}>Features and Benefits</h2>
      
      <h3 className={styles.h3}>Visual Representation:</h3>
      <p className={styles.p}>
      The primary benefit of using an  JSON tree Viewer online is to make JSON data in a structured and readable manner. Instead of dealing with raw JSON strings, this tool will  display the data as a hierarchical tree or a formatted table, making it easier to read your key value and check how many keys are present in each of your objects or inside the array.
      </p>
     
     
      <h3 className={styles.h3}>Syntax Highlighting:</h3>
      <p className={styles.p}>
      JSON tree viewer tools have features of highlighting key, meaning it will highlight different data types, key value pairs with different colors to analyse key- value is more efficient, This tool feature will help developers to easily see if there are any errors in your json data.
      </p>

             
            </section>

          </article>
        </main>
      </>
  );
};

export default DataPage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
 
  const data = jsonData;

  return {
    props: {
      data,
    },
  };
}