import * as React from "react";
import Link from "next/link";
import styles from "../Footer/Footer.module.css";

 const CodeBlock=(props)=> {
  return (
    <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "5px",margin:'1rem' }}>
      <code style={{ fontFamily: "monospace" }}>
        {props.codes}
      </code>
    </pre>
  );
}

export default CodeBlock