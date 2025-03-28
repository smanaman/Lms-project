import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    admin: JSON.parse(localStorage.getItem("AdminRegister")) || [],
};

const Studentslice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addadmin: (state, action) => {
            state.admin.push({ ...action.payload, id: nanoid() });
        },

        loout: (state) => {
            localStorage.removeItem("AdminRegister");
            state.admin = [];
        },

        AddStudent: (state, action) => {
            const addstudentdata = JSON.parse(localStorage.getItem("StudentData")) || [];
            const newstudent = { ...action.payload, id: nanoid() };
            addstudentdata.push(newstudent); // ✅ Push correctly to local array
            localStorage.setItem("StudentData", JSON.stringify(addstudentdata)); 

        editstudent: (state, action) => {
            console.log(action.payload);

            const students = JSON.parse(localStorage.getItem("StudentData")) || [];
            const comper = students.find((val) => val.id === action.payload.id);

            if (comper) {
                comper.name = action.payload.name;
                comper.email = action.payload.email;
                comper.gender = action.payload.gender;
                comper.fee = action.payload.fee;
                comper.course = action.payload.course;
            }

            localStorage.setItem("StudentData", JSON.stringify(students)); // ✅ Save updated data
        },
    },
});

export default Studentslice.reducer;
export const { addadmin, loout, AddStudent, editstudent } = Studentslice.actions;
