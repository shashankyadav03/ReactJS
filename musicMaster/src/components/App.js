import React,{ Component } from 'react';

class App extends Component{
  
  SpotifyApi = () =>  {
    var name=this.state.artistQuery;
    fetch("https://spotify-api-wrapper.appspot.com/artist/"+name)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.artists.total>0){
        const artist = data.artists.items[0];
        this.setState({ artist });
        fetch("https://spotify-api-wrapper.appspot.com/artist/"+artist.id+"/top-tracks")
       .then(res => res.json())
       .then(data => {
         console.log(data);
         this.setState({tracks: data.tracks});
        
      })
       .catch(error => alert(error.message));
      }     
      // JSON data parsed by `data.json()` call
    })
    .catch(error => alert(error.message));
    }

  state ={artistQuery: '',
          artist: null, tracks: []};
  updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value});
  }
  handleKeyPress = event => {
    if(event.key === 'Enter'){
      this.searchArtist();
    }
  }
  searchArtist = () => {
    this.SpotifyApi();
    console.log(this.state);
  }
  render() {
    console.log('this.state',this.state);
    return (
      <div>
        <h1>Music Master</h1>
        <input 
        onChange={this.updateArtistQuery} 
        onKeyPress={this.handleKeyPress} 
        placeholder="Search Artist"/>
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default App;
