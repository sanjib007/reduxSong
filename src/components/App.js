import React from 'react';

import SongList from './SongList';

import SongDetail from './SongDetail';



const App = () =>{
    return <div>
        <div className="row">
            <div className="col-lg-6">
                <SongList />
            </div>
            <div className="col-lg-6">
                <SongDetail />
            </div>
        </div>
        
    </div>
}

export default App;