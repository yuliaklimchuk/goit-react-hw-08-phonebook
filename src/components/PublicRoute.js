import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from "../redux/auth/authSelectors";

export default function PublicRoute({ children,  restricted = false }) {
    const isLogIn = useSelector(authSelectors.getIsLogIn);
    const shouldRedirect = restricted && isLogIn
    return !shouldRedirect ? children : (<Navigate replace to= '/contacts' />)
}