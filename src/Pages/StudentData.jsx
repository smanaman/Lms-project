import React, { useState } from 'react'

const StudentData = () => {

  const [input,setInput]=useState({
    name
  })
  return (
    <div>
     <form>
      <input type="text" name=""  placeholder='enter student name'/>
      <br />
      <input type='email' name=""  placeholder='enter student email' />
      <br />
      <h2>male :-</h2>

      <input type="radio" name="xender" value='male'/>
      female
      <input type="radio" name='xender' value='female' />
      <br />
     
     pay 
      <input type="radio" name="fee" value='payed' />
     unpay 
      <input type="radio" name="fee" value='unpay' />

<br />
<select name="" >
  <option value="development">development</option>
  <option value="graphics">graphics</option>
  <option value="ui-ux">ui-ux</option>

</select>
<br />

<button>Add</button>

     </form>
    </div>
  )
}

export default StudentData
