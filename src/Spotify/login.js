import React from 'react';
import loginIMG from '../img/login.svg';

export default function Login() {
    return(
      <div className="login">
          <h2>Here&apos;s our login page!</h2>
      <a href="/login">
          <img src={loginIMG} alt="svg" />
      </a>
    </div>
    );
}