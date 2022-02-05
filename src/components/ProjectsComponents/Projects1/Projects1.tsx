import React from "react";

import './Projects1.css'

import { CgExtensionRemove } from 'react-icons/cg'

import ProjectExamplePreview from '../../../assets/PreviewProjectLayout1_525x520.png'
import EditableTitle from '../../../components/TextComponents/EditableTitle/EditableTitle'

type Props = {
  previewImg: string;
  previewImgGif?: string;
  playGif?: boolean;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const Projects1: React.FC<Props> = ({ deleteComponent, isDeletable = false }) => {

  return (
    <div className="project-component_1">
      <div className="project-component_1-description">
        <EditableTitle isDeletable={false} deleteComponent={() => console.log("test")} defaultText="Lorem Ipsum" textAlign='left' />
        {/* <h2>Lorem ipusum</h2> */}
        <p contentEditable={true} spellCheck={false} suppressContentEditableWarning ></p>
      </div>
      <img src={ProjectExamplePreview} onClick={() => console.log("asd")} alt="example" />
      <CgExtensionRemove className="project-component_1-delete-button" onClick={() => deleteComponent()} size={50} />
    </div>
  );
};

export default Projects1;