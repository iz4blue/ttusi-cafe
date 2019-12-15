import React from "react"
import icon from "../../../static/hot_coffee.webp"

export default props => (
    <div>
      <div>
        <img src={icon} />
      </div>
      <div>
        <h3>{props.categoryText}</h3>
      </div>
    </div>
)
