import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomButton = () => <span className="octicon octicon-star" />;

const CustomToolbar = () => (
  <div id="toolbar">
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);

const Editor = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState("");

  console.log({ editorHtml });
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        onChange={handleChange}
        placeholder={placeholder}
        modules={Editor.modules}
        formats={Editor.formats}
        theme="snow"
      />
    </div>
  );
};

Editor.propTypes = {
  placeholder: PropTypes.string,
};

Editor.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertStar: () => {
        const cursorPosition = this.quill.getSelection().index;
        this.quill.insertText(cursorPosition, "★");
        this.quill.setSelection(cursorPosition + 1);
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];

export default Editor;
