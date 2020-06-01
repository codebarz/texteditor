import React from 'react';
import './styles.css';

import {
  makeBold,
  makeItalic,
  strikeThrough,
  underLineText,
  justifyLeft,
  justifyCenter,
  justifyRight,
  undoChange,
  redoChange,
  orderedList,
  unorderedList,
} from '../../helpers/textEditor';

function TextEditor() {
  function saveHandler() {
    //Get editor content
    let text = document.getElementById('user-eidtor').innerHTML;
    console.log(text);
  }
  return (
    <div className="main-eidtor-area">
      <div className="editor-toolbar">
        {/**Come Back here to redesing form flow experiemce */}
        <label></label>
        <button className="toobar-button" onClick={makeBold}>
          <i className="mdi mdi-format-bold"></i>
        </button>
        <button className="toobar-button" onClick={makeItalic}>
          <i className="mdi mdi-format-italic"></i>
        </button>
        <button className="toobar-button" onClick={underLineText}>
          <i className="mdi mdi-format-underline"></i>
        </button>
        <button className="toobar-button" onClick={justifyLeft}>
          <i className="mdi mdi-format-align-left"></i>
        </button>
        <button className="toobar-button" onClick={justifyCenter}>
          <i className="mdi mdi-format-align-justify"></i>
        </button>
        <button className="toobar-button" onClick={justifyRight}>
          <i className="mdi mdi-format-align-right"></i>
        </button>
        <button className="toobar-button" onClick={strikeThrough}>
          <i className="mdi mdi-format-strikethrough-variant"></i>
        </button>
        <button className="toobar-button" onClick={undoChange}>
          <i className="mdi mdi-undo"></i>
        </button>
        <button className="toobar-button" onClick={redoChange}>
          <i className="mdi mdi-redo"></i>
        </button>
        <button className="toobar-button" onClick={unorderedList}>
          <i className="mdi mdi-format-list-bulleted"></i>
        </button>
        <button className="toobar-button" onClick={orderedList}>
          <i className="mdi mdi-format-list-numbered"></i>
        </button>
      </div>
      <div
        className="user-development-plan-eidtor"
        id="user-eidtor"
        contentEditable="true"
      ></div>
      <button className="idpSaveButton" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
}

export default TextEditor;
