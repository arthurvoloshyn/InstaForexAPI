import React from 'react';
import renderer from 'react-test-renderer';
import QuotesList from '../src/screens/QuotesList';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<QuotesList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
