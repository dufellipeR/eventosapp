import React, { useState } from 'react';
import './login.css'
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import { domainToASCII } from 'url';
function Login() { 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsg] = useState('');

    function logar() { 

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => { 
            setMsg('Sucesso')
        }).catch(erro => {
            setMsg('Erro')
        })
    
        console.log('LogClick')
    }

    return(
        <div className="login-content d-flex align-items-center ">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login </h1>
                </div>

                    <input onChange={ e => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email"/>

                    <input onChange={ e => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha"/>
                    
                <button className="btn btn-lg btn-login btn-block" type="button" onClick={logar}>Entrar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'Sucesso' && <div class="alert alert-success" role="alert">Você logou com sucesso!</div>}
                    {msgTipo === 'Erro' && <div class="alert alert-danger" role="alert">Houve um erro ao logar. Verifique os dados! </div>}
                    
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a><span className="text-white">||</span> 
                    <Link to='novousuario' className="mx-2">Quero cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;