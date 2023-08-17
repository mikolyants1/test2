import { create } from "zustand";
import { devtools,persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
interface store{
    active:string[],
    del:string[],
    add1:(x:string)=>void,
    add2:(x:string)=>void,
    del1:(i:number)=>void,
    del2:(i:number)=>void,
}
export const useStore=create<store>()(persist(devtools(immer((set)=>({
   active:[],
   del:[],
   add1:(x)=>set((state)=>{
    state.active.push(x)
   }),
   add2:(x)=>set((state)=>{
    state.del.push(x)
   }),
   del1:(i)=>set((state)=>{
    state.active.splice(i,1)
   }),
   del2:(i)=>set((state)=>{
    state.del.splice(i,1)
   }),
}))),{name:'st',version:1}))