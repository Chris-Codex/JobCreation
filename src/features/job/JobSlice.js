import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    positions: "",
    compans: "",
    locations: "",
    statusOption: ["Approved", "Pending", "Decline"],
    statuss: "",
    JobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    types: "",
    descriptions: ""
}

const jobSlice = createSlice({
    name: "job",
    INITIAL_STATE,
})

export default jobSlice.reducer;

console.log("JOBSLICE",jobSlice)
