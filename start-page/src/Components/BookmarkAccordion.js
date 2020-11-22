import React, { useContext } from 'react';

import { 
    Accordion,
    AccordionPanel,
    Box,
    Grid,
    ResponsiveContext
} from 'grommet';

import BookmarkCard from './BookmarkCard'

export default function BookmarkAccordion(props){
    const size = useContext(ResponsiveContext);

    return (
        <Accordion>
            {props.folderArray.map(folder => {
                return (
                    <AccordionPanel label={folder.name} background="#FFFFFFBF" style={{ height: "50px" }}>
                        <Box 
                            background="#FFFFFF68"
                        >
                            <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small" style={{margin:"25px"}}>
                                {folder.bookmarkArray.map(bookmark => {
                                    return (
                                        <Box>
                                            <BookmarkCard id={bookmark.id} url={bookmark.url} name={bookmark.name}/>
                                        </Box>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </AccordionPanel>
                );
            })}
        </Accordion>
    );
}