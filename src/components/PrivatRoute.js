import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/authSelectors";

export default function PrivatRoute({ children}) { 
    const isLogIn = useSelector(authSelectors.getIsLogIn);
    return isLogIn ? children: (<Navigate replace to='/login' />)

}