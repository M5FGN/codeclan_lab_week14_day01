import React from 'react';
import {Link} from 'react-router-dom';

const Whiskey = ({whiskey}) => {

    if (!whiskey){
        return "Loading..."
    }

    const url = "/pirates/" + pirate.id;

    return (<>
    <Link to = {url} className='name'>
        {whiskey}
    </Link>

}