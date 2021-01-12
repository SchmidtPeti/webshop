import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utlis';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render() {
        return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
                <label>Email</label>
                <FormInput type="password" name="password" onChange={this.handleChange} value={this.state.password} required/>
                <label>Password</label>
                <br/>
                <CustomButton type="submit">Sign</CustomButton>
                <br/>
                <br/>
                <CustomButton isGoogleButton onClick={signInWithGoogle}>
                    {' '}
                    Sign in with Google{' '}
                </CustomButton>                
            </form>
        </div>)
    }
}

export default SignIn;