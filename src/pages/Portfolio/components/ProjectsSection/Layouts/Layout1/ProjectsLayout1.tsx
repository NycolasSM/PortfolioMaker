import React from 'react';

import "./ProjectsLayout1.css"

import PreviewProjectImg from '../../../../../../assets/PreviewProjectLayout1_525x520.png'

type Props = {
  choseLayout: () => void
}

const ProjectsLayout1: React.FC<Props> = ({ choseLayout, }) => {

  return (
    <div className='main-wrapper'>
      <section className='projects-section-layout1'>
        <img src={PreviewProjectImg} alt="" />
      </section>
    </div>
  );
};

export default ProjectsLayout1;