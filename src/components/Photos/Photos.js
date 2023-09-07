import React from 'react'
import './Photos.css'


const Photos = (props) => {
  const {imageDetails,isActive,setActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  
  const thumbnailClassName = isActive ? `photo active`:`photo`

  const onClickPhoto = () => {
      setActiveId(id)
  }
  return (
     <li className='photo-list'>
      <button
       type='button'
       className='photo-button'
       onClick={onClickPhoto}
      >
        <img src={thumbnailUrl} 
        alt={thumbnailAltText}
        className={thumbnailClassName}
        />
      </button>
     </li>
  )
}

export default Photos