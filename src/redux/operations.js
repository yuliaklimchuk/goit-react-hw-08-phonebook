import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => { 
    const response =  await  axios.get('/contacts')
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContacts', async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
}
);
export const deleteContact = createAsyncThunk('contacts/deleteContacts', async (id) => { 
     await axios.delete(`/contacts/${id}`);
    return id;
});

