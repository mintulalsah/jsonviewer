// components/CSVEditor.js
import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import { parse, unparse } from 'papaparse';
import 'react-data-grid/lib/styles.css';
const CSVEditor = () => {
  const [gridData, setGridData] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const text = await file.text();
      const parsed = parse(text, { header: true });
      setGridData(parsed.data);
      setColumns(parsed.meta.fields.map((field) => ({ key: field, name: field })));
    }
  };

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const updatedData = gridData.slice();
    for (let i = fromRow; i <= toRow; i++) {
      updatedData[i] = { ...updatedData[i], ...updated };
    }
    setGridData(updatedData);
  };

  const handleSaveCSV = () => {
    const csv = unparse({ fields: columns.map((column) => column.key), data: gridData });
    // You can save or use the csv content
    console.log(csv);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      <div style={{ height: '10%', width: '100%' }}>
        <ReactDataGrid
          columns={columns}
          rows={gridData}
          onRowsUpdate={handleGridRowsUpdated}
          style={{ height: '400px',margin:'10px' }}
        />
      </div>

     
    </div>
  );
};

export default CSVEditor;
