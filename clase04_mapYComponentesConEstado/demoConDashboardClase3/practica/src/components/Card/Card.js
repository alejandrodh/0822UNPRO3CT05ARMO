import React from 'react';

function Card(){
    return (
        <article className="data-detail">
            <div className="card-content">
                <h4>título de ficha</h4>
                <p>datos de ficha</p>
            </div>
            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
        </article>
    )
}

export default Card