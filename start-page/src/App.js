import React, { useEffect } from 'react';
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
            colors: {
                focus: "#00000000"
            }
        },
        accordion: {
            border: undefined,
            icons: {
                color:"#228BE6"
            },
            hover: {
                heading: {
                    color:"#228BE6"
                }
            }
        }
    };

    const [cookies, setCookie, removeCookie] = useCookies(['bookmarks']);

    removeCookie("bookmarks")

    useEffect(() => {
        console.log(cookies.bookmarks)
    }, [])

    setCookie('bookmarks', defaultBookmarkData);



    const bookmarkArray = cookies.bookmarks.map(data => {
        return { id: data.id, name: data.name, bookmarkArray: data.bookmarkArray }
    });

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box style={{ width: "80%", marginLeft: "10%", marginTop: "3.5%" }}>
                        <BookmarkAccordion folderArray={bookmarkArray} animate={true} />
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default App;
