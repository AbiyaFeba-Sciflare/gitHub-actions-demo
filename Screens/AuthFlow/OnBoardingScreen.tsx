import {
  SafeAreaView,Dimensions,FlatList,Image,StyleSheet,Text,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import FooterComponent from '../../Component/FooterComponent';
import OnBoardingCard from '../../Component/OnBoardingCard';

const screenWidth = Dimensions.get('window').width;
const onBoardData = [
  {
    id: '1',
    source: require('../assets/ObImg1.png'),
    Title: 'Welcome To Fantasy Sports Pro',
    subTitle:
      'Ready to start winning? Swipe left to learn the basics of fantasy Sports ',
  },
  {
    id: '2',
    source: require('../assets/ObImg2.png'),
    Title: 'Select A Match',
    subTitle: 'Choose an upcoming match that you want to play',
  },
  {
    id: '3',
    source: require('../assets/ObImg3.png'),
    Title: 'Join Contests',
    subTitle:
      'Compete with other Fantasy Sports Pro players and earn fantasy points',
  },
  {
    id: '4',
    source: require('../assets/ObImg4.png'),
    Title: 'Create Teams',
    subTitle: 'Use your skills pick the right players and earn fantasy points ',
  },
];

const OnBoardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const onScrollOfFlatList = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offSetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offSetX / screenWidth);
    setCurrentPage(index);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/FspLogo.png')}
            style={styles.logoWrapper}
          />
          <Text style={styles.headerText}>Fantasy Sports {'\n'}Pro</Text>
        </View>
        <FlatList
          data={onBoardData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <OnBoardingCard
                onBoardingImage={item.source}
                onBoardingText={item.Title}
                onBoardingSubText={item.subTitle}
              />
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={onScrollOfFlatList}
        />
        <View style={styles.indicatorContainer}>
          {onBoardData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentPage === index
                  ? styles.activeIndicator
                  : styles.inactiveIndicator,
              ]}
            />
          ))}
        </View>
        <View style={styles.footComponenetContainer}>
          <FooterComponent navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
    paddingVertical:20,
  },
  container: {
    flex: 1,
  },
  firstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    width: '100%',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingHorizontal: 20, // Add padding to avoid images being too close to the edges
  },
  thirdContainer: {
    width: '100%',
    // marginVertical:10,
    // backgroundColor:'pink',
  },
  secondContainer: {
    // backgroundColor:'brown',
    // marginVertical:30,
  },
  btn1Wrapper: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
  btn2Wrapper: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  firstText: {
    fontSize: 16,
    fontWeight: '300',
    padding: 10,
  },
  secondText: {
    fontSize: 16,
    fontWeight: '300',
    padding: 10,
  },
  firstHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  secondHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoWrapper: {
    height: 70,
    width: 90,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  onboardingImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pageIndicator: {
    width: 8,
    height: 8,
    margin: 5,
    borderRadius: 4,
  },
  activePageIndicator: {
    backgroundColor: '#ff6f61',
  },
  footer: {
    // backgroundColor:'blue',
  },
  footComponenetContainer: {
    // backgroundColor:'black',
    paddingBottom: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    // position:'absolute',
    alignSelf: 'center',
    margin: 10,
    bottom: 30,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#000000',
  },
  inactiveIndicator: {
    backgroundColor: 'gray',
  },
});
