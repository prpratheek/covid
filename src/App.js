import React from 'react';
import './App.css';
import Cards from './Cards';
import Country from './Country';
import Footer from './Footer';
import { fetchdata} from './api/index'
import logo from './logo.jpg';

class App extends React.Component{
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetcheddata=await fetchdata();

    this.setState({data:fetcheddata})
  }

  handleCountryChange =async(country)=>{
    const fetcheddata=await fetchdata(country);

    this.setState({data:fetcheddata})
  }

  render(){
    return (
      <div className="container">
        <img className="image" src={logo} alt={logo}/>
        <Country handleCountryChange={this.handleCountryChange}/>
        <Cards data={this.state.data} />
        <Footer />
      </div>
     );
  }
}

export default App;
