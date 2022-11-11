import React from 'react'

function Inputbox(props) {
    const setData = (e) => {
        props.setMarkupData(e.target.value);
    }
  return (
    <div>
        <textarea name="w3review" rows="50" cols="70" onChange={setData}> </textarea>
    </div>
  )
}

export default Inputbox;