import { ApolloServer, gql } from "apollo-server";

const personas = [
    { name: "Juan", age: 25, city: "Bogota", id: 1 },
    { name: "Carlos", age: 25, city: "Bogota", id: 2 },
    { name: "Maria", age: 25, city: "Bogota", id: 3, phone: 4300000 },
    { name: "Pedro", age: 30, city: "Medellin", id: 4 },
];

const typeDefs = gql`
    type Persona {
        name: String!
        age: Int!
        city: String!
        cityUpper: String!  # New computed field
        id: Int!
        phone: Int
    }

    type Query {
        allPersonas: [Persona]!
        persona(id: Int!): Persona
        personasCount: Int!
    }

    type Mutation {
        addPersona(name: String!, age: Int!, city: String!, phone: Int): Persona!
    }
`;

const resolvers = {
    Query: {
        allPersonas: () => personas,
        persona: (_, { id }) => personas.find(persona => persona.id === id),
        personasCount: () => personas.length,
    },

    Mutation: {
        addPersona: (_, { name, age, city, phone }) => {
            const newPersona = {
                name,
                age,
                city,
                id: personas.length + 1,
                phone,
            };
            personas.push(newPersona);
            return newPersona;
        },
    },

    // Resolver for the Persona type
    Persona: {
        cityUpper: (parent) => parent.city.toUpperCase()
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
