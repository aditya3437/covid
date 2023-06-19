import React from "react";
import Cards from "./componenets/Cards/Cards";
import Charts from "./componenets/Charts/Charts";
import Countrypicker from "./componenets/Countrypicker/Countrypicker";
import styles from './App.module.css';
import {fetchData} from './api';
import image from './images/Covid-19.jpg';

class App extends React.Component { 
  state = {
    data:{},
  }
   async componentDidMount() {
    const Data=await fetchData();
    this.setState({data:Data})
    
  }
  render(){
    const {data} =this.state;
  return (
    <div className={styles.container}>
    <img className={styles.image} src={image} alt="COVID-19" />
    <Cards data={data}/>
    <Countrypicker />
    <Charts />  
    </div>
  );
}
}

export default App;
