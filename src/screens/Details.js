import React, { useCallback, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SECONDARY_COLOR } from "../constants/themes";
import { MainContext } from "../context/main/MainContext";
import { DetailsContext } from "../context/details/DetailsContext";
import AppButton from "../components/custom_ui/AppButton";
import AppTextBold from "../components/custom_ui/AppTextBold";
import AppText from "../components/custom_ui/AppText";

const DetailsScreen = () => {
  const {quoteId, quoteData, changeScreen} = useContext(MainContext);
  const {quote, fetchQuote} = useContext(DetailsContext);

  const loadQuote = useCallback(async () => {
    await fetchQuote(quoteId);
  }, [fetchQuote]);

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <AppTextBold style={styles.text}>Symbol:</AppTextBold>
        <AppText style={styles.text}>{quoteData['symbol']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={styles.text}>Description:</AppTextBold>
        <AppText style={styles.text}>{quoteData['description']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={styles.text}>Digits:</AppTextBold>
        <AppText style={styles.text}>{quoteData['digits']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={styles.text}>Trade:</AppTextBold>
        <AppText style={styles.text}>{quoteData['trade']}</AppText>
      </View>
      {quote.length > 0 && (
        <View style={styles.data}>
          <View style={styles.block}>
            <AppTextBold style={styles.text}>Ask:</AppTextBold>
            <AppText style={styles.text}>{quote[0]['ask']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={styles.text}>Bid:</AppTextBold>
            <AppText style={styles.text}>{quote[0]['bid']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={styles.text}>Change:</AppTextBold>
            <AppText style={styles.text}>{quote[0]['change']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={styles.text}>Change 24h:</AppTextBold>
            <AppText style={styles.text}>{quote[0]['change24h']}</AppText>
          </View>
        </View>
      )}
      <View style={styles.button}>
        <AppButton color={SECONDARY_COLOR} onPress={() => changeScreen({"symbol": null})}>
          <AntDesign name="back" size={40}/>
        </AppButton>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop: 20
  },
  data: {
    width: '100%',
    alignItems: 'center'
  },
  block: {
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    marginTop: 50,
    width: 100
  },
  text: {
    fontSize: 26,
  }
});

export default DetailsScreen;
