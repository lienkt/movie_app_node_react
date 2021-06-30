import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import Listtodos from './components/Listtodos/Listtodos'
import Calculate from './pages/Calculate'
import BlogPage from './pages/Blog'
import LoginPage from './pages/Login'
import Products from './pages/Products'
import EditProducts from './pages/EditProducts'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/todos">Listtodos</Link>
        <Link className='link' to="/cal">Calculate</Link>
        <Link className='link' to="/blog">Blog</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/products">Products</Link>
      </div>
      
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/todos" exact={true} component={Listtodos} />
        <Route path="/cal" exact={true} component={Calculate} />
        <Route path="/blog" exact={true} component={BlogPage} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/login" exact={true} component={LoginPage} />
		<Route path='/products/:productId/edit' exact={true} component={EditProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
