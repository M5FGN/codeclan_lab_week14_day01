import React from 'react';

const Distillery = ({distillery}) => {
    return (
        <div className="component">
            <p className="name"> {distillery.name}</p>
            <p> {distillery.region}</p>
        </div>
    )
}