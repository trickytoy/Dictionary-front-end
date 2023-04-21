import React, { Component } from 'react';
import axios from "axios";
import Navigation from './components/navigation/navigation';
// import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm.js';
import Rank from './components/rank/rank';
import Design from './components/particles/Design';
import Signin from './components/signin/signin';
import Register from './components/register/register';
import MeaningResponse from './components/meaning/meaning';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route : 'signin',
      isSignedIn: false,
      meaning: '',
      entries: 0,
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
      }
    }
  }

    loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }})
    }
  
    displayFaceBox = (box) => {
      this.setState({box: box});
    }

    onInputChange = (event) => {
      console.log(event.target.value);
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {   
      const word = this.state.input;
      let result = '';
      console.log(word);
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        result = response.data[0].meanings[0].definitions[0].definition;
        this.setState({meaning: result});
        console.log('here', this.state.meaning)
        this.setState({entries: this.state.entries + 1})
      })
      
        
    }

    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }

      this.setState({route: route});
    }
  render() {
    const {isSignedIn, route} = this.state;
    return (
      
      <div className="App">
        <Design />
        <Navigation isSignedIn = {isSignedIn} onRouteChange={this.onRouteChange}/>
          { route === 'home'  
          ? <div> 
                  {/* <Logo /> */}
                  <Rank name={this.state.user.name} rank = {this.state.entries} />
                  <ImageLinkForm onInputChange={this.onInputChange} 
                  onButtonSubmit = {this.onButtonSubmit}/>
                  <MeaningResponse meaning={this.state.meaning}/>
                  {/* <FaceRecognition box={box} imageUrl={imageUrl} /> */}
            </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )


        }
      </div>
    );
  }
}

export default App;
