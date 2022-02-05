import React, { useState } from "react";

// import './templateTextComponent.css'

import { CgExtensionRemove } from 'react-icons/cg'

type Props = {
  defaultText?: string,
  defaultFontSize?: number,
  defaultfontColor?: string,
  textAlign?: string,
  size?: number,
  previewImg?: string;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const templateTextComponent: React.FC<Props> = ({ deleteComponent, isDeletable = false, defaultText = "insert text", defaultFontSize = 40, textAlign = "left", size = 19 }) => {

  const [fontWeight, setFontWeight] = useState("normal")
  const [fontSize, setFontSize] = useState(defaultFontSize)
  const [fontStyle, setFontStyle] = useState("normal")
  const [textDecoration, setTextDecoration] = useState("")
  const [fontColor, setFontColor] = useState("#ffffff")
  const [alignText, setAlignText] = useState(textAlign)

  const toggleFontBold = () => {
    fontWeight === "normal" ? setFontWeight("bold") : setFontWeight("normal")
  }

  const toggleFontItalic = () => {
    fontStyle === "normal" ? setFontStyle("Italic") : setFontStyle("normal")
  }

  const toggleTextUnderline = () => {
    textDecoration === "" ? setTextDecoration("underline") : setTextDecoration("")
  }

  const changeFontSize = (event: any) => {
    setFontSize(event.target.value)
  }

  const changeFontColor = (event: any) => {
    setFontColor(event.target.value)
  }

  const fontSizeResize = (operator: string) => {
    if (fontSize <= 60) {
      if (operator === "+") {
        setFontSize(fontSize + 1)
        console.log(fontSize)
      }
    }
    if (fontSize > 30) {
      if (operator === "-") {
        setFontSize(fontSize - 1)
      }
    }
  }

  const focusOnElementById = (elementId: string) => {
    if (elementId) {
      // @ts-ignore: Object is possibly 'null' error.
      document.getElementById(elementId).focus();
    }
  }

  return (
    <div className="editable-title">
      <input type="text" name="title" autoComplete="off" tabIndex={0} className="portfolio-title" id="title" size={size} placeholder={defaultText} spellCheck={false}
        style={{
          fontWeight: `${fontWeight}`,
          fontSize: `${fontSize}px`,
          fontStyle: `${fontStyle}`,
          textDecoration: `${textDecoration}`,
          color: `${fontColor}`,
          textAlign: `${alignText}` as "center"
        }} />
      <div className="edit-tools-title" id="editTool" tabIndex={-1}>
        <button style={{ fontWeight: "bold" }} onClick={() => toggleFontBold()} >B</button>
        <button style={{ fontStyle: "italic", fontFamily: "serif", fontWeight: "bold" }} onClick={() => toggleFontItalic()} >I</button>
        <button onClick={() => toggleTextUnderline()} >U</button>
        <input type="color" name="colorText" id="colorText" className="color-input" defaultValue={fontColor} onChange={(event) => { changeFontColor(event), focusOnElementById("editTool") }} />
        {isDeletable === true ? <>
          <CgExtensionRemove className="edit-tools-title-delete-button" onClick={() => deleteComponent()} size={28} />
          <span className="edit-tools-title-delete-button-tooltip">Delete Component</span>
        </>
          :
          ""
        }
        <label htmlFor="font-size">Font Size</label>
        <select onChange={(event) => { changeFontSize(event), focusOnElementById("editTool") }} value={fontSize} id="font-size" name="font-size">
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
          <option value="60">60</option>
        </select>
        <button onClick={() => fontSizeResize("+")}>+</button>
        <button onClick={() => fontSizeResize("-")}>-</button>
      </div>
    </div>
  );
};

export default templateTextComponent;