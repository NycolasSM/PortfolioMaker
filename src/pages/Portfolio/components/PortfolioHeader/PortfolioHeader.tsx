import React, { useState } from 'react';

import './PortfolioHeader.css'

import ChoosingLayout from './components/ChossingLayout/ChoosingLayout';
import AddNewSection from '../AddNewSection/AddNewSection';

const PortfolioHeader: React.FC = () => {

  let [numberOfSections, setNumberOfSections] = useState(1)

  const [isChoosenHeaderLayout, setIsChoosenHeaderLayout] = useState(false)

  const [sectionArray, setSectionArray] = useState<any>([{
    id: 0
  }]);

  const createNewSection = () => {
    setNumberOfSections(numberOfSections + 1)
    const copyPostArray = Object.assign([], sectionArray)
    copyPostArray.push({
      id: numberOfSections
    })
    setSectionArray(copyPostArray)
  }

  const deleteSection = (index: number) => {
    const copyPostArray = Object.assign([], sectionArray);
    copyPostArray.splice(index, 1);
    setSectionArray(
      copyPostArray
    )
  };


  return (
    <>
      <section className='portfolio-header'>
        <ChoosingLayout setIsChoosenHeaderLayout={() => setIsChoosenHeaderLayout(true)}/>
      </section>
      {isChoosenHeaderLayout === true ?
        sectionArray.map((section: any, index: number) => {
          return (
            <AddNewSection addNewSection={() => createNewSection()} key={section.id} id={section.id} deleteSection={deleteSection.bind(this, index)} />
          )
        })
        :
        ""
      }
    </>

  );
};

export default PortfolioHeader;