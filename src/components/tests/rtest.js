import React, { useEffect, useState } from 'react';
import './test.css';
import test from './../../services/fakeRTest';

const Rtest = () => {
    const [question, setQuestion] = useState([]);
    const [qTime, setQTime] = useState(1);

    useEffect(() => {
        setTimeout(function () {
            if (qTime === 2) {
                setQTime(1);
            } else {
                setQTime(2);
            }
        }, 3000);
        const tes = test();
        setQuestion(tes);
    }, [qTime]);

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
            {question.map((ques) =>
                ques.id === qTime ? (
                    <div className="bg-light shadow  p-5 w-50" key={ques.id}>
                        <div className="text-center ">{ques.word}</div>
                        <form className="text-center mt-3 ">
                            <button
                                className="btn btn-success  mx-1 my-1"
                                type="submit"
                            >
                                remamber
                            </button>
                            <button
                                className="btn btn-danger  mx-1 my-1"
                                type="submit"
                            >
                                forget
                            </button>
                        </form>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Rtest;
