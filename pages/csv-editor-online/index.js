// pages/csvEditor.js

import CSVEditor from "@/components/CSVEditor";
import Head from "next/head";


export default function CsvEditorPage() {
  return (
    <div>
        <>
     <Head>
        <title>CSV Editor Online</title>
        <meta
          name="description"
          content="CSV Editor Online is free tool open your csv data and edit online"
        />
        <meta
          name="keywords"
          content="csv editor online, edit csv file online, csv file editor"
        />
        <link rel="canonical" href="https://jsonformatteronline.com/csv-editor-online" />
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
    <div>
      <CSVEditor />
    </div>

  
    </>
    </div>
  );
}
