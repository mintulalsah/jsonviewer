import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "@mui/material/Button";

const AceEditor = dynamic(() => import("react-ace"), { ssr: false });

const HtmlViewerPage = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");

  const handleFormatClick = () => {
    // Format the HTML code
    // Example: Add indentation and line breaks
    const formattedHtml = htmlCode.replace(/></g, ">\n<");
    setHtmlCode(formattedHtml);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) {
    return null; // or show a loading indicator
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleFormatClick}>
        Format HTML
      </Button>
      {editorLoaded && (
        <AceEditor
          mode="html"
          theme="github"
          value={htmlCode}
          onChange={setHtmlCode}
          height="500px"
          width="100%"
          editorProps={{ $blockScrolling: true }}
        />
      )}
      {htmlCode && (
        <iframe
          srcDoc={htmlCode}
          style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
        ></iframe>
      )}
    </div>
  );
};

export default HtmlViewerPage;
