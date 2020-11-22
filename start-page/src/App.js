import React, {useEffect} from 'react';
import {
    Box,
    Grommet,
    ResponsiveContext,
} from 'grommet';

import defaultBookmarkData from './Data/bookmarks.json'
import BookmarkAccordion from './Components/BookmarkAccordion'

import { useCookies } from 'react-cookie'

const App = () => {
    const theme = {
        global: {
            colors: {
                brand: '#228BE6',
            },
            font: {
                family: 'Roboto',
                size: '14px',
                height: '20px',
            },
        },
    };

    const [cookies, setCookie] = useCookies(['bookmarks']);
    useEffect(() => {
        if(cookies.bookmarks === undefined || cookies.bookmarks === ""){
            setCookie('bookmarks', defaultBookmarkData);
        }
    }, [cookies.bookmarks, setCookie]);
    const bookmarkArray = cookies.bookmarks.map( data => {
        return { id: data.id, name: data.name, bookmarkArray: data.bookmarkArray }
    });

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box style={{width:"80%", marginLeft:"10%", marginTop:"3.5%"}}>
                        <BookmarkAccordion folderArray={bookmarkArray} animate={true} />
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default App;
