import React, { useState } from 'react';
import './test.css';
import test from './../../services/fakeRTest';

const Rtest = () => {
    let [testStart, setStart] = useState(false);
    let [unique, setUnique] = useState([]);

    //-random generate

    const randomGenerator = () => {
        let uniqueNumber = [];
        let index = 0;
        while (index < 5) {
            let number = Math.floor(Math.random() * 5 + 1);
            if (uniqueNumber.length === 0) {
                uniqueNumber.push(number);
                index++;
            } else {
                let st = uniqueNumber.find((value) => {
                    return value === number;
                });
                if (!st) {
                    index++;
                    uniqueNumber.push(number);
                }
            }
        }
        return uniqueNumber;
    };
    //-------------------------

    const start = async () => {
        const questions = await test();
        if (testStart === false) {
            const uniqueNumbers = await randomGenerator();
            await setUnique(uniqueNumbers);
            console.log(unique);
            console.log(questions[unique[1]]);
        }

        setStart(!testStart);
    };
    return (
        <div className="rtest container bg-lisght shadow">
            {testStart
                ? ' you have 10 question that must answer . if you ready please click on \
               start'
                : 'if you want stop this test click on stop'}
            <div>
                <button
                    className="btn btn-success btn-lg shadow"
                    style={{ borderRadius: '50%' }}
                    onClick={() => start()}
                >
                    {testStart ? 'stop' : 'start'}
                </button>
            </div>
            {testStart === true ? (
                <div className="bg-light shadow  p-5 w-50">
                    <div className="text-center "></div>
                    <form
                        className="text-center mt-3 "
                        onSubmit={(e) => e.preventDefault()}
                    >
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
                    <span className="badge badge-pill bg-danger text-white">
                        10
                    </span>
                </div>
            ) : null}
        </div>
    );
};

export default Rtest;
