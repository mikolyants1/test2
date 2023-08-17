import { useState,ChangeEvent} from 'react'
import './App.css'
import { useStore } from './store'
function App():JSX.Element {
  const active:string[]=useStore(state=>state.active)
  const del:string[]=useStore(state=>state.del)
  const add:(x:string)=>void=useStore(state=>state.add1)
  const add2:(x:string)=>void=useStore(state=>state.add2)
  const del1:(i:number)=>void=useStore(state=>state.del1)
  const del2:(i:number)=>void=useStore(state=>state.del2)
const [todo,setTodo]=useState<string>('')
const add1=():void=>{
 add(todo)
}
const press=(e:ChangeEvent<HTMLInputElement>,item:string,i:number):void=>{
 if (e.target.checked) {
 del1(i)
 add2(item)
}else{
del2(i)
add(item)
    }
}
return <div>
        <div>
          <input onChange={(e:ChangeEvent<HTMLInputElement>):void=>setTodo(e.target.value)}
           type="text" />
          <button onClick={add1}>add</button>
        </div>
        <div>
            {active.map((item:string,i:number):JSX.Element=>(
                <div  key={i}>
                    {item}
                <input checked={false}
                 onChange={(e):void=>press(e,item,i)} type="checkbox" />
                </div>
               ))}
            {del.map((item:string,i:number):JSX.Element=>(
                <div key={i} >
                 <del>{item}</del>
               <input checked type="checkbox"
                onChange={(e):void=>press(e,item,i)}  />
                </div>
               ))}
        </div>
    </div>

}

export default App
