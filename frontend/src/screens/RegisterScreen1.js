import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register1} from '../actions/userActions';



function RegisterScreen1(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender]=useState('');
  const [phone, setPhone]=useState('');
  const[address, setAddress]=useState('');
  
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register1(name, email, password, gender, phone, address ));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Account As Seller</h2>
        </li>
        
       
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}

        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        
    <li>
    
  <label htmlFor="phone">   
  Phone :  
  </label>  
  <input type="text" name="phone" id="phone" placeholder="+91" size="12" onChange={(e) => setPhone(e.target.value)}/>   
  </li>
  <li>
  Address  
    
  <textarea cols="80" rows="5" name="address" id="address" placeholder="address" onChange={(e) => setAddress(e.target.value)}>  
  </textarea>  
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
       
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Sign In To your E-commerce account</Link>

        </li>
        
      </ul>
    </form>
  </div>
  
}
export default RegisterScreen1;