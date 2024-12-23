import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PlayerCategoryTabView from '../../Component/PlayerCategoryTabView';
import {useNavigation} from '@react-navigation/native';

const TeamCreation = () => {
  const navigation = useNavigation();
  const navigateToPreview = () => {
    navigation.navigate('Preview');
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      //MAIN CONTAINER
      <View style={styles.container}>
        // HEADER CONTAINER
        <View style={styles.headerContainer}>
          <View style={styles.mainHeaderContainer}>
            <View style={styles.wrapperContainer}>
              <TouchableOpacity onPress={() => navigation.goBack() }>
                <Image
                  source={require('../assets/backArrow.png')}
                  style={styles.imgWrapper}
                />
              </TouchableOpacity>
              <View style={styles.teamContainer}>
                <Text style={styles.teamText}>Create Team</Text>
                <Text style={styles.timerText}>17m 40s Left</Text>
              </View>
            </View>
            <View style={styles.MoreInfoContainer}>
              <Image
                source={require('../assets/MoreInfo.png')}
                style={styles.InfoImgWrapper}
              />
            </View>
          </View>
          // SECOND CONTAINER
          <View style={styles.secondContainer}>
            <Text style={styles.secondContTitle}>
              Maximum of 10 Players from one Team
            </Text>
          </View>
          //MATCH COMPARISION CONTAINER
          <View style={styles.matchComparisionContainer}>
            <View style={styles.startContainer}>
              <View style={styles.firstSContainer}>
                <Text style={styles.firstContText1}>Players</Text>
                <Text style={styles.firstContText2}>2\11</Text>
              </View>
              <View style={styles.secondSContainer}>
                <Image
                  source={require('../assets/Team1.png')}
                  style={styles.secondImgWrapper}
                />
                <View style={styles.secondSWrapperContainer}>
                  <Text style={styles.firstContText1}>REA</Text>
                  <Text style={styles.firstContText2}>5</Text>
                </View>
              </View>
            </View>
            <View style={styles.endContainer}>
              <View style={styles.secondSContainer}>
                <View style={styles.secondSWrapperContainer}>
                  <Text style={styles.firstContText1}>UCB</Text>
                  <Text style={styles.firstContText2}>6</Text>
                </View>
                <Image
                  source={require('../assets/Team2.png')}
                  style={styles.secondImgWrapper}
                />
              </View>
              <View style={styles.ThirdSContainer}>
                <Text style={styles.firstContText1}>Credit Left</Text>
                <Text style={styles.firstContText2}>100</Text>
              </View>
            </View>
          </View>
          // SELECTION VIEW
          <View style={styles.selectionView}>
            <View style={styles.selectionViewWrapper}>
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
              <Image
                source={require('../assets/unSelectedView.png')}
                style={styles.selectedViewWrapper}
              />
            </View>
            <View style={styles.teamManagerWrapper}>
              <Image
                source={require('../assets/teamManage.png')}
                style={styles.teamManageWraper}
              />
            </View>
          </View>
        </View>
        // ----
        <PlayerCategoryTabView />
        // OVERLAYED BUTTON CONTAINER
        <View style={styles.OverlayContainer}>
          <View style={styles.Button1View}>
            <TouchableOpacity
              onPress={navigateToPreview}
              style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/previewLogo.png')}
                style={{height: 16, width: 25}}
              />
              <Text style={styles.previewText}>PREVIEW</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
              {' '}
              /{' '}
            </Text>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/previewLogo.png')}
                style={{height: 16, width: 25}}
              />
              <Text style={styles.previewText}>LINEUP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={styles.Button2View}>
              <Text style={{color: 'white', paddingLeft: 15, paddingRight: 15}}>
                NEXT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TeamCreation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    position: 'relative',
  },
  headerContainer: {
    backgroundColor: 'black',
  },
  imgWrapper: {
    height: 20,
    width: 30,
    margin: 10,
    paddingLeft: 10,
  },
  mainHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreInfoImgWrapper: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
  wrapperContainer: {
    flexDirection: 'row',
  },
  teamContainer: {
    margin: 5,
  },
  teamText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerText: {
    color: 'white',
    fontSize: 13,
    marginTop: 3,
  },
  InfoImgWrapper: {
    height: 25,
    width: 25,
  },
  MoreInfoContainer: {
    marginRight: 10,
    alignItems:'center',
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:20,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContTitle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 600,
    marginVertical: 15,
  },
  matchComparisionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginBottom: 10,
  },
  firstSContainer: {
    flexDirection: 'column',
  },
  secondSContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondSWrapperContainer: {
    color: 'gray',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ThirdSContainer: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  firstContText1: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  firstContText2: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  secondImgWrapper: {
    width: 45,
    height: 45,
  },
  startContainer: {
    flexDirection: 'row',
  },
  endContainer: {
    flexDirection: 'row',
  },
  selectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 15,
  },
  selectedViewWrapper: {
    height: 23,
    width: 28,
  },
  teamManageWraper: {
    height: 20,
    width: 20,
  },
  selectionViewWrapper: {
    flexDirection: 'row',
    // width:
    marginLeft: 20,
  },
  teamManagerWrapper: {
    marginRight: 20,
  },
  guideContainer: {
    flexDirection: 'row',
    height: 40,
  },
  gradientContainer: {
    height: 40,
    width: 110,
  },
  forwardIconWrapper: {
    height: 20,
    width: 20,
  },
  overLayContainer: {
    position: 'absolute', // This will overlay over the container
    bottom: 60, // Adjust based on how far you want the button to be from the bottom
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    zIndex: 1,
  },
  guideText: {
    color: 'white',
    fontWeight: 'bold',
  },
  overlayView: {
    backgroundColor: 'pink',
  },
  secondView: {
    flex: 1,
    position: 'absolute',
    height: 100,
    backgroundColor: 'pink',
  },
  OverlayContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 50,
  },
  Button1View: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    marginLeft: 10,
  },
  Button2View: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
  previewText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
});
