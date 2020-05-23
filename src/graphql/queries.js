/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      name
      animal
      age
      gender
      breed
      createdAt
      updatedAt
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        animal
        age
        gender
        breed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnimalType = /* GraphQL */ `
  query GetAnimalType($id: ID!) {
    getAnimalType(id: $id) {
      id
      animalType
      description
      createdAt
      updatedAt
    }
  }
`;
export const listAnimalTypes = /* GraphQL */ `
  query ListAnimalTypes(
    $filter: ModelAnimalTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        animalType
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBreed = /* GraphQL */ `
  query GetBreed($id: ID!) {
    getBreed(id: $id) {
      id
      animalType
      breed
      description
      createdAt
      updatedAt
    }
  }
`;
export const listBreeds = /* GraphQL */ `
  query ListBreeds(
    $filter: ModelBreedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBreeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        animalType
        breed
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
