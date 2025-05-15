import { createSlice } from '@reduxjs/toolkit';

const initialState={
    firstName: "Blessing",
    lastName: 'Baloyi',
    userId: 1,
    profileImage: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        updateFirstName: (state, action) => {
            state.firstName = action.payload.firstName;
        },
        resetToInitialState: () => {
            return initialState;
        }
    },
});

export const {updateFirstName, resetToInitialState} = User.actions;
export default User.reducer;

//Slice - self-contained piece of state and logic for managing state. 
//Slice if a part of the overall state of your application that you want to manage in a modular way.
//e.g User slice keeping information about user id or any other user info 


/*Combining Reducers - Reducer is a function that updates the state of application in response to an action.
As your app grows, you may find yourself with many different reducers, each managing its own part of the state: 
- User Reducers 
- Single Donation Reducers
- All Donation Reducers*/