import React from 'react';

const Link = ({link}) => {
    return (
       <li>
        <a href={link.path}>{link.name}</a>
       </li>
    );
};

export default Link;