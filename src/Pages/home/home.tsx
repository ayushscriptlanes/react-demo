import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './home.module.css'
import axios from 'axios'
import { useGetState } from "./store/selector/home.selector";
import { useDispatch } from "react-redux";
import { add_user_data } from "./store/home.store";

const Home: React.FC = () => {
  /* 
  * State
  */
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  
  /* 
  * Variables
  */
  const navigate = useNavigate();
  const state = useGetState()
  const dispatch = useDispatch()

  /* 
  * use Effects 
  */

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(()=>{
    console.log(state);
  },[state])

  /* 
  * methods
  */

  const onClickNavigation = () => {
    navigate("/cart");
  };

  const fetchData = async () => {
    try {
      const data = await axios.get(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0`)
      console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  }
  const onFormSubmitHandler = (event: any) => {
    event.preventDefault();
    dispatch(add_user_data({
      address: address, age: age, name: name
    }))
  }

  return (
    <div>
      <form onSubmit={onFormSubmitHandler}>
        <input type="text" name="name" value={name} onChange={(event) => {
          setName(event.target.value)
        }} />
        <input type="number" name="age" value={age} onChange={(event) => {
          setAge(+event.target.value)
        }} />
        <input type="text" name="address" value={address} onChange={(event) => {
          setAddress(event.target.value)
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home