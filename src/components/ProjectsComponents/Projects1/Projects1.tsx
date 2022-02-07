import React, { useState } from "react";

import './Projects1.css'

import { CgExtensionRemove } from 'react-icons/cg'
import { VscSettingsGear } from 'react-icons/vsc'
import { AiOutlinePicLeft, AiOutlinePicRight } from 'react-icons/ai'
import { BiLeftIndent } from 'react-icons/bi'

import PreviewProjectImageExample from '../../../assets/PreviewProjectImageExample.png'
import EditableTitle from '../../../components/TextComponents/EditableTitle/EditableTitle'

type Props = {
  previewImg: string;
  previewImgGif?: string;
  playGif?: boolean;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const Projects1: React.FC<Props> = ({ deleteComponent, isDeletable = false }) => {

  const [backgroundColor, setBackgroundColor] = useState("#222")
  const [backgroundColorGradient, setBackgroundColorGradient] = useState([backgroundColor, backgroundColor])
  const [isBackgroundGradientColor, setIsBackgroundGradientColor] = useState(false)

  const [gridAreaText, setGridAreaText] = useState("Coloumn1")
  const [gridAreaImage, setGridAreaImage] = useState("Coloumn2")

  const [isEditing, seIsEditing] = useState(false)


  return (<>
    <div className="project-component_1-container">
      <div className="project-component_1" style={{ background: `${isBackgroundGradientColor ? `linear-gradient(to right, ${backgroundColorGradient[0]}, ${backgroundColorGradient[1]})` : `${backgroundColor}`}` }}>
        <div className="project-component_1-description" style={{gridArea: `${gridAreaText}`}}>
          <EditableTitle defaultFontSize={50} isDeletable={false} size={24} deleteComponent={() => console.log("test")} defaultText="Project Title" textAlign='left' />
          <p contentEditable={true} spellCheck={false} suppressContentEditableWarning ></p>
        </div>
        <img src={PreviewProjectImageExample} style={{gridArea: `${gridAreaImage}`, userSelect: "none" }} onClick={() => console.log("asd")} alt="example" />
      </div>

      <VscSettingsGear className="project-component_1-config-button" onClick={() => seIsEditing(!isEditing)} style={{ opacity: `${isEditing ? "0.8" : "0.3"}`, background: `${isEditing ? "#80808070" : ""}` }} size={19} />
    </div>
    {
      isEditing ? <>
        <div className="project-component_1-edit-window" style={{userSelect: "none"}} unselectable="on" id="editWindow">
          <label htmlFor="">background color:</label>
          {
            isBackgroundGradientColor ?
              <>
                <input type="color" name="backgroundColor1" id="backgroundColor1" defaultValue={backgroundColor} onChange={(e) => setBackgroundColorGradient([e.target.value, backgroundColorGradient[1]])} />
                <input type="color" name="backgroundColor2" id="backgroundColor2" defaultValue={backgroundColor} onChange={(e) => setBackgroundColorGradient([backgroundColorGradient[0], e.target.value])} />
              </>
              :
              <input type="color" defaultValue={backgroundColor} name="backgroundColor" id="backgroundColor" onChange={(e) => setBackgroundColor(e.target.value)} />
          }
          <label htmlFor="isBackgroundColorGradient" unselectable="on">Gradient?</label>
          <input type="checkbox" onClick={() => {setIsBackgroundGradientColor(!isBackgroundGradientColor), setBackgroundColorGradient([backgroundColor, backgroundColor])} } name="isBackgroundColorGradient" id="isBackgroundColorGradient" />
          <AiOutlinePicLeft onClick={() => {setGridAreaText("Coloumn2"), setGridAreaImage("Coloumn1")}} className="edit-tools-change-grid-button" size={26} />
          <AiOutlinePicRight onClick={() => {setGridAreaText("Coloumn1"), setGridAreaImage("Coloumn2") }} className="edit-tools-change-grid-button" size={26} />
          {isDeletable === true ? <>
            <CgExtensionRemove className="edit-tools-title-delete-button" onClick={() => deleteComponent()} size={26} />
            <span className="edit-tools-title-delete-button-tooltip" >Delete Component</span>
          </>
            :
            ""
          }
        </div>
      </>
        :
        ""
    }

  </>
  );
};

export default Projects1;