import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Login(){

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      const resposta = await axios.post('******Endereço da API******', {
        usuario,
        senha
      });
      localStorage.setItem('token', resposta.data.token);
      router.push('/home/home')
    } catch (error){
      console.log(error)
    }
  };

   return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
          <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
          />
          <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
          />
          <Link href={'/home/home'}><button type="submit">Entrar</button></Link>
          
      </form>
      <span>Bem vindo ao sistema</span>
      
    </div>
  )
}