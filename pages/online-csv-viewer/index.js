import CSVEditor from '@/components/CSVEditor';
import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../../styles/editor.module.css';
import Image from 'next/image';
const CsvViewer = () => {
  return (
    <>
      <Head>
        <title>Online CSV Viewer</title>
        <meta
          name="description"
          content="Online CSV Viewer is free tool to view your csv data"
        />
        <meta
          name="keywords"
          content="online csv viewer, CSV Viewer Online, csv reader online, csv opener"
        />
        <link rel="canonical" href="https://jsonformatteronline.com/online-csv-viewer" />
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

      {/* blog content */}

      <header className={styles.header}>
        <h1 className={styles.h1}>Online CSV Viewer</h1>

      </header>
      <main role="main" className={styles.main_div}>
        <article>
          <section className={styles.introduction}>
            <h2 className={styles.h2}>Introducing new Online CSV Viewer: Seamlessly View and Edit CSV Files</h2>
            <p className={styles.p}>
              In current fast digital world, managing data is required everywhere to work on any project in various industries. One most common data storage file is CSV format. It widely used because it is very easy to maintain data in row  and column format.
            </p>
            <p className={styles.p}>
              Make much better experience of data management, we  made our CSV viewer Online. By using this powerful tool you can easily view, edit and after making changes in CSV file you can download your updated CSV files directly from your web browser.
            </p>
          </section>
          <figure>

            <div style={{ maxWidth: '100%', height: 'auto' }}>
              <Image
                src="/images/online-csv-viewer.png"
                className={styles.img}
                width={600}
                height={400}
                alt="Screenshot of the Online CSV Viewer"
              />
            </div>

          </figure>

          <section className={styles.introduction}>
            <h2 className={styles.h2}> Key Features:</h2>
            <p className={styles.p}>
            <span className={styles.count}>1. </span>
            <span className={styles.bold_text}>Effortless CSV Viewing: </span>Its very simple just upload your file and view content of CSV files. This CSV viewer online will support with large files as well, and it will render your CSV file content faster and it will show the data in a user friendly format that makes easy to analyse.</p>
           
            <p className={styles.p}>
            <span className={styles.count}>2. </span>
            <span className={styles.bold_text}>Instant Editing: </span> Previously, we have to  download apps or software for viewing, editing, and re-uploading CSV files. With our viewer, you can edit CSV files directly within your browser. Update values, make corrections, and modify entries in real-time without any hassle.
            </p>
           
            <p className={styles.p}>
            <span className={styles.count}>3. </span>
            <span className={styles.bold_text}>Interactive Grid Interface: </span> we made it an interactive grid interface by using robust React Data Grid library. This gives us a spreadsheet-like experience, that makes you to select and modify cells easily.
            </p>


      
            <p className={styles.p}>
            <span className={styles.count}>4. </span>
            <span className={styles.bold_text}>Responsive Design: </span> The responsive design ensures that you can comfortably view and edit CSV files on various devices, including desktops, tablets, and smartphones.
            </p>


            
            <p className={styles.p}>
            <span className={styles.count}>5. </span>
            <span className={styles.bold_text}>Automatic Save:: </span>Our CSV Viewer Online automatically saves your changes as you edit the file. This ensures that your modifications are saved.
            </p>

           
            <p className={styles.p}>
            <span className={styles.count}>6. </span>
            <span className={styles.bold_text}>Import and Export: </span>You can import your CSV file to view CSV online, and after making changes even you can export i.e. you can again download your updated CSV file.
            </p>
          </section>



          <section className={styles.introduction}>
            <h2 className={styles.h2}>How to Use Our Online CSV Viewer:</h2>
           
            <p className={styles.p}>
            <span className={styles.count}>1. </span>
            <span className={styles.bold_text}>import CSV File: </span> Simply click on choose file and upload your CSV file form your device. Our CSV viewer will load and display contents of file.</p>
            <figure>

<div style={{ maxWidth: '100%', height: 'auto' }}>
  <Image
    src="/images/csv-import.png"
    className={styles.img}
    width={600}
    height={400}
    alt="how to import csv file"
  />
</div>

</figure>
           
            <p className={styles.p}>
            <span className={styles.count}>2. </span>
            <span className={styles.bold_text}>Edit Cells: </span>You can any data by selecting there corresponding cell, make your change, it will automatically save and then you can export it to get the updated file download.
            </p>
           
            <p className={styles.p}>
            Start using Online CSV Viewer today. Upload your CSV files, edit them on-the-fly, and enhance your data management workflow. Try it out and transform the way you interact with CSV files!
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default CsvViewer;
