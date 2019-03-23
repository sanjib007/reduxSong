import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title : 'No Scribs', duration: '4:05'},
        {title : 'No efsefsef', duration: '2:45'},
        {title : 'No grgdrgdgr', duration: '5:55'},
        {title : 'No refsfsf', duration: '5:54'},
        {title : 'No jiljljljil', duration: '1:25'}
    ];
};

const selectedSongReduces = (selectedSong = null, action) => {
    if(action.type === 'Song_selected'){
        return action.payload;
    }

    return selectedSong
};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReduces
});