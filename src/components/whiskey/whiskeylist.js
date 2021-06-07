import React from 'react';
import Whiskey from './whiskey.js';

const WhiskeyList = ({whiskey}) => {

    if (whiskey.length === 0) {
        return (<p>Loading ...</p>)
    }


const whiskeyNodes = whiskey.map((pirate, index) => {
    return (
        <li key{index} className="component-item">
            <div className="component">
<Whiskey whiskey = {whiskey} />
            </div>
        </li>
    )
})

return (
    <ul className="component-list">
        {whiskeyNodes}
    </ul>
)

}

export default WhiskeyList;