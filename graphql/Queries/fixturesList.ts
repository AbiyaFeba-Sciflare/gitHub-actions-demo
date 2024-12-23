import { gql } from '@apollo/client';

export const GET_FIXTURES_LIST = gql`
  query FixturesList($fixtureStatus: Float!, $gameType: String!, $page: Float!) {
    fixturesList(fixtureStatus: $fixtureStatus, gameType: $gameType, page: $page) {
      status
      error {
        message
        location
      }
      success {
        message
        location
      }
      data {
        totalPage
        currentPage
        list {
          _id
          fixtureName
          fixtureAPIId
          fixtureDisplayName
          fixtureStartDate
          fixtureStatus
          fixtureStatusType
          fixtureVenue
          fixtureType
          seriesName
          seriesShortName
          seriesAPIId
          lineupsOut
          enabledStatus
          isactive
          joinedUsers
          notificationEnabled
          seriesNotificationEnabled
          contestCount
          teamsCount
          maxPrize
          gameType
          contestPrice {
            name
            caption
            amount
          }
          userTeamsContest {
            user {
              teams
              contest
            }
          }
          fixtureTeams {
            teamB {
              teamAPIId
              name
              shortName
              logo
            }
            teamA {
              teamAPIId
              name
              shortName
              logo
            }
          }
        }
      }
    }
  }
`;
