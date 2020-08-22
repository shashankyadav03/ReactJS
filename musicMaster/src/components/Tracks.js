import React, {Component} from 'react';

class Tracks extends Component {
    state = {playing: false, audio:null,playPrevUrl: null};
    playAudio = previewUrl => () =>{
        if(!previewUrl)
          return null;
        const audio = new Audio(previewUrl);
        if(!this.state.playing){
        audio.play();
            this.setState({playing:true, audio,playPrevUrl:previewUrl});
        }
        else{
            this.state.audio.pause();

            if(this.state.playPrevUrl === previewUrl){
                this.setState({playing:false})
            }
            else{
                audio.play();
                this.setState({playing:true, audio,playPrevUrl:previewUrl});
            }
            
            
        }
    }
    
    render() {
        const {tracks} = this.props;
        return (
            <div>
                {
                   tracks.map(tracks =>{
                       const {id,name,album,preview_url} = tracks;
                       return(
                        <div key={id} onClick={this.playAudio(preview_url)} style={{float:"left",margin:'20px',position:"relative",display:"inline-block"}}>
                            <img src={album.images[0].url} 
                            alt = 'track'
                            style={{
                                width:200,
                                height:200,
                                borderRadius:100,
                                objectFit:'cover',
                                position:"relative",
                            }} />
                            <p>{name}</p>
                        </div>
                       )
                   }) 
                }
            </div>
        )
    }
}
export default Tracks;
