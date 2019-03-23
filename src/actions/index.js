export const selectSong = song => {

    return {
        type: 'Song_selected',
        payload : song
    };
};

