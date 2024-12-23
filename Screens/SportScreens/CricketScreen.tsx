// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import BannerList from '../../Component/BannerList';
// import UpcomingMatchesCard from '../../Component/UpcomingMatchesCard';

// const CricketScreen = () => {
//   const upcomingMatches = [
//     {id: '1',league: 'ECS Hungry T10',time: '1 hr 56 mins',matchTime: '6.45 pm'},
//     {id: '2', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
//     {id: '3', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
//     {id: '4', league: 'ECS Hungry T10',  time: '1 hr 56 mins', matchTime: '6.45 pm'},
//     {id: '5', league: 'IPL 2024', time: '2 hr 10 mins', matchTime: '7.30 pm'},
//     {id: '6', league: 'CPL 2024', time: '3 hr 15 mins', matchTime: '8.00 pm'},
//   ];
//   return (
//     <View style={styles.container}>
//       <BannerList />
//       <Text style={styles.subTitleText}>Upcoming Matches</Text>
//       {/* <Counter/> */}
//       <FlatList
//         data={upcomingMatches}
//         renderItem={({item}) => (
//           <UpcomingMatchesCard
//             league={item.league}
//             time={item.time}
//             matchTime={item.matchTime}
//           />
//         )}
//       />
//     </View>
//   );
// };

// export default CricketScreen;
// const styles = StyleSheet.create({
//   subTitleText: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     margin: 10,
//   },
//   container: {
//     backgroundColor: 'lightgray',
//     flex: 1,
//   },
// });



import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BannerList from '../../Component/BannerList';
import UpcomingMatchesCard from '../../Component/UpcomingMatchesCard';
// import { GET_FIXTURES_LIST } from '../../graphql/Queries/fixturesList';
import { useQuery } from '@apollo/client';
import { GET_FIXTURES_LIST } from '../../graphql/Queries/fixturesList';
const CricketScreen = () => {

  const { loading, error, data } = useQuery(GET_FIXTURES_LIST, {
    variables: { page: 1.0, fixtureStatus: 1.0, gameType: 'cricket' },
  });
  

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error('GraphQL error:', error);
    return <Text>Error: {error.message}</Text>;
  }

  if (data?.fixturesList?.error) {
    return <Text>Error: {data.fixturesList.error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <BannerList />
      <Text style={styles.subTitleText}>Upcoming Matches</Text>
      <FlatList
        data={data?.fixturesList?.data?.list || []}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <UpcomingMatchesCard
            league={item.fixtureName} 
            time={item.fixtureStartDate} 
            matchTime={item.fixtureStatusType} 
            teamAName={item.teamAName}
            teamBName={item.teamBName}
            teamALogo={item.teamALogo}
            teamBLogo={item.teamBLogo}
            prize={item.maxPrize}
          />
        )}
      />
    </View>
  );
};

export default CricketScreen;

const styles = StyleSheet.create({
  subTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
});
