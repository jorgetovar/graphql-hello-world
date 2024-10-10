# Personas GraphQL API

This project is a simple GraphQL API built with Apollo Server and Node.js. It provides a set of queries and mutations for managing a list of personas, allowing you to retrieve information about personas, add new personas, and view details such as name, age, city, and an optional phone number.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Queries](#queries)
  - [Mutations](#mutations)
- [API Reference](#api-reference)
  - [Types](#types)
  - [Query Examples](#query-examples)
  - [Mutation Examples](#mutation-examples)
- [License](#license)

## Overview

The API includes:
- **Queries** for fetching a list of all personas, retrieving a specific persona by ID, and getting the total count of personas.
- **Mutations** for adding new personas to the list.
- **Computed Fields** such as `cityUpper`, which converts the city name to uppercase for each persona.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jorgetovar/graphql-hello-world
   cd graphql-hello-world
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

The server will start, and you’ll see the URL where it’s hosted, typically `http://localhost:4000/`.

## Usage

You can access the API at the server's URL in a browser or through a GraphQL client like [Apollo Studio Explorer](https://studio.apollographql.com/), [GraphiQL](https://github.com/graphql/graphiql), or [Postman](https://www.postman.com/).

### Queries

#### `allPersonas`: Fetch all personas
```graphql
query {
  allPersonas {
    id
    name
    age
    city
    cityUpper
    phone
  }
}
```

#### `persona`: Fetch a specific persona by ID
```graphql
query {
  persona(id: 1) {
    name
    age
    city
    phone
  }
}
```

#### `personasCount`: Get the total number of personas
```graphql
query {
  personasCount
}
```

### Mutations

#### `addPersona`: Add a new persona to the list
```graphql
mutation {
  addPersona(name: "Ana", age: 22, city: "Cali", phone: 3200000) {
    id
    name
    age
    city
    phone
  }
}
```

## API Reference

### Types

- **Persona**
  - `name`: String! – The name of the persona.
  - `age`: Int! – The age of the persona.
  - `city`: String! – The city where the persona resides.
  - `cityUpper`: String! – The city name in uppercase (computed field).
  - `id`: Int! – A unique identifier for the persona.
  - `phone`: Int – The phone number of the persona (optional).

### Query Examples

To get all personas and their details:
```graphql
query {
  allPersonas {
    name
    cityUpper
  }
}
```

To get the persona count:
```graphql
query {
  personasCount
}
```

### Mutation Examples

To add a new persona:
```graphql
mutation {
  addPersona(name: "Ana", age: 22, city: "Cali", phone: 3200000) {
    id
    name
    age
    city
  }
}
```
