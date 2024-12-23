import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const WinnersScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenBottomSheet}>
        <Text style={styles.btnContainer}>Open Bottom Sheets</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['25%', '40%', '75%']}
        enablePanDownToClose={true}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={{marginTop: 20}}>Bottom Sheet is Opened</Text>
          <TouchableOpacity onPress={handleCloseBottomSheet}>
            <Text style={styles.closeContainer}>CLOSE</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default WinnersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: 'darkgray',
    padding: 15,
    borderRadius: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    // justifyContent:'center',
    // alignItems:'center',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  closeContainer: {
    backgroundColor: 'gray',
    color: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});
