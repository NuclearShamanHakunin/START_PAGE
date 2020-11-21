import React from 'react';
import './App.css';
import BookmarkAccordion from './Components/BookmarkAccordion'
import bookmarkData from './Data/bookmarks.json'

interface Bookmark {
    id: number,
    name: string,
    url: string
}
interface BookmarkFolder {
    id: number,
    name: string,
    bookmarkArray: Bookmark[];
}

function App() {
    //TODO: populate accordion with stuff
    //TODO: add controls for adding stuff to json (and to the page)
    //TODO: save our bookmark json, load from other json

    const bookmarkArray = bookmarkData.map((data: BookmarkFolder) => {
        return {id: data.id, name: data.name, bookmarkArray: data.bookmarkArray}
    });

    return (
        <div
            className="App"
            style={{
                width: "80%", marginLeft: "10%", marginTop: "4%"
            }}
        >
            <BookmarkAccordion folderArray={bookmarkArray}/>
        </div>
    );
}

export default App;
