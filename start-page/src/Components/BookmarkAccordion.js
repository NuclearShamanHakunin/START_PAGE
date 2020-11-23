import React, { useContext } from 'react';

import { 
    Accordion,
    AccordionPanel,
    Box,
    Grid,
    ResponsiveContext,
    Card
} from 'grommet';

import { AddCircle } from "grommet-icons"

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
                            <Grid columns={size !== 'small' ? 'small' : '100%'} gap="xsmall" style={{margin:"15px"}}>
                                {folder.bookmarkArray.map(bookmark => {
                                    return (
                                        <BookmarkCard id={bookmark.id} url={bookmark.url} name={bookmark.name}/>
                                    );
                                })}
                                <Card
                                    style={{borderRadius:"5px", alignItems:"center", justifyContent:"center"}}
                                    height="50px"
                                    width="xsmall"
                                    background="#FFFFFF88"
                                    onClick={ ()=>{
                                        alert("NEW!")
                                    }}
                                >
                                    <AddCircle size="40px"/>
                                </Card>
                            </Grid>
                            
                        </Box>
                    </AccordionPanel>
                );
            })}
                <Box 
                    background="#FFFFFFBF"
                    style={{ height: "50px", alignItems:"center", justifyContent:"center" }}
                    onClick={ ()=>{
                        alert("NEW!")
                    }}
                >
                    <AddCircle size="40px"/>
                </Box>
        </Accordion>
    );
}