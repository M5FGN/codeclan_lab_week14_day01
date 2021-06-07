import React from 'react';
import Distillery from './distillery.js';

const DistilleryList = ({distilleries}) => {

 const distilleryNodes = distillery.map((distillery) => {

    return (<li key={distillery.id} className="component-item"> 
    <Distillery distillery={distillery} />
    </li>
    )
})

return (

    <ul className="component-list">
        {distilleryNodes}
    </ul>
)
}

export default DistilleryList;