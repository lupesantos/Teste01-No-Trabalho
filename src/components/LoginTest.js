import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginTest.css';
import Swal from 'sweetalert2';

export default function LoginTest (){
    const [form, setForm] = useState({ // aqui ao invez de criar uma variavel de estado para cada elemento do forms
        email:'',                      // criamos um objeto com todos dentro!
        senha:'',
    })
    const navigate = useNavigate();

    function fazerLogin (event) {
        event.preventDefault(); // impede o redirecionamento padrao para outra janela
		console.log("Email: ", form.email)
        console.log("Senha: ", form.senha)
        navigate('/');
		};
    function handleForm (e) { //criamos uma funcao que lida com todas as mudancas e adiciona elas em todos
        setForm({             // as variaveis do formulario
            ...form,
            [e.target.name]: e.target.value,
        }) 
        }
    function invalid (){ //caso queira criar um alerta para falta de senha por ex
        //Swal.fire('Você precisa por a senha amiguinho!')
        alert("Falta a senha!")
        }

    return(
        <>
        <form onSubmit={fazerLogin}>
        <div className="form-group">
            <span>Email</span>
		    <input type="email" className="form-field" name="email" required onChange={handleForm} value={form.email}  />
        </div>
        <div className="form-group">
            <span>Senha</span>
		    <input type="password" className="form-field" name="senha" required onInvalid={invalid} onChange={handleForm} value={form.senha}/>
        </div>
		  <button className="form-field" type="submit">Login</button>
		</form>
        </> 
    )
}
