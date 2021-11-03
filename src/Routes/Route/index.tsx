import { Route as Router, RouteProps } from 'react-router-dom'
import Container from '../../Components/Container';

const PublicRoute: React.FC<RouteProps> = ({ component, path, ...rest }) => {
    return <Router {...rest} render={(props) => <Container {...props} child={component} />} />
}

export default PublicRoute;