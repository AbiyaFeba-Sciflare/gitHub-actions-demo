import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useState} from 'react';

const {width} = Dimensions.get('window'); // Get screen width

const bannerData = [
  {id: 1, img1: require('../Screens/assets/BannerListImage.png')},
  {id: 2, img1: require('../Screens/assets/BannerListImage.png')},
  {id: 3, img1: require('../Screens/assets/BannerListImage.png')},
];

const BannerList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScrollOfImage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offSetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offSetX / width);
    setCurrentIndex(index);
  };
  const renderItem = ({item}) => (
    <View style={styles.innerContainer}>
      <Image source={item.img1} style={styles.bannerImgContainer} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Outer container */}
      <View style={styles.wrapperContainer}>
        <FlatList
          data={bannerData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          onScroll={onScrollOfImage}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <Text style={styles.bannerText}> </Text>
      </View>
      <View style={styles.indicatorContainer}>
        {bannerData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
  },
  wrapperContainer: {
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width - 40,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImgContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: 10,
  },
  bannerText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
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
