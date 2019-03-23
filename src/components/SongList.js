import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSong } from './../actions/index';


class SongList extends Component {
    
    renderList(){
        return this.props.songs.map((song) =>{
            return (
                <div className="list-group" key={song.title}>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{song.title}</h5>
                            <button className="btn btn-success pull-rignt"
                            onClick={() => this.props.selectSong(song)}>Select</button>
                        </div>
                    </a>
                </div>
            );
        });
    }
    
    
    render() {
        return (
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {
        songs : state.songs
    };
}


export default connect(mapStateToProps, { selectSong })(SongList);