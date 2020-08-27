import React from 'react';
import './new.css';
const New = () => {
    return (
        <div className="new">
            <div
                className=""
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <form className="mt-5 text-white">
                    <label className="mr-1">please enater a new word:</label>
                    <input className="form-group" placeholder="new word?" />
                    <input className="form-group ml-1" placeholder="معنی?" />
                    <button
                        className="btn btn-sm btn-success ml-1"
                        type="submit"
                    >
                        Record
                    </button>
                </form>
            </div>
            <div className="text-white bg-primary text-center">
                <a style={{ color: 'white' }} href="/learn">
                    learned words list
                </a>
            </div>
        </div>
    );
};

export default New;
