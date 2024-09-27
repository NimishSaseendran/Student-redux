import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchStudentThunk = createAsyncThunk('students/fetchStudentThunk', async () => {
    const response = await axios.get('https://freetestapi.com/api/v1/students?limit=7');
    console.log(response.data);
    localStorage.setItem('students', JSON.stringify(response.data));
    return response.data;
});

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        loading: false,
        error: '',
        searchQuery: '',
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
            toast.success('Student added successfully ..')
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
            toast.success('Student data edited ..')
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
            toast.success('Deleted successfully ..')

        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudentThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchStudentThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.students = action.payload;
        });
        builder.addCase(fetchStudentThunk.rejected, (state) => {
            state.loading = false;
            state.students = [];
            state.error = 'API Connection Failed !!!';
        });
    },
});

export const { addStudent, updateStudent, deleteStudent, setSearchQuery } = studentSlice.actions;
export default studentSlice.reducer;
