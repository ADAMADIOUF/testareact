import React from 'react'
import Cocktail from './Cocktail'
import Loading from "./Loading"
import { useGlobalContext } from '../context'
import { getByTitle } from '@testing-library/react'
export default function CocktailList() {
 const{cocktails,loading}= useGlobalContext()
  
 if(loading){
  return(
   <Loading/>
  )
 }
 if(cocktails.length <1){
  return(
   <h2 className='section-title'>
    no drinks matched your search
   </h2>
  )
 }
 return (
    <section className='section'>
     <h2 className="section-title">
      drinks
     </h2>
     <div className="cocktails-center">
      {cocktails.map((item)=>{
       return<Cocktail key={item.id}{...item}/>
      })}
     </div>
     </section>
  )
}
