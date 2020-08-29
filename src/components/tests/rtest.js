import React from 'react';
import './test.css';
const Rtest = () => {
    return (
        <div className="rtest container bg-lisght shadow">
            you have 10 question that must answer . if you ready please click on
            start
            <div>
                <button
                    className="btn btn-success btn-lg shadow"
                    style={{ borderRadius: '50%' }}
                >
                    start
                </button>
            </div>
            <div className="bg-light shadow  p-5 w-50">
                <div className="text-center ">Sky</div>
                <form className="text-center mt-3 ">
                    <button
                        className="btn btn-success  mx-1 my-1"
                        type="submit"
                    >
                        remamber
                    </button>
                    <button className="btn btn-danger  mx-1 my-1" type="submit">
                        forget
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Rtest;
