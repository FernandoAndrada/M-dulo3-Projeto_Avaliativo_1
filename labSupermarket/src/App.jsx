

import { useState } from 'react'
import './App.css'
import { ListItem } from './ListItem'




function App() {

  const [texto, setTexto] = 
  useState("");
  const [lista, setLista] = 
  useState([ ])
//texto, mudatesto = ESTADO

function mudaTexto(event){
      setTexto(event.target.value)
}

function mudaLista () {
  setLista([...lista, texto]);
  setTexto("");

  

}



  return (
  <div className='body'>
    <div className='bodyDesc'>
            <p>Bem Vindo(a) ao </p>
            <h3>LabShoppingList</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Ad unde neque eius corrupti officia sed cupiditate sequi, 
              nostrum fugiat qui facere asperiores maiores molestias numquam, 
              a tempore, reiciendis deleniti repellendus?</p>
            </div>
      <div className='space'>
                
                                  
                <div className='card'>
                      
                        <p>Inserir item na lista:</p>
                        <div className='totComp'><p>Total das compras:</p></div>
                        <div className='valComp'><p>R$</p></div>
                      
                        <input type="text" onChange={
                          (e)=>mudaTexto(e)}value={texto}/>
                              
                        <button className='but1' onClick={mudaLista}>Inserir</button>
                        
                        <ul className='list'>
                          <p>Lista de compras</p>

                          {lista.map((item)=>
                          (<ListItem label={item}/>))}
                          
                        
                        </ul>
                <div/>        
      </div> 
  </div>   
                   
              
          
</div>
  )

}


export default App

/*localStorage.setItem(lista, JSON.stringify(lista));
let listaSt =localStorage.getItem('lista');
lista = JSON.parse(listaSt);*/
