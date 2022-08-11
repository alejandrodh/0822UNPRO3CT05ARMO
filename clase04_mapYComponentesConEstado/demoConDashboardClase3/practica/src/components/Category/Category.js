import React from 'react';

function Category(props){
    console.log(props)
    return (
        <article className="card">
            <p> {props.name }</p>
        </article>
    )
}

export default Category;