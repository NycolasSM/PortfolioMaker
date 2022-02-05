import React from "react";

// import './Text1.css'

import { CgExtensionRemove } from 'react-icons/cg'

type Props = {
  previewImg?: string;
  deleteComponent: () => void;
  isDeletable: boolean;
}

const Text1: React.FC<Props> = ({ deleteComponent, isDeletable = false }) => {

  const focusOnElementById = (elementId: string) => {
    if (elementId) {
      // @ts-ignore: Object is possibly 'null' error.
      document.getElementById(elementId).focus();
    }
  }

  return (
    <div className="editable-title">
      <CgExtensionRemove className="edit-tools-title-delete-button" onClick={() => deleteComponent()} size={28} />
    </div>
  );
};

export default Text1;