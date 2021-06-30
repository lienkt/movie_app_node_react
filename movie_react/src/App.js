import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import Products from './pages/Products'
import EditProducts from './pages/EditProducts'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/products">Products</Link>
      </div>
      
      
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/login" exact={true} component={LoginPage} />
		    <Route path='/products/:productId/edit' exact={true} component={EditProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
