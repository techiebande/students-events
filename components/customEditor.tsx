import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const CustomEditor = () => {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <>
      <QuillEditor
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
        className="w-full min-h-[70%] mt-10 bg-white"
      />
      <p className="mt-3 text-xs sm:textsm sm:mt-4">0 characters</p>
    </>
  );
};

export default CustomEditor;
