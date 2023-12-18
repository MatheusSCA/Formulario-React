import React,{useState,useEffect} from "react";
import axios from "axios";

const Principal =()=>{
   const [usuarios,setUsuarios] = useState ([])
   
   const carregarUsuarios = async()=>{
   try {
      const response = await axios.get ("http://localhost:3000/usuarios")
      setUsuarios(response.data)
   } catch (error) {
      console.error(error);
   }
}
   useEffect(()=>{
      carregarUsuarios();   
   },[])

   return (
    <div>
      <h1>Mostrar usuarios</h1>
      <ul>
         {usuarios.map((usuario)=>(
            <li key={usuarios.id}>
               <strong>Nome:</strong>{usuario.nome}<h1></h1>
               <strong>Email:</strong>{usuario.email}<h1></h1>
               <strong>profissao:</strong>{usuario.profissao}<h1></h1>
            </li>
         ))}
      </ul>
    </div>
   )
}
export default Principal;