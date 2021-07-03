import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import Movies from './pages/Movies'
import EditMovie from './pages/EditMovie'
import WatchMovie from './pages/WatchMovie'
import Users from './pages/Users'
import EditUser from './pages/EditUser'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/movies">Movies</Link>
        <Link className='link' to="/users">Users</Link>
      </div>
      
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login" exact={true} component={LoginPage} />
		    <Route path='/movies/:movieId/watch' exact={true} component={WatchMovie} />
        <Route path="/movies" exact={true} component={Movies} />
		    <Route path='/movies/:movieId/edit' exact={true} component={EditMovie} />
        <Route path="/users" exact={true} component={Users} />
		    <Route path='/users/:userId/edit' exact={true} component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
