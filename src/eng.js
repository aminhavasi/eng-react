import React from 'react';
import './eng.css';
const Eng = () => {
    return (
        <div className="eng">
            <h1 className="text-center"> English Words</h1>
            <div className="eng-main">
                <div>
                    <a className="mx-1 btn btn-small btn-success">new word</a>
                    <a className="mx-1 btn btn-small btn-success">
                        past words
                    </a>{' '}
                </div>
            </div>
        </div>
    );
};

export default Eng;
