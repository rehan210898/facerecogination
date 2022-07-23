import React from "react";
import './SignIn.css'
const SignIn = ({routeChange}) => {
    
        return(
             <main className="pa4 black-80">
        <form className="measure pa4 center form-alignment shadow-5">
          <fieldset id="sign_up" className="w-100 ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={()=>routeChange('Home')} value="Sign in"/>
          </div>
        </form>
      </main>
      
        )
}

export default SignIn;


