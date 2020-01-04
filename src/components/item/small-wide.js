import React from 'react'
import icon from 'asset-image/hot_coffee.webp'

export default props => (
  <div>
    <div>
      <img src={icon} alt="커피 이미지" />
    </div>
    <div>
      <h3>{props.categoryText}</h3>
    </div>
  </div>
)
