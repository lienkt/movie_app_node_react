import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import Movies from './pages/Movies'
import EditMovie from './pages/EditMovie'
import WatchMovie from './pages/WatchMovie'
import RateMovie from './pages/RateMovie'
import Users from './pages/Users'
import EditUser from './pages/EditUser'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from "react"

function App() {
  const [cookies] = useCookies(['user'])
  const [showUser, setShowUser] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  useEffect(() => {
    const userId = cookies.UserId ? cookies.UserId : ""
    const role = cookies.Role ? cookies.Role : ""
    if (userId.length !== 0) {
      if (role === "admin") {
        setShowAdmin(true);
        setShowUser(true);
      } else {
        setShowUser(true);
      }
    } else {

    }
  }, [cookies])
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        { showUser && <Link className='link' to="/">Home</Link>}
        { showAdmin && <Link className='link' to="/movies">Movies</Link>}
        { showAdmin && <Link className='link' to="/users">Users</Link>}
        <Link className='link' to="/login">Login/Logout</Link>
      </div>
      
      <Switch>
        { showUser && <Route path="/" exact={true} component={HomePage} />}
		    { showUser && <Route path='/movies/:movieId/watch' exact={true} component={WatchMovie} />}
		    { showUser && <Route path='/movies/:movieId/watch/rate' exact={true} component={RateMovie} />}
        { showUser && <Route path="/movies" exact={true} component={Movies} />}
		    { showUser && <Route path='/movies/:movieId/edit' exact={true} component={EditMovie} />}
        { showUser && <Route path="/users" exact={true} component={Users} />}
		    { showUser && <Route path='/users/:userId/edit' exact={true} component={EditUser} />}
        <Route path="/login" exact={true} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
