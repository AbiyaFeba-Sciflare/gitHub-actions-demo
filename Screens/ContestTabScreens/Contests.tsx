import {
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useState} from 'react';
import ContestCard from '../../Component/ContestCard';
import LinearGradient from 'react-native-linear-gradient';
import {NativeScrollEvent} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const {width} = Dimensions.get('window');
const Contests = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const textBanner = [
    {id: 1, description: 'Play Contests With Your Friends'},
    {id: 2, description: 'Play Contests With Your Friends'},
  ];

  const onScrollView = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offSetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offSetX / width);
    setcurrentIndex(index);
  };
  const ContestData = [
    {
      id: '1',
      contestPrize: '25,200',
      EntryFee: '20',
      SpotsLeft: '75',
      TotalSpots: '1400',
    },
    {
      id: '2',
      contestPrize: '7,500',
      EntryFee: '50',
      SpotsLeft: '34',
      TotalSpots: '1000',
    },
    {
      id: '3',
      contestPrize: '6,000',
      EntryFee: '70',
      SpotsLeft: '24',
      TotalSpots: '800',
    },
    {
      id: '4',
      contestPrize: '34,200',
      EntryFee: '20',
      SpotsLeft: '50',
      TotalSpots: '100',
    },
    {
      id: '5',
      contestPrize: '25,200',
      EntryFee: '20',
      SpotsLeft: '75',
      TotalSpots: '1400',
    },
    {
      id: '6',
      contestPrize: '7,500',
      EntryFee: '50',
      SpotsLeft: '34',
      TotalSpots: '1000',
    },
  ];
  const renderItem = () => (
    <View style={styles.generalWrapper}>
      <LinearGradient
        colors={['#ED1C26', '#FAC6C8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientView}>
        <View style={styles.WrapperGradientView}>
          <Image
            source={require('../assets/Coin.png')}
            style={styles.imgWrapper}
          />
          <Text style={styles.coinText}>
            Earn Fantasy Coins when you join this match
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <LinearGradient
          colors={['#ffffff', '#b2b8b4']}
          start={{x: 0, y: 0}} // Start from the left
          end={{x: 1, y: 0}}
          style={styles.gradientContainer}>
          <View style={styles.filterTextContainer}>
            <Text>Sort By:</Text>
            <Text>ENTRY</Text>
            <Text>SPOTS</Text>
            <Text>PRIZE POOL</Text>
            <Text>%WINNERS</Text>
          </View>
          {/* Filter Image with slanted wrapper */}
          <View style={styles.FilterImageWrapper}>
            <View style={styles.ImgContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/Filter.png')}
                  style={styles.filterImgContainer}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>

      <FlatList
        data={textBanner}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollView}
        horizontal={true}
      />
      <View style={styles.indicatorContainer}>
        {textBanner.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex == index
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
      <View style={styles.createContestMainContainer}>
        <View style={styles.contentHeaderText}>
          <Text style={styles.headerTitle}>
            Play Contests With Your Friends
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.createContestContainer}>
            <Image
              source={require('../assets/WinningPercentCup.png')}
              style={styles.btnImgContainer}
            />
            <Text>Create New</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* FlatList with contest data */}
      <FlatList
        data={ContestData}
        keyExtractor={item => item.id} // Ensure you use a unique key for each item
        renderItem={({item}) => (
          <TouchableOpacity>
            <ContestCard
              contestPrize={item.contestPrize}
              EntryFee={item.EntryFee}
              SpotsLeft={item.SpotsLeft}
              TotalSpots={item.TotalSpots}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Contests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filterTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    width: '88%',
    padding: 11,
  },
  filterImgContainer: {
    height: 20,
    width: 20,
    transform: [{skewX: '0deg'}],
  },
  FilterImageWrapper: {
    width: 50,
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{skewX: '-15deg'}],
    overflow: 'hidden',
  },
  ImgContainer: {
    transform: [{skewX: '0deg'}],
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnImgContainer: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  createContestContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 10,
    // alignItems:'flex-end'
  },
  createContestMainContainer: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    padding: 5,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'semibold',
    marginLeft: 5,
  },
  contentHeaderText: {
    alignItems: 'flex-start',
  },
  gradientView: {
    margin: 5,
    borderRadius: 5,
    marginVertical: 20,
    width: '100%',
  },
  WrapperGradientView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  imgWrapper: {
    height: 20,
    width: 20,
  },
  coinText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  generalWrapper: {
    width: width,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
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
