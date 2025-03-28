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
        }
    }

})


export default Studentslice.reducer
export const { addadmin, loout } = Studentslice.actions
