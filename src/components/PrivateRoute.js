import React from 'react';
import {useSelector} from 'react-redux'
import {Route,useHistory} from 'react-router-dom';
import api from "../services/api"

export default ({children, ...rest})=>{
    const token= useSelector(state=>state.user.token)
    const history = useHistory();

    async function check()
    {
        const response = await api.get("/check",{
            headers:{authorization:token}
        })
        if(response.data.status==="401"){
            
            history.push("/")
            return false
        }
        return true
    }
    const checked=check()
    console.log(checked)
    return (
        {checked}?
        <Route {...rest}>{children}</Route>:
        <></>
    )
}