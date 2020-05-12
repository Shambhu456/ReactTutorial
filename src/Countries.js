import React, { Component } from "react";
import axios from "axios";
import Modal from 'react-modal'
export default class Countries extends Component {
  state = {
    countries: [],
    modalOpen: false,
   
  };
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      //console.log(res);
      this.setState({ countries: res.data });
      const cobj = JSON.stringify(res.data);
      console.log(cobj);
    });
  }
  countryDetail=()=>{
    this.setState({
        modalOpen:true
    })
  }
  render() {
    return (
      <ul>
        {this.state.countries.map((country) => (
          <div>
            
            <li onClick={this.countryDetail}>Name: {country.name}</li>
            <li style={{ listStyle: "none" }}>Code: {country.alpha2Code}</li>
            <li style={{ listStyle: "none" }}>Capital: {country.capital}</li>
            <li style={{ listStyle: "none" }}>Currency: {country.currencies[0].name}</li>
            <li >Borders:</li>
            <li >{country.borders[0]}</li>
            <li >{country.borders[1]}</li>
            <li >{country.borders[2]}</li>
            <li >{country.borders[3]}</li>
            <li >{country.borders[4]}</li>
            <li >{country.borders[5]}</li>

            <Modal isOpen={this.state.modalOpen}>
            <div>
            <img src={country.flag} width="600px"/>
            <br/>
            <br/>
            
                    <button onClick={()=>this.setState({modalOpen:false})}>close</button>
                    </div>
            </Modal>
          </div>


        ))}
      </ul>
    );
  }
}
