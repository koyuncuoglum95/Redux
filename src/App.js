import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

// Fragment element allow us to return more than one nested component as Counter.
// {isAuth} && = it toggles it upon components.

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth &&<Auth />}
      {!isAuth &&<UserProfile />}
      <Counter />
    </Fragment>
  
  );
}

export default App;
