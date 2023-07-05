import React, { useState } from 'react';
import Papa from 'papaparse';
// import './CsvViewer.css'; // Import CSS file for styling
import styles from '../CSVViewer/csvviewer.module.css';

const CsvViewer = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          setCsvData(results.data);
        },
        header: true, // If the CSV file has a header row
      });
    }
  };

  return (
    <div className={styles.csv_viewer}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <table className={styles.csv_table}>
        <thead>
          <tr>
            {csvData[0] &&
              Object.keys(csvData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvViewer;
