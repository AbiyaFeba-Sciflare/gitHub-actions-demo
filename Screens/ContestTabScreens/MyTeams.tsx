import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import TeamCreation from '../TeamCreationModule/TeamCreation';
import CreateTeamCard from '../../Component/CreateTeamCard';

const MyTeams = () => {
  const teamListData = [
    {id: '1', teamNum: 'T1', teamAName: 'REA', teamBName: 'COB'},
    {id: '2', teamNum: 'T2', teamAName: 'REA', teamBName: 'COB'},
    {id: '3', teamNum: 'T3', teamAName: 'REA', teamBName: 'COB'},
    {id: '4', teamNum: 'T4', teamAName: 'REA', teamBName: 'COB'},
  ];
  const navigateTeamCreation = () => {
    navigation.navigate('TeamCreation');
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={teamListData}
        renderItem={({item}) => (
          <TouchableOpacity>
            <CreateTeamCard />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={navigateTeamCreation}>
        <View style={styles.btnBgContainer}>
          <Text style={styles.createTeamText}>CREATE TEAM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyTeams;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  emptyImgContainer: {
    width: 160,
    height: 280,
  },
  btnBgContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    marginVertical: 15,
  },
  createTeamText: {
    color: 'white',
    padding: 10,
    fontWeight: 'semibold',
    fontSize: 15,
  },
  emptyTeamText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'semibold',
    margin: 30,
  },
});
