import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import Products from './pages/Products'
import EditProducts from './pages/EditProducts'
import Movies from './pages/Movies'
import EditMovies from './pages/EditMovies'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/products">Products</Link>
        <Link className='link' to="/movies">Movies</Link>
      </div>
      
      
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/products" exact={true} component={Products} />
		    <Route path='/products/:productId/edit' exact={true} component={EditProducts} />
        <Route path="/movies" exact={true} component={Movies} />
		    <Route path='/movies/:movieId/edit' exact={true} component={EditMovies} />
        <Route path="/login" exact={true} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
