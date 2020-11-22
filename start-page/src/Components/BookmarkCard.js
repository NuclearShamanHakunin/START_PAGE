import React from 'react';

import { Card, CardHeader, CardBody, Image } from 'grommet';

export default function BookmarkCard(props){

    let { id, url, name } = props;

    let favicon = "";
    if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(url)){
        favicon = `http://${url}/favicon.ico`
    }else{
        favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`
    }

    return(
        <Card
            style={{borderRadius:"5px"}}
            height="50px"
            width="small"
            background="#FFFFFF88"
            onClick={ ()=>{
                window.open(`http://${url}`, "_blank")
            }}
        >
            <Image
                fallback=''
                src={favicon}
                style={{width:"25px", height:"25px"}}
            />
            <CardBody>{name}</CardBody>
        </Card>
    );
}