
import './App.css'
import axios from 'axios';
import { useState } from 'react';

function App() {
 const [loading,setloading] = useState(false);


  const sendMessage = (event) =>{
    setloading(true);
    event.preventDefault();
    const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
    const id = -1002022260815;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const textContent = `Ismi: ${name} \n Familiyasi: ${surname} \n Telefon_raqami: ${phone}`
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id": id,
        "text": textContent,
      }

    })
    .then((res) =>{
      document.getElementById("form").reset();
      alert("Yuborildi")
    }).catch((error) =>{
      console.log("yuborishda xotilik yuz berdi",error);
    }).finally(() =>{
      setloading(false);
    })

  }
  
  return (
    <div className="header">
      <form id="form" onSubmit={sendMessage}>
        <label htmlFor="">Name</label><br/>
        <input type="text" id="name"/><br/>
        <label htmlFor="">Surname</label><br/>
        <input type="text" id="surname"/><br/>
        <label htmlFor="">Number</label><br/>
        <input type="text" id="phone"/><br/>
  <button type='submit' loading={loading}>{loading?"Yuborilmoqda...":"Yuborish"}</button>
      </form>
     
    </div>
  
  )
}

export default App
