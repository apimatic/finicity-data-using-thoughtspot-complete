import React ,{useState} from 'react';
import { Loading } from './Loading';
import ThoughtSpot from './ThoughtSpot';
import "./SearchCustomer.css";

const SearchCustomer = () => {

  const [text,setText] =useState('');
  const [submit,setSubmit] =useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [response,setResponse] = useState(null)

 const handleChange = (e) => {
  setText(e.target.value);
}

  const handleSubmit = async(e) =>{
    setIsLoading(true);
    setResponse(null)
    e.preventDefault();
    
    setSubmit(text)
    
    const reply = await fetch(`http://localhost:4000/finicitydata?customerid=${submit}`, {
      method: "GET",
      headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
      })  
  });
  
 
const ResponseStatus = reply.status;
console.log(ResponseStatus)
 setResponse(ResponseStatus)
 setIsLoading(false);
}
 if (isLoading) {
  
   return ( 
   <div> 
      <form onSubmit={handleSubmit} className="center">
            <input
              type="text"
              value={text}
              onChange={handleChange}
            />
             <button type="submit">Submit</button>
      </form>
      <Loading/>
     </div>  
 )
 }
 else if (response !== 200 && response !== null ){
   return(
    <div> 
    <form onSubmit={handleSubmit} className="center">
          <input
            type="text"
            value={text}
            onChange={handleChange}
          />
           <button type="submit">Submit</button>
    </form>
    <div className='center-p'>
      This customer ID does not exist
    </div>
   </div> 
   )
 }
 else if ( response == null ){
  return(
   <div> 
   <form onSubmit={handleSubmit} className="center">
         <input
           type="text"
           value={text}
           onChange={handleChange}
         />
          <button type="submit">Submit</button>
   </form>
  </div> 
  )
}
else{
  return (

  <div className='center'>
         <form onSubmit={handleSubmit} className="center">
          <input
            type="text"
            value={text}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        
       <ThoughtSpot/>
      
    </div>
  )
}
}

export default SearchCustomer