import React from 'react'

const Item = ({ name, value }) => (
  <div className="item flex">
    <div className="item-name">{name}</div>
    <div className="item-value">{value ? value : '- - -'}</div>
  </div>
)
export default Item
