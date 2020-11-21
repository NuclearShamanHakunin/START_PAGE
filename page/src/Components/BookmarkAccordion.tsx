import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import {Button, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        accordion: {
            opacity: 0.8
        },
        accordionContent: {
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap"
        },
        buttonCard: {
            width: 180,
            height: 50,
            margin: "5px",
            flexDirection: "row",
            display: "flex",
            background: "#A9A9A9",
            justifyContent: "left",
        },
    }),
);

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

interface BookmarkAccordionProps {
    folderArray: BookmarkFolder[];
}

export default function BookmarkAccordion(props: BookmarkAccordionProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {props.folderArray.map((folder: BookmarkFolder) => {
                return (
                    <Accordion
                        expanded={expanded === `panel${folder.id}-header`}
                        onChange={handleChange(`panel${folder.id}-header`)}
                        className={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${folder.id}-content`}
                            id={`panel-${folder.id}-header`}
                        >
                            <Typography>{folder.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails  className={classes.accordionContent}>
                            {folder.bookmarkArray.map((bookmark: Bookmark) => {
                                return (
                                    <Button 
                                        className={classes.buttonCard}
                                        onClick={() => {
                                            window.open(`http://${bookmark.url}`, "_blank")
                                        }}
                                    >
                                        <img
                                            alt={undefined} 
                                            src={`http://${bookmark.url}/favicon.ico`}
                                        />
                                        <Typography style={{marginLeft:"5px"}}>{`${bookmark.name} `}</Typography>
                                    </Button>
                                )
                            })}
                        </AccordionDetails >
                    </Accordion>
                )
            })}
        </div>
    );
}