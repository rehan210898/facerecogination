import React from "react";

const Navigation = ({route,routeChange})=>{
    return(route=='SignOut'?<nav style={{display:'flex',justifyContent:'flex-end'}}>
    <p onClick={()=>routeChange('Register')} className="f3 link dim black underline pa3 pointer">Register</p>
     </nav>:(route=='Register'?<nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>routeChange('SignOut')} className="f3 link dim black underline pa3 pointer">Sign In</p>
        </nav>:
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>routeChange('SignOut')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>)
    );
}

export default Navigation;