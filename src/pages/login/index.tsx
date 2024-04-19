
import './style.css'
import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/header'

const Login = () => {

    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")
    

    const req = async ()=> {
        try{
          const response = await axios({
            method: "post",
            url: "https://caiohalbert.bsite.net/api/user/login",
            headers: {"Content-Type": "application/json"},
            data: {
              "email": email,
              "password": psw,
            }
          })
          console.log(response)
        }catch(err){
          console.log(err)
        }
      }
    
    return(
        <main>
            <Header/>
            <section className='SectLogin'>

                <div className='blocomeio'>
                    <div className='ConjuntoLoginCadastro'>
                        <h1>LOGIN</h1>
                        <input onChange={(e) => setEmail(e.target.value)} type="email"  id="email" placeholder='Email'/>
                        <input onChange={(e) => setPsw(e.target.value)} type="password" id="senha" placeholder='Senha'/>
                        <button onClick={req}>Enviar</button>
                    </div>
                </div>  
            </section>
        </main>
        
    )
}

export default Login
