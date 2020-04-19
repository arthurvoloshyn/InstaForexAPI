import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { DANGER_COLOR, SECONDARY_COLOR } from '../../constants/themes';
import getDetailsList from '../../services/getDetailsList';
import { QuoteContext } from '../../contextes/quoteContext';
import ErrorIndicator from '../../components/ErrorIndicator';
import AppLoader from '../../components/AppLoader';
import AppButton from '../../components/AppButton';
import Row from '../../components/Row';
import styles from './styles';

const Details = ({ route, navigation }) => {
  const { data, isError, isLoading, fetchData } = useContext(QuoteContext);
  const { symbol } = route.params;

  useEffect(() => {
    fetchData(symbol);
  }, [fetchData, symbol]);

  const detailsList = getDetailsList(route.params, data[0]);

  const goBack = () => navigation.goBack();
  const tryAgain = () => fetchData(symbol);

  if (isError) {
    return (
      <ErrorIndicator>
        <AppButton backgroundColor={DANGER_COLOR} onPress={tryAgain}>
          Try again
        </AppButton>
      </ErrorIndicator>
    );
  }

  if (isLoading) return <AppLoader />;

  return (
    <View style={styles.container}>
      {detailsList.map(({ title, value }) => (
        <Row key={title} title={title} value={value} />
      ))}

      <View style={styles.button}>
        <AppButton backgroundColor={SECONDARY_COLOR} onPress={goBack}>
          <AntDesign name="back" size={40} />
        </AppButton>
      </View>
    </View>
  );
};

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      symbol: PropTypes.string,
    }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

Details.defaultProps = {
  route: {
    params: {
      symbol: '',
    },
  },
  navigation: {
    goBack: () => {},
  },
};

export default Details;
