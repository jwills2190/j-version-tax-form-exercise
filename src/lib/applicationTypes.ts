// This file spells out the common Data Entities that represent our business
// logic. Since they are used extensively throughout the app we are collecting
// them into a central location where we can easily access them from anywhere.

export type User = {
  id: string;
  email: string;
  name: string;
}

export type Address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

export type Listing = {
  id: string;
  name: string;
  // added the property extensionRequest to have a better way of tracking the form
  extensionRequest: string;
  physicalAddress: Address;
  mailingAddress: Address | null;

}


export type Submission = {
  id?: string;
  listing: Listing;
  createdAt?: string;
  reason?: string;
  extensionRequest?: string;
  submittedAt?: string;
  // This part makes it a requirement. But I get an error when I remove the '?'
}

// Here is where I tried to find something from SO that I didn't end up implementing.

// via stackoverflow
// type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
// type SubmissionWithReason = WithRequired<Submission, 'reason'>

