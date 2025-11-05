import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Coffee {
    id: ID!
    name: String!
    origin: Origin!
    roastLevel: RoastLevel!
    processingMethod: ProcessingMethod!
    flavorProfile: FlavorProfile!
    description: String!
  
    imageUrl: String
    featured: Boolean!
    brewingMethods: [BrewingMethod!]!
  }

  type Origin {
    country: String!
    region: String
    farm: String
    altitude: Int
    coordinates: Coordinates
  }

  type Coordinates {
    lat: Float!
    lng: Float!
  }

  type FlavorProfile {
    acidity: Int!
    body: Int!
    sweetness: Int!
    bitterness: Int!
    flavorNotes: [String!]!
    aromaNotes: [String!]!
  }

  type BrewingMethod {
    name: String!
    grindSize: String!
    waterTemp: Int!
    brewTime: String!
    ratio: String!
    instructions: [String!]!
  }

  enum RoastLevel {
    LIGHT
    MEDIUM_LIGHT
    MEDIUM
    MEDIUM_DARK
    DARK
  }

  enum ProcessingMethod {
    WASHED
    NATURAL
    HONEY
    SEMI_WASHED
  }

  input CoffeeFiltersInput {
    roastLevel: [RoastLevel!]
    origin: [String!]
    flavorNotes: [String!]
    priceRange: PriceRangeInput
  }

  input PriceRangeInput {
    min: Float!
    max: Float!
  }

  type Query {
    coffees(filters: CoffeeFiltersInput): [Coffee!]!
    coffee(id: ID!): Coffee
    featuredCoffees: [Coffee!]!
    coffeesByOrigin(country: String!): [Coffee!]!
    coffeesByFlavorProfile(flavorNotes: [String!]!): [Coffee!]!
  }
`;