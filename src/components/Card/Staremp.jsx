import React from 'react'

const Staremp = (props) => {
  const fenil = props.rating;
  const empty = 5 - fenil;
  return (
    <div>
      {/* data map the rating */}
      {/* iterate item for rating time */}
      {[...Array(fenil)].map((item, index) => (
        <i className="fa-solid fa-star" key={index}></i>
      ))}
      {/* iterate item for empty time */}
      {[...Array(empty)].map((item, index) => (
        <i className="fa-regular fa-star" key={index}></i>
      ))}

    </div>
  )
}

export default Staremp