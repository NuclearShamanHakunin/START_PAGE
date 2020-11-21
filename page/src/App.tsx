import React, { useEffect } from 'react';
import './App.css';
import BookmarkAccordion from './Components/BookmarkAccordion'
import defaultBookmarkData from './Data/bookmarks.json'

import { useCookies } from 'react-cookie'

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
    //TODO: add controls for adding stuff to json (and to the page)
    //TODO: save our bookmark json when edited

    const [cookies, setCookie, removeCookie] = useCookies(['bookmarks']);
    useEffect(() => {
        if(cookies.bookmarks === undefined || cookies.bookmarks === ""){
            setCookie('bookmarks', defaultBookmarkData);
        }
    }, []);

    const bookmarkArray = cookies.bookmarks.map((data: BookmarkFolder) => {
        return { id: data.id, name: data.name, bookmarkArray: data.bookmarkArray }
    });

    return (
        <div
            className="App"
            style={{
                width: "80%", marginLeft: "10%", marginTop: "4%"
            }}
        >
            <BookmarkAccordion folderArray={bookmarkArray} />
        </div>
    );
}

export default App;
