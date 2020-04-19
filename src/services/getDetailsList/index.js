import {
  SECONDARY_DETAILS_LIST,
  PRIMARY_DETAILS_LIST,
} from '../../constants/lists';
import { getDataListWithValues } from '../../utils';

export const getDetailsList = (primaryData, secondaryData) => {
  const primaryDetailsList = getDataListWithValues(
    PRIMARY_DETAILS_LIST,
    primaryData,
  );
  const secondaryDetailsList = getDataListWithValues(
    SECONDARY_DETAILS_LIST,
    secondaryData,
  );

  return primaryDetailsList.concat(secondaryDetailsList);
};
