import React,{useState} from 'react'
import {Menu} from './Menu'

export const Login = () => {
  const[milogin,setMiLogin]= useState("false");
  const[usu,setUsu]=useState("");
  const[pas,setPas]= useState("");

  function iniciarSesion(e){
    e.preventDefault();
    let txtusu = document.getElementById("txtusu").value;
    let txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Campo vacio")
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }
      else if(usu === "julieta" && pas==="321"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }
      else{
        setMiLogin("false");
        alert("Usuario o Contraseña Incorrecto!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }
  return (
    <div >
      <div id="form_login" className="container">
      <div>
       <img src="https://www.ottis.com.co/iconos/logo_ottis.png" alt="Descripción de la imagen" style={{ width: '200px', height: 'auto',position:'absolute',top: '-96px',left:'89px' }} />
      </div>  
    <form>
        <div>
            <h1 style={{color:"#F1EEE6", margin:'0 0 30px',textalign:"center",padding:'0'}}>LOGIN</h1>
            <h5 style={{color:"#F1EEE6", margin:'0 0 30px',textalign:"center",padding:'0'}}>
            <label htmlFor="txtusu" style={{color:'F1EEE6'}}><strong>Username</strong></label></h5>
            <input type="text" id="txtusu" style={{textAlign:"center",position:'relative',width:'100%',padding:'10px 0',fontSize:'16px',color:'#F1EEE6',marginBottom:'30px',border:'none',borderBottom:'1px solid #F1EEE6',outline:'none',background:'transparent'}} className="form-control" onChange={(e)=>setUsu(e.target.value)} required/>
        </div>
        <div>
        <h5 style={{color:"#F1EEE6", margin:'0 0 30px',textalign:"center",padding:'0'}}><label htmlFor="txtpas"><strong>Password</strong></label></h5>
            <input type="password" id="txtpas" style={{textAlign:"center",top:'-20px',left:'0px',position:'relative',padding:'10px 20px',color:'#0d6efd',fontSize:'14px',textDecoration:'none',textTransform:'uppercase',overflow:'hidden',transition:'.5s',marginTop:'40px',letterSpacing:'4px',border:'none',borderBottom:'1px solid #F1EEE6',background:'transparent'}} className="form-control" onChange={(e)=>setPas(e.target.value)} required/>
        </div><br/>
        <input type="submit"  className="button-1 button" value="Login" onClick={iniciarSesion} />
    </form>
    
</div>
{milogin === "true" && <Menu usu={usu}/>}
   
    </div>
  )
}
