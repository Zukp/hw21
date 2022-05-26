import { useState } from "react";

const BasicForm = (props) => {
   const [entredName,setEntredName] = useState('')
   const [lastName, setLastName] = useState('')
   const [entredEmail, setEntredEmail] = useState('')
   const [isValid,setIsValid] = useState(false)
   const [isLast,setIsLast] = useState(false)
   const [isEmail,setIsEmail] = useState(false)
 
  const entredNameChangeHandler = (event) =>{
   setEntredName(event.target.value)
   if(entredName.trim() === ''){
    setIsValid(true)
    return
  }
  setIsValid(false)
  } 

  const entredNameOnBlur = () => {
    if(entredName.trim() === ''){
      setIsValid(true)
      return
    }
    setIsValid(false)
  }

  const lastChangeHandler = (event) => {
    setLastName(event.target.value)
    if(lastName.trim()  === ''){  
      setIsLast(true)
      return
    }
    setIsLast(false)
  }

  const lastNameOnBlur = () => {
    if(lastName.trim()  === ''){  
      setIsLast(true)
      return
    }
    setIsLast(false)
  }
  const entredEamilChangeHandler = (event) => {
    setEntredEmail(event.target.value)
    if(!entredEmail.includes('@')){
      setIsEmail(true)
      return
      }
      setIsEmail(false)
  }
  const entredEmailOnBlur = () => {
    if(!entredEmail.includes('@')){
    setIsEmail(true)
    return
    }
    setIsEmail(false)
  }
    const submitHandler = (event) =>{
    event.preventDefault()
    if(entredName.trim() === '' && !entredEmail.includes('@') && lastName.trim()  === ''){
      setIsLast(true)
      setIsValid(true)
      setIsEmail(true)
     return
    }
  
    setIsValid(false)
    setIsLast(false)
    setIsEmail(false)
  }
  const nameIsInValid = isValid  ? 'form-control invalid' : 'form-control';
  const IsInLast = isLast ? 'form-control invalid' : 'form-control';
  const IsInEmail = isEmail ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameIsInValid}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text'
          id='name'
          value={entredName}
          onChange={entredNameChangeHandler}
          onBlur={entredNameOnBlur}
           />
          
        </div>
        <div className={IsInLast}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text'
          id='name'
          value={lastName}
          onChange={lastChangeHandler}
          onBlur={lastNameOnBlur}
           />
        </div>
      </div> 
      <div className={IsInEmail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='email'
        id='name'
        value={entredEmail}
        onChange={entredEamilChangeHandler}
        onBlur={entredEmailOnBlur}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
