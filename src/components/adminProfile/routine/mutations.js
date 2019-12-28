import { gql } from 'apollo-boost'

export const deleteClass = gql`
  mutation DeleteClass($id: ID!){
    deleteClass(id: $id){ id }
  }
`

export const createClass = gql`
  mutation CreateClass($day: ID!,$period: ID!,$mentor: ID!,$subject: ID!,$semester: ID!,$department: ID!){
    createClass(data:{
      day: $day,
      period: $period,
      mentor: $mentor,
      subject: $subject,
      semester: $semester,
      department: $department
    }){
      id
    }
  }
`

export const createDayInWeek = gql`
  mutation CreateDayInWeek($dayValue: Int!,$day: String!,$routine: ID!){
    createDayInWeek(data:{
      dayValue: $dayValue,
      day: $day,
      routine: $routine
    }){
      id
      day
      dayValue
      routine{ id title }
    }
  }
`

export const createPeriod = gql`
  mutation CreatePeriod($time: Int!,$startedAt: String!,$endAt: String!){
    createPeriod(data:{
      time: $time,
      startedAt: $startedAt,
      endAt: $endAt
    }){ id time startedAt endAt }
  }
`
