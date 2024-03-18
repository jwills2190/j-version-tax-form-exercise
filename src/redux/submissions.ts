import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { Submission } from "../lib/applicationTypes";

export type SubmissionsSlice = {
  submissions: Submission[];
}

const initialState: SubmissionsSlice = {
  submissions: [{
    id: "b2b3d354-91f1-45a7-a7bf-41dd6544f81a",
    createdAt: new Date("August 19, 2023 23:15:30 GMT+00:00").toString(),
    reason: "Protomolecule experiment escaped lab, went ham on Ganymede, and destroyed our accounting dept.",
    listing: {
      id: "listing-5",
      name: "PROTOGEN",
      physicalAddress: {
        address1: "2143 Luna Ci.",
        address2: "",
        city: "Charlotte",
        state: "NC",
        zip: "13254",

      },
      mailingAddress: null,
      // added the property extensionRequest to have a better way of tracking the form
      extensionRequest: ""
    },
  }],
};

const submissionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<Submission>) => {
      state.submissions.push(action.payload);
    },
  },
});

// createSlice(): This function is used to create a slice of Redux state along with its corresponding action creators and reducers. It's typically provided by the @reduxjs/toolkit package.
// name: "submissions": This sets the name of the slice to "submissions". This name is used to generate action types and selectors associated with this slice.
// initialState: This is presumably a variable holding the initial state of the submissions slice. It's not explicitly shown in the provided code snippet, but it's assumed to be defined elsewhere in the code.
// reducers: This is an object containing reducer functions. Each key represents the name of an action, and each value is a reducer function that handles the corresponding action.
// addSubmission: This is a reducer function that handles the "addSubmission" action. It takes two parameters:
// state: This represents the current state of the submissions slice.
// action: This represents the action dispatched to add a submission. It contains a payload, which is presumably a new submission to be added.
// (state, action) => { ... }: This is an arrow function representing the reducer. It takes the current state (state) and the dispatched action (action) as parameters.
// state.submissions.push(action.payload): Inside the addSubmission reducer, this line adds the payload of the action (presumably a new submission object) to the submissions array in the Redux state. It modifies the state in place by pushing the new submission onto the existing array.

export const {
  addSubmission,
} = submissionsSlice.actions;

// Selectors

export const selectSubmissions = ({ submissions }: RootState) =>
  submissions.submissions;

export default submissionsSlice;
