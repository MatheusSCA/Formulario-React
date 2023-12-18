import React,{useState} from "react";

const Login =() =>{
    const [email, SetEmail] = useState('')
    const [senha, SetSenha] = useState('')

    const handleLoginSubmit =(event)=>{
        event.preventDefault()
        console.log("Enviou",{email:email,senha:senha})
    }
    return (
       <div>
        <form onSubmit ={handleLoginSubmit}>
        <div>
            <h1>
             Login
            </h1>
         </div>
         <div>
            <h4>
            Email
            </h4>
            <input
            required
            type="text"
            placeholder="Insira seu Email"
            value={email}
            onChange={(e) => SetEmail (e.target.value) }
            />
            <h4>
            Senha
            </h4>
            <input 
            required
            type="password"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => SetSenha (e.target.value) }
            />
         </div>
         <h1>
    
         </h1>
         <button type="submit">Entrar</button>
        </form>
       </div>
    )
}
export default Login;