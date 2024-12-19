import { gql } from "graphql-tag";

// Mutation: Add a new registration
export const REGISTER_USER = gql`
  mutation RegisterUser(
    $emailAddress: String!
    $registrationDate: String!
    $fullName: String!
    $phone: String!
    $company: String!
    $jobTitle: String!
    $experience: String!
  ) {
    registerUser(
      emailAddress: $emailAddress
      registrationDate: $registrationDate
      fullName: $fullName
      phone: $phone
      company: $company
      jobTitle: $jobTitle
      experience: $experience
    ) {
      emailAddress
      registrationDate
      fullName
    }
  }
`;

// Query: Retrieve all registrations
export const GET_REGISTRATIONS = gql`
  query GetRegistrations {
    listRegistrations {
      items {
        emailAddress
        registrationDate
        fullName
        phone
        company
        jobTitle
        experience
      }
    }
  }
`;

// Subscription: Real-time updates for new registrations
export const ON_REGISTER_USER = gql`
  subscription OnRegisterUser {
    onRegisterUser {
      emailAddress
      registrationDate
      fullName
    }
  }
`;
