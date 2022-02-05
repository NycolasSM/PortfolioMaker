import React, { useState } from 'react';

import "./AddNewComponent.css"

import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiPhotoAlbum, BiText, BiMoviePlay } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { BsMusicNoteBeamed } from 'react-icons/bs'

import PreviewImgTitleComponent from '../../../../../../assets/previewComponents/PreviewTitleComponent.png'
import PreviewImgTitleComponentGif from '../../../../../../assets/previewComponents/PreviewTitleComponent.gif'
import EditableTitle from '../../../../../../components/TextComponents/EditableTitle/EditableTitle'

import PreviewImgProjects1 from '../../../../../../assets/previewComponents/PreviewProject1.png'
import PreviewImgProjects1Gif from '../../../../../../assets/previewComponents/PreviewProject1Gif.png'
import Projects1 from '../../../../../../components/ProjectsComponents/Projects1/Projects1'

import PreviewImgProjects2 from '../../../../../../assets/previewComponents/PreviewProject2.png'
import PreviewImgProjects2Gif from '../../../../../../assets/previewComponents/PreviewProject2Gif.png'
import Projects2 from '../../../../../../components/ProjectsComponents/Projects2/Projects2'


type Props = {
  id?: number;
  cancel: () => void;
  deleteComponent: () => void;
  addNewComponent: () => void;
  isEditComponent: boolean;
}

const AddNewComponent: React.FC<Props> = ({
  cancel,
  addNewComponent,
  deleteComponent,
  isEditComponent
}) => {

  const [choosenComponentStage, setChoosenComponentStage] = useState("choosing")

  const [typeOfNewSection, setTypeOfNewSection] = useState("Text")

  const [textComponentsArray, setTextComponentsArray] = useState([
    <EditableTitle isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgTitleComponent} previewImgGif={PreviewImgTitleComponentGif} />
  ])

  const [projectsComponentsArray, setProjectsComponentsArray] = useState([
    <Projects1 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgProjects1} previewImgGif={PreviewImgProjects1Gif} />,
    <Projects2 isDeletable={true} deleteComponent={() => deleteComponent()} previewImg={PreviewImgProjects2} previewImgGif={PreviewImgProjects2Gif} />
  ])

  const [galeryComponentsArray, setGaletyComponentsArray] = useState([

  ])

  const [gitHubComponentsArray, setGitHubComponentsArray] = useState([

  ])

  const [achievementsComponentsArray, setAchievementsComponentsArray] = useState([

  ])

  const [choosenComponent, setChoosenComponent] = useState()

  function chooseComponent(array: any, index: number) {
    setChoosenComponent(array[index])
  }

  return (
    <div>
      {
        choosenComponentStage === "choosing" ? <>
          <div className="add-section-modal-overlay">
            <div className="add-section-modal">
              <div className="add-section-modal-header">
                <h3>Add New Component</h3>
                <IoMdClose onClick={() => cancel()} size={24} color='white' className="add-section-modal-header-button" />
              </div>
              <div className="add-section-modal-new-component">
                <div className="add-section-modal-aside">
                  <div onClick={() => { setTypeOfNewSection("Text") }} tabIndex={0}>
                    <BiText size={30} />
                    <span>Text</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Projects") }} tabIndex={0}>
                    <AiOutlineFundProjectionScreen size={30} />
                    <span>Projects</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Galery") }} tabIndex={0}>
                    <BiPhotoAlbum size={30} />
                    <span>Galery</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("GitHub") }} tabIndex={0}>
                    <AiFillGithub size={30} />
                    <span>GitHub</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Achievements") }} tabIndex={0}>
                    <GiAchievement size={30} />
                    <span>Achievements</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Videos") }} tabIndex={0}>
                    <BiMoviePlay size={30} />
                    <span>Videos</span>
                  </div>
                  <div onClick={() => { setTypeOfNewSection("Musics") }} tabIndex={0}>
                    <BsMusicNoteBeamed size={30} />
                    <span>Musics</span>
                  </div>
                </div>
                <div className="add-section-modal-content">
                  {typeOfNewSection === "Text" ? <>
                    {textComponentsArray.map((section, index) => {
                      return (
                        <img key={index} src={section.props.previewImg} className={"preview-section-img"} onClick={() => { chooseComponent(textComponentsArray, index), setChoosenComponentStage("componentChoosen"), addNewComponent() }} alt="Preview of Component" />
                      )
                    })}
                  </>
                    :
                    typeOfNewSection === "Projects" ? <>
                      {projectsComponentsArray.map((section, index) => {
                        return (
                          <img key={index} src={section.props.previewImg} className={"preview-section-img"} onClick={() => { chooseComponent(projectsComponentsArray, index), setChoosenComponentStage("componentChoosen"), addNewComponent() }} alt="Preview of Component" />
                        )
                      })}
                    </>
                      :
                      typeOfNewSection === "Galery" ? <>
                        <div>Component Galery</div>
                        <div>Component Galery</div>
                        <div>Component Galery</div>
                        <div>Component Galery</div>
                      </>
                        :
                        typeOfNewSection === "GitHub" ? <>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                          <div>Component GitHub</div>
                        </>
                          :
                          typeOfNewSection === "Achievements" ? <>
                            <div>Component Achievements</div>
                            <div>Component Achievements</div>
                            <div>Component Achievements</div>
                          </>
                            :
                            typeOfNewSection === "Videos" ? <>
                              <div>Component Videos</div>
                              <div>Component Videos</div>
                              <div>Component Videos</div>
                            </>
                              :
                              typeOfNewSection === "Musics" ? <>
                                <div>Component Musics</div>
                                <div>Component Musics</div>
                                <div>Component Musics</div>
                              </>
                                :
                                "error on type name"
                  }
                </div>
              </div>
            </div>
          </div>
        </>
          :
          choosenComponentStage === "componentChoosen" ? <>
            {choosenComponent}
          </>
            :
            "error on choosenComponentStage Name"
      }
    </div>
  );
};

export default AddNewComponent;