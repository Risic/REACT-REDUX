import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import PostsList from './components/PostsList';

function App() {
  return (
    <Provider store={store} >
      <div className='App'>
        <PostsList />
      </div>
    </Provider>
  );
}

export default App;
