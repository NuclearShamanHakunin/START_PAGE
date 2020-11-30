import React from 'react';

import { Card, CardHeader, CardBody, Image, Button } from 'grommet';
import { Close } from "grommet-icons"
import linkImage from '../Images/link.png'

export default function BookmarkCard(props) {

    let { id, url, name } = props;

    let favicon = "";
    if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(url)) {
        favicon = `http://${url}/favicon.ico`
    } else {
        favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`
    }

    return (
        <Card
            style={{
                borderRadius: "5px"
            }}
            hoverIndicator
            height="50px"
            background="#FFFFFF88"
            onClick={() => {
                window.open(`http://${url}`, "_blank")
            }}
        >
            <CardHeader direction="row" height="17px">
                <Image
                    fallback={linkImage}
                    src={favicon}
                    style={{
                        width: "18px",
                        height: "18px",
                        marginRight: "5px",
                        position:"relative",
                        top: "4px",
                        left: "4px",
                        borderRadius:"15%"
                    }}
                    opacity="false"
                />
                <Button 
                    plain={true} 
                    icon={
                        <Close style={{
                            width: "15px",
                            height: "15px",
                            borderRadius:"50%"
                        }}/>
                    } 
                    onClick={(e) => {
                        e.stopPropagation();
                        alert("DELETE!")
                    }} 
                    style={{
                        width: "20px",
                        height: "20px",
                        position:"relative",
                        top:"2px"
                    }}
                />
            </CardHeader>
            <CardBody style={{textAlign:"center"}}>
                {name}
            </CardBody>
        </Card >
    );
}