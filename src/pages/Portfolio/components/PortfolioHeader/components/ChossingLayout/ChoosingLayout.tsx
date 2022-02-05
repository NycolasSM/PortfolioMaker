import React, { Component, useState } from 'react';

import './ChoosingLayout.css'

import Layout1 from './layouts/Layout1/Layout1';
import Layout2 from './layouts/Layout2/Layout2';

import { FaExchangeAlt } from 'react-icons/fa'

import HeaderLayout1 from '../../../../../../assets/HeadeLayout1.png'
import HeaderLayout2 from '../../../../../../assets/HeadeLayout2.png'

type Props = {
  setIsChoosenHeaderLayout: () => void;
}


const ChoosingLayout: React.FC<Props> = ({
  setIsChoosenHeaderLayout
}) => {

  const [chosenLayout, setChosenLayoult] = useState("choosing")

  const [headersLayoutArray, setHeadersLayoutArray] = useState([
    <Layout1 previewImg={HeaderLayout1} />,
    <Layout2 previewImg={HeaderLayout2} />
  ])

  const [choosenComponent, setChoosenComponent] = useState()

  function chooseComponent(array: any, index: number) {
    setChoosenComponent(array[index])
  }


  return (
    <div className='main-wrapper'>
      {chosenLayout === "choosing" ? <>
        <h3 className='portfolio-chosing-label'>Choose Header Layout</h3>
        <div className='portfolio-choosing'>
          {headersLayoutArray.map((section, index) => {
            return (
              <img key={index} src={section.props.previewImg} className={"preview-section-img"} onClick={() => { chooseComponent(headersLayoutArray, index), setChosenLayoult("layoutChoose"), setIsChoosenHeaderLayout() }} alt="Preview of Component" />
            )
          })}
        </div>
      </>
        :
        chosenLayout === "layoutChoose" ? <>
          <FaExchangeAlt className='portfolio-header-change-layout-button' onClick={() => setChosenLayoult("choosing")} size={30} />
          <label className='portfolio-header-change-layout-button-label' htmlFor="changeHeaderButton">Change Header</label>
          {choosenComponent}
        </>
          :
          ""
      }
    </div >
  );
};

export default ChoosingLayout;