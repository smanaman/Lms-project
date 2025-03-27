import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    admin:JSON.parse(localStorage.getItem('AdminRegister')) || []

}
const Studentslice=createSlice({
name:'admin',
initialState,
reducers:{
    addadmin:(state,action)=>{
state.admin.push({...action.payload,id:nanoid()})
    }
}

})


export default Studentslice.reducer
export const {addadmin} =Studentslice.actions
