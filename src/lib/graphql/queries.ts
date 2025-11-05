import { gql } from '@apollo/client';

export const GET_COFFEES = gql`
  query GetCoffees($filters: CoffeeFiltersInput) {
    coffees(filters: $filters) {
      id
      name
      origin {
        country
        region
        farm
        altitude
      }
      roastLevel
      processingMethod
      flavorProfile {
        acidity
        body
        sweetness
        bitterness
        flavorNotes
        aromaNotes
      }
      description
      price
      imageUrl
      featured
    }
  }
`;

export const GET_COFFEE = gql`
  query GetCoffee($id: ID!) {
    coffee(id: $id) {
      id
      name
      origin {
        country
        region
        farm
        altitude
        coordinates {
          lat
          lng
        }
      }
      roastLevel
      processingMethod
      flavorProfile {
        acidity
        body
        sweetness
        bitterness
        flavorNotes
        aromaNotes
      }
      description
      price
      imageUrl
      featured
      brewingMethods {
        name
        grindSize
        waterTemp
        brewTime
        ratio
        instructions
      }
    }
  }
`;

export const GET_FEATURED_COFFEES = gql`
  query GetFeaturedCoffees {
    featuredCoffees {
      id
      name
      origin {
        country
        region
      }
      roastLevel
      flavorProfile {
        flavorNotes
      }
      price
      imageUrl
    }
  }
`;

export const GET_COFFEES_BY_ORIGIN = gql`
  query GetCoffeesByOrigin($country: String!) {
    coffeesByOrigin(country: $country) {
      id
      name
      origin {
        country
        region
        farm
      }
      roastLevel
      flavorProfile {
        flavorNotes
      }
      price
      imageUrl
    }
  }
`;

export const GET_COFFEES_BY_FLAVOR = gql`
  query GetCoffeesByFlavorProfile($flavorNotes: [String!]!) {
    coffeesByFlavorProfile(flavorNotes: $flavorNotes) {
      id
      name
      origin {
        country
        region
      }
      roastLevel
      flavorProfile {
        flavorNotes
        aromaNotes
      }
      price
      imageUrl
    }
  }
`;