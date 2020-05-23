/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
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
export const createAnimalType = /* GraphQL */ `
  mutation CreateAnimalType(
    $input: CreateAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    createAnimalType(input: $input, condition: $condition) {
      id
      animalType
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateAnimalType = /* GraphQL */ `
  mutation UpdateAnimalType(
    $input: UpdateAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    updateAnimalType(input: $input, condition: $condition) {
      id
      animalType
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnimalType = /* GraphQL */ `
  mutation DeleteAnimalType(
    $input: DeleteAnimalTypeInput!
    $condition: ModelAnimalTypeConditionInput
  ) {
    deleteAnimalType(input: $input, condition: $condition) {
      id
      animalType
      description
      createdAt
      updatedAt
    }
  }
`;
export const createBreed = /* GraphQL */ `
  mutation CreateBreed(
    $input: CreateBreedInput!
    $condition: ModelBreedConditionInput
  ) {
    createBreed(input: $input, condition: $condition) {
      id
      animalType
      breed
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateBreed = /* GraphQL */ `
  mutation UpdateBreed(
    $input: UpdateBreedInput!
    $condition: ModelBreedConditionInput
  ) {
    updateBreed(input: $input, condition: $condition) {
      id
      animalType
      breed
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteBreed = /* GraphQL */ `
  mutation DeleteBreed(
    $input: DeleteBreedInput!
    $condition: ModelBreedConditionInput
  ) {
    deleteBreed(input: $input, condition: $condition) {
      id
      animalType
      breed
      description
      createdAt
      updatedAt
    }
  }
`;
