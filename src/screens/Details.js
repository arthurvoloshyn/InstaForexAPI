import React, { useCallback, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainContext } from "../context/main/MainContext";
import AppButton from "../components/custom_ui/AppButton";
import { AntDesign } from '@expo/vector-icons';
import { THEME } from "../theme";
import { DetailsContext } from "../context/details/DetailsContext";
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
        <AppTextBold style={{fontSize: 26}}>Symbol:</AppTextBold>
        <AppText style={{fontSize: 26}}>{quoteData['symbol']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={{fontSize: 26}}>Description:</AppTextBold>
        <AppText style={{fontSize: 26}}>{quoteData['description']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={{fontSize: 26}}>Digits:</AppTextBold>
        <AppText style={{fontSize: 26}}>{quoteData['digits']}</AppText>
      </View>
      <View style={styles.block}>
        <AppTextBold style={{fontSize: 26}}>Trade:</AppTextBold>
        <AppText style={{fontSize: 26}}>{quoteData['trade']}</AppText>
      </View>
      {quote.length > 0 && (
        <View style={styles.data}>
          <View style={styles.block}>
            <AppTextBold style={{fontSize: 26}}>Ask:</AppTextBold>
            <AppText style={{fontSize: 26}}>{quote[0]['ask']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={{fontSize: 26}}>Bid:</AppTextBold>
            <AppText style={{fontSize: 26}}>{quote[0]['bid']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={{fontSize: 26}}>Change:</AppTextBold>
            <AppText style={{fontSize: 26}}>{quote[0]['change']}</AppText>
          </View>
          <View style={styles.block}>
            <AppTextBold style={{fontSize: 26}}>Change 24h:</AppTextBold>
            <AppText style={{fontSize: 26}}>{quote[0]['change24h']}</AppText>
          </View>
        </View>
      )}
      <View style={styles.button}>
        <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen({"symbol": null})}>
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
  }
});

export default DetailsScreen;