import { Provider } from 'react-redux';
import Navigation from './routes/Navigation';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
