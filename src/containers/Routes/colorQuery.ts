import { gql } from '@apollo/client';

const colorQuery = gql`
  query colors($resultOffset: Int) {
    colors(numResults: 14, resultOffset: $resultOffset) {
      hex
    }
  }
`;

export default colorQuery;
