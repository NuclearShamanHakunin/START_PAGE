import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        }
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
                        expanded={expanded === `panel${folder.id}`}
                        onChange={handleChange(`panel${folder.id}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${folder.id}-content`}
                            id={`panel-${folder.id}-header`}
                        >
                            <Typography>{folder.name}</Typography>
                        </AccordionSummary>
                        {folder.bookmarkArray.map((bookmark : Bookmark) => {
                            return(
                                <Typography>{`${bookmark.name} `}</Typography>
                            )
                        })}
                    </Accordion>
                )
            })}
        </div>
    );
}