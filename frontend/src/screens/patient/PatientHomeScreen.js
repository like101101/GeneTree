import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PatientHomeScreen() {
    const navigate = useNavigate()
    const userRegister = useSelector(state => state.userRegister)
    const { registerInfo } = userRegister

    useEffect(() => {
        if(!registerInfo){
            navigate('/login')
        }
    }, [navigate, registerInfo])
    return (
        <div>PatientHomeScreen</div>
    )
}

export default PatientHomeScreen