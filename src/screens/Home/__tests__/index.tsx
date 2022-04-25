import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {Home} from '..';
import configureStore from '../../../configureStore';

const renderComponent = () => {
  const store = configureStore({stock: {data: [], stocksInfo: {}}});
  return renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
};

describe('<Home />', () => {
  it('should render correctly', () => {
    const component = renderComponent();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
