const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID!
    email: String!
    password: String
}

input UserInput{
    email: String!
    password: String!
}
type RootQuery {
    users : [User!]!
}

type RootMutation {
    CreateUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);