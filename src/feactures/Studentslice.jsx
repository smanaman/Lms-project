import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    admin: JSON.parse(localStorage.getItem("AdminRegister")) || [],
    students : JSON.parse(localStorage.getItem("StudentData")) || []

};

const Studentslice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addadmin: (state, action) => {
            state.admin.push({ ...action.payload, id: nanoid() });
        },
        loout: (state, action) => {
            localStorage.removeItem('AdminRegister')
            state.admin = []
        },
       

        loout: (state) => {
            localStorage.removeItem("AdminRegister");
            state.admin = [];
        },

        AddStudent: (state, action) => {
            const newStudent = { ...action.payload, id: nanoid() };
            state.students.push(newStudent);  
            localStorage.setItem("StudentData", JSON.stringify(state.students));
        },
        editstudent: (state, action) => {
            console.log(action.payload);

            // const students = JSON.parse(localStorage.getItem("StudentData")) || [];
            const comper = state.students.find((val) => val.id === action.payload.id);

            if (comper) {
                comper.name = action.payload.name;
                comper.img = action.payload.img;
                comper.email = action.payload.email;
                comper.gender = action.payload.gender;
                comper.fee = action.payload.fee;
                comper.course = action.payload.course;
            }

            localStorage.setItem("StudentData", JSON.stringify(state.students)); 
        },
        DeleteData: (state, action) => {
            state.students = state.students.filter((val) => val.id !== action.payload);
            localStorage.setItem("StudentData", JSON.stringify(state.students));
            
        }

    },
});

export default Studentslice.reducer;
export const { addadmin, loout, AddStudent, editstudent,DeleteData } = Studentslice.actions;
