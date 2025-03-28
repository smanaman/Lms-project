import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    admin: JSON.parse(localStorage.getItem('AdminRegister')) || []

}
const Studentslice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        addadmin: (state, action) => {
            state.admin.push({ ...action.payload, id: nanoid() })
        },
        loout: (state, action) => {
            localStorage.removeItem('AdminRegister')
            state.admin = []
        },
        AddStudent: (state, action) => {
            const student=JSON.parse(localStorage.getItem('StudentData')) ||[]
            const newstudent={...action.payload,id:nanoid()}
            student.push(newstudent)
            localStorage.setItem('StudentData',JSON.stringify(student))
            },
            editstudent:(state,action)=>{
                const localstorageAlldata=JSON.parse('                                              ')
            }
    }

})


export default Studentslice.reducer
export const { addadmin, loout ,AddStudent } = Studentslice.actions
