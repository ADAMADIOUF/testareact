import React,{useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
 const{setSearch} = useGlobalContext()
 const searchValue = useRef("")
useEffect(()=>{
 searchValue.current.focus()
},[])
 const searchCocktail = () =>{
  setSearch(searchValue.current.value)
 }
 const handleSubmit = (e) =>{
  e.preventDefault()
 }
  return (
    <section className='section search'>
     <form  className="search-form" onSubmit={handleSubmit}>
      <div className="form-control">
       <label htmlFor="name">search your favorite drinks</label>
      <input type="text" id='name' ref={searchValue}
      onChange={searchCocktail} />
      </div>
     </form>
    </section>
  )
}
