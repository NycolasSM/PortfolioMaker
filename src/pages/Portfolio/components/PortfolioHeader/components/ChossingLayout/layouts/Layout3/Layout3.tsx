import React from 'react';

import "./Layout3.css"

import EditableTitle from '../../../../../../../../components/TextComponents/EditableTitle/EditableTitle';
import ProfileImg from '../../../../../ProfileImg/ProfileImg';

type Props = {
  previewImg?: string;
}

const Layout3: React.FC<Props> = () => {
  return (
    <section className='portfolio-header_layout3'>
      <div className='portfolio-header-container_layout3'>
        <div className='portfolio-user-apresentation_layout3'>
          <span>Hi There!</span>
          <EditableTitle textAlign='left' deleteComponent={() => { }} isDeletable={false} defaultText='Seu Nome' defaultFontSize={60} />
          <EditableTitle textAlign='left' deleteComponent={() => { }} isDeletable={false} defaultText='Ex: Desenvolvedor FrontEnd' defaultFontSize={28} />
          <span >JavaScript | HTML | CSS | React | TypeScript</span>
          <div className='portfolio-apresentation-buttons_layout3'>
            <button>Baixe Meu CV</button>
            <button>Mais Sobre Mim</button>
          </div>
        </div>
        <ProfileImg />
        <div>
          <div className='portfolio-user-apresentation2_layout3'>
            <EditableTitle textAlign='left' deleteComponent={() => { }} isDeletable={false} defaultText='Sobre mim' defaultFontSize={50} />
            <p contentEditable={true} spellCheck={false} suppressContentEditableWarning ></p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Layout3;