import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartResume from '../Pages/CartResume';
import Home from '../Pages/Home';
import PublicRoute from './Route';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cart/resume" component={CartResume} />
                <PublicRoute exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;