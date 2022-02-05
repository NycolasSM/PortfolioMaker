import React, { useState } from 'react';

import './ProfileImg.css'

import ProfileImgExample from '../../../../assets/ProfileExample.png'

type Props = {
  size?: number,
  margin?: number,
  xAxis?: number,
  yAxis?: number
}

const ProfileImg: React.FC<Props> = ({ margin = 0, size = 300, xAxis = 0, yAxis = 0 }) => {

  const [imageSize, setImageSize] = useState(size)
  const [imageXAxis, setImageXAxis] = useState(xAxis)
  const [imageYAxis, setImageYAxis] = useState(yAxis)

  const changeImageWidth = (event: any) => {
    setImageSize(event.target.value)
  }

  const changeImageXAxis = (event: any) => {
    setImageXAxis(event.target.value)
  }

  const changeImageYAxis = (event: any) => {
    setImageYAxis(event.target.value)
  }

  return (
    <div className='profile-image-container'>
      <img src={ProfileImgExample} className='profile-image' draggable={false} style={{ height: `${imageSize}px`, margin: `${margin}px`, transform: `translate(${imageXAxis}px, ${imageYAxis}px)`, }} alt="Profile Image" tabIndex={0} />
      <div className="edit-tools-profile-image" id="editTool" tabIndex={-1}>
        <input type="file" name="uploadProfileImage" id="uploadProfileImage" title=" " style={{ color: "transparent", width: "110px" }} />
        <label htmlFor="font-size">Size Image</label>
        <input type="range" name="imageSize" id="imageSize" onChange={(event) => changeImageWidth(event)} defaultValue={imageSize} max={300} min={200} step={1} />
        <label htmlFor="font-size">X-Axis</label>
        <input type="range" name="imageSize" id="imageSize" onChange={(event) => changeImageXAxis(event)} defaultValue={imageXAxis} max={100} min={-100} step={1} />
        <label htmlFor="font-size">Y-Axis</label>
        <input type="range" name="imageSize" id="imageSize" onChange={(event) => changeImageYAxis(event)} defaultValue={imageYAxis} max={50} min={-50} step={1} />
      </div>
    </div>
  );
};

export default ProfileImg;