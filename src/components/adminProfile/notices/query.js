import { gql } from 'apollo-boost'

const query = gql` query Notices($first: Int,$skip: Int,$orderBy: String,$query: String){ notices(first: $first,skip: $skip,orderBy: $orderBy,query: $query){ id title text createdAt }}`

export default query 
