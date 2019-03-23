import React, { Component } from 'react';
import { connect } from 'react-redux'

class SongDetail extends Component {
    render() {
        console.log('song details' , this.props.song)
        var write = "";
        if(!this.props.song){
            write = <div>Select a song</div>;
        }else{
            write = (<div className="row">
                        <div className="col-lg-12">
                            <h3>Song Details</h3>
                        </div>
                        <div className="col-lg-12">
                            Titls : {this.props.song.title}<br />
                            Duration : {this.props.song.duration}
                        </div>                    
                    </div>);
        }
        return (
            <div>
                {write}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {song : state.selectedSong}    
}



export default connect(mapStateToProps)(SongDetail);