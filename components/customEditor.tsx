import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "todoList",
    "|",
    "outdent",
    "indent",
    "|",
    "undo",
    "redo",
  ],
};

function CustomEditor(props: any) {
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={props.initialData}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
      <p className="mt-3 text-xs sm:textsm sm:mt-4">0 characters</p>
    </>
  );
}
export default CustomEditor;
