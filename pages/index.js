// google-site-verification=qqrTUlvlaGxHcq3jeQz4-Zimzw5cFt7ypk5fYSSVizw

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { js_beautify } from "js-beautify";
import { Box, Typography } from "@mui/material";
import styles from '../styles/editor.module.css';
import { JSONTree } from "react-json-tree";
import Head from "next/head";
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
        <title>JSON Formatter Online</title>
  <meta
    name="description"
    content="JSON Formatter Online - Format your JSON code with our free online JSON Formatter tool to get readable JSON data"
  />
  <meta
    name="keywords"
    content="json formatter online,format json online, json format online"
  />
  <link rel="canonical" href="https://jsonformatteronline.com/" />
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
      <Box display="flex" gap={1} sx={{padding:1}}>
      {buttonList.map((buttonText, index) => (
       
       <Typography  className={styles.buttons} key={index} variant="outlined" onClick={() => handleClick(buttonText)}>
         {buttonText}
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
        <>

{/* blog content */}

  <header className={styles.header}>
    <h1 className={styles.h1}>JSON Formatter Online</h1>
    <p>(with a best editor tool)</p>
  </header>
  <main role="main" className={styles.main_div}>
    <article>
      <section className={styles.introduction}>
        <h2 className={styles.h2}>What is JSON and how JSON Formatter Online work ?</h2>
        <p>
          JSON i.e. Javascript object notation, is a lightweight data
          interchange format which is commonly used to transmit data between
          server and web or mobile application, or between different parts of
          Softwares.
        </p>
        <p>
          JSON data is easy for humans to read and write. JSON is basically
          based on Javascript programming language, but it is compatible with
          another language as well because it is language independent format. in
          this blog will tell how to do JSON Formatter Online.
        </p>
      </section>
  
      <p>And now for something completely different!</p>

      <h3 className={styles.h3}>Text on the Web</h3>
      <p>
        Text is the most accessible format for information on the web. Screen
        readers understand text best and the same applies to most assistive
        technology, such as translation apps and Braille displays. So, if you
        have anything on your webpage that’s not text, you must add some text
        that gives your user the same information.
      </p>
      <p>
        The only exception from the rule is decoration, formatting and invisible
        content: if non-text content is pure decoration, is used only for visual
        formatting or is not presented to users, then it must be implemented in
        a way that it can be ignored by assistive technology.
      </p>
     
   
      <h3 className={styles.h3}>lang-Attribute</h3>
      <p>
        Always add a <code className={styles.code}></code> on your <code className={styles.code}></code>
        element in order to make screen reader software read the text on the
        page in the correct language. Remember to set the ISO_639-1 language
        code (e.g.: de, en, fr, es, it) while making sure that, if the language
        for your website changed globally (i.e.: someone clicked on a link
        inside a language navigation) you need to replace the value dynamically.
      </p>
      <p>
        If parts of a website are written in a different language, set the same
        attribute with the correct language code on the parent element.
        Wikipedia, for example, almost always provides translations to articles
        created and links to those translations in their sidebar. Each link text
        is already translated into the language the article linked to will be.
        So, each link in the Wikipedia Translations Navigation has a
        lang-Attribute.
      </p>
      <p>
        <strong>Note:</strong> {"don't mistake"} <code className={styles.code}>hreflang</code> for something
        alike because that attribute is only relevant for crawlers/SEO. It has
        nothing to do with accessibility.
      </p>
     
      <h3 className={styles.h3}>Landmarks</h3>
      <p>
        As a sighted user, when we land on a webpage, we scan the content and
        seek for the most relevant part regarding our own interests – then we
        start from there and navigate around the page and/or website. Landmarks
        provide users of assistive technology with means to first scan and then
        navigate webpages. By pressing combinations of keys the user can jump
        around the DOM and set focus to those elements.
      </p>
      <p>
        {"There'sa wonderful"}{" "}
        <a className={styles.atag} href="http://matatk.agrip.org.uk/landmarks/">browser extension</a>,
        which gives you access to those landmarks and enables you to jump
        through them, just like with assistive technology.
      </p>
    
      <figure>
        <img className={styles.img}
          src="https://picsum.photos/2509/1673?image=600"
          alt="A man with a hooded sweater standing in the woods"
        />
      </figure>
    
      <h3 className={styles.h3}>Skiplinks</h3>
      <p>
        While landmarks are great for users with assistive technology at their
        hands, sighted keyboard users do not have any means to jump over
        headers, navigations and any other elements between the start of the DOM
        tree and the precious content they came to your site for. For them,
        {"there's"} skip links.
      </p>
      <p>
        By repeatedly hitting the <code className={styles.code}>Tab</code> key, a user sets focus to the
        focusable elements in a webpage. Setting focus on a skip link should
        reveal it if it is hidden in the first place! Skip links should be the
        first elements of your HTML document. Depending on your page structure
        you might need more than just one.
      </p>
      <h4>An Example for Skiplinks</h4>
      <p>
        You provide users with a navigation, a site-search, an index navigation
        and a main content area. In any case, you should at least have a skip
        link pointing at the main content! Always! It also makes sense to have a
        skip link pointing at the site search, as experienced (repeating)
        visitors to your website might prefer to search for what they came
        looking for instead of moving from page to page.
      </p>
      <p>
        <strong>Note:</strong> all this advice about skip links is depending on
        your {"site's"} structure and, foremost, on your users’ needs!
      </p>
     
    </article>
  </main>
</>

    </>
    

  );
};

export default IndexPage;