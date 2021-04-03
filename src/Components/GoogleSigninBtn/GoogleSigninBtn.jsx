import React from 'react'
import { connect } from 'react-redux';
import { googleSignin } from '../../Redux/auth/authActions';

const GoogleSigninBtn = ({googleSignin}) => {
    return (
        <div>
            <h4>Google</h4>
            <button onClick= {googleSignin}>SignIn With Google</button>
        </div>
    )
}
var actions = {
    googleSignin
}

export default connect(null, actions)(GoogleSigninBtn)
