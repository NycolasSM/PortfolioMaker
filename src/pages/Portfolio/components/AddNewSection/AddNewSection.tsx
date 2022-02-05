import React, { useState } from "react";

import "./AddNewSection.css"

import AddNewComponent from "./components/AddNewComponent/AddNewComponent";

import { AiOutlineAppstoreAdd, AiOutlineControl, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { RiPlayListAddLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { MdOutlinePreview } from 'react-icons/md'

type Props = {
  id: number;
  deleteSection: () => void;
  addNewSection: () => void;
}

const AddNewSection: React.FC<Props> = ({ deleteSection, addNewSection }) => {


  let [numberOfComponents, setNumberOfComponents] = useState(0)

  const [addSection, setAddSection] = useState("addNewSection")

  const [componentArray, setComponentArray] = useState<any>([]);

  const [isSectionEditable, setIsSectionEditable] = useState(true)

  const [sectionbackgroundColor, setSectionBackgroundColor] = useState("")
  const [sectionBorderRadius, setSectionBorderRadius] = useState("")
  const [alignContent, setAlignContent] = useState("center")

  const [showSectionConfiguration, setShowSectionConfiguration] = useState(false)

  const createNewComponent = () => {
    setNumberOfComponents(numberOfComponents + 1)
    const copyPostArray = Object.assign([], componentArray)
    copyPostArray.push({
      id: numberOfComponents
    })
    setComponentArray(copyPostArray)
  }

  const deleteComponent = (index: number) => {
    const copyPostArray = Object.assign([], componentArray);
    copyPostArray.splice(index, 1);
    setComponentArray(
      copyPostArray
    )
  };

  return (
    <>
      {addSection === "addNewSection" ? <>
        {isSectionEditable ?
          <div className="add-section" >
            <RiPlayListAddLine size={36} onClick={() => { addNewSection(), setAddSection("sectionAdded") }} id="addSecton" className="add-section-button" />
            <label className="add-section-button-label" htmlFor="addSecton">Add New Section</label>
          </div>
          :
          ""
        }
      </>
        :
        ""
      }
      {addSection === "sectionAdded" ?
        <section className="new-section" id="newSection" style={{
          outline: `${isSectionEditable ? "" : "transparent 1px solid"}`,
          minHeight: `${isSectionEditable ? "350px" : "50px"}`,
          backgroundColor: sectionbackgroundColor,
          borderRadius: `${sectionBorderRadius}px`,
          alignItems: alignContent
        }}>
          <label className="section-preview-button">
            <input type="checkbox" className="section-preview-button-input" onClick={() => setIsSectionEditable(!isSectionEditable)} name="section-preview" id="sectionPreviewButton" />
            {isSectionEditable ? <MdOutlinePreview className="section-preview-button-icon" size={30} /> : <FaRegEdit className="section-preview-button-icon" size={26} />}
            <span className="section-preview-button-label">{isSectionEditable ? "Preview?" : "Edit?"}</span>
          </label>
          {isSectionEditable ? <>
            <div className="section-configuration">
              <AiOutlineControl className="section-configuration-button" tabIndex={0} size={34} />
              <div className="options-section-buttons-container">
                <div className="section-configuration-blur"></div>
                <div className="options-section-buttons">
                  <FaRegEdit onClick={() => setShowSectionConfiguration(!showSectionConfiguration)} style={{ backgroundColor: `${showSectionConfiguration ? "gray" : ""}` }} size={25} tabIndex={0} />
                  <AiOutlineArrowUp size={25} />
                  <AiOutlineArrowDown size={25} />
                  <BsTrash onClick={() => deleteSection()} size={25} />
                </div>
              </div>
              {
                showSectionConfiguration ? <>
                  <div className="options-section-configuration">
                    <div>
                      <label htmlFor="sectionBackgroundColor">Background Color</label>
                      <input type="color" onChange={(e) => setSectionBackgroundColor(e.target.value)} name="sectionBackgroundColor" id="sectionBackgroundColor" />
                    </div>
                    <div className="options-section-configuration-content-align">
                      <button onClick={() => setAlignContent("flex-start")}>left</button>
                      <button onClick={() => setAlignContent("center")}>center</button>
                      <button onClick={() => setAlignContent("flex-end")}>right</button>
                    </div>
                  </div>
                </>
                  :
                  ""
              }
            </div>
          </>
            :
            ""
          }
          {componentArray.length > 0 ?
            componentArray.map((component: any, index: number) => {
              return (
                <AddNewComponent isEditComponent={isSectionEditable} cancel={deleteComponent.bind(this, index)} addNewComponent={() => createNewComponent} key={component.id} id={component.id} deleteComponent={deleteComponent.bind(this, index)} />
              )
            })
            :
            ""
          }
          {isSectionEditable ? <>
            <AiOutlineAppstoreAdd size={42} className="add-component-button" id="addComponent" style={{ paddingTop: `${(componentArray.length === 0 ? "126px" : "")}` }} onClick={() => createNewComponent()} />
            <label className="add-component-button-label" htmlFor="addComponent">Add New Component</label>
          </>
            :
            ""
          }
        </section>
        :
        ""
      }
    </>
  );
};

export default AddNewSection;