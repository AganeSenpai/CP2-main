import Header from '../../components/header'
import './style.css'
import { useState } from 'react'
import axios from 'axios'

const Cadastro = () => {

    const [Uname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")


    const req = async ()=> {
    try{
      const response = await axios({
        method: "post",
        url: "https://caiohalbert.bsite.net/api/user/newUser",
        headers: {"Content-Type": "application/json"},
        data: {
          "username": Uname,
          "email": email,
          "passwordHash": psw,
          "accessLevel": ""
        }
      })
      console.log(response);
    }catch(err){
      console.log(err)
      
    }
  }

    return(
        <main>
            <Header/>
                <section>
                    <div className='div1'>
                    </div>

                    <div className='div2'>
                        <div className='ConjuntoLoginCadastro'>
                            <h1>CADASTRO</h1>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="" id="username" placeholder='Username' />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" placeholder='Email'/>
                            <input onChange={(e) => setPsw(e.target.value)} type="password" name="" id="passwordHash" placeholder='Senha'/>
                            <button onClick={req}>Enviar</button>
                        </div>
                    </div>
                </section>
        </main>
    )
}

export default Cadastro