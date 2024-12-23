import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchHeaderComponent from '../../Component/MatchHeaderComponent';
import ContestCard from '../../Component/ContestCard';
import {useNavigation} from '@react-navigation/native';
import Contests from './Contests';
import MyContest from './MyContest';
import MyTeams from './MyTeams';
import Guide from './Guide';
import CustomContestTabView from '../../Component/CustomContestTabView';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const ContestScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <MatchHeaderComponent />
          <CustomContestTabView />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ContestScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topTabView: {
    width: '100%',
    height: 100,
  },
});
