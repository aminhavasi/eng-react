import React, { useState } from 'react';
import './test.css';
import test from './../../services/fakeRTest';
import { httpRtestGet } from './../../services/httpTests';
import { ToastContainer } from 'react-toastify';

const Rtest = () => {
    let [testStart, setStart] = useState(false);
    let [unique, setUnique] = useState([]);
    let [question, setQuestion] = useState([]);
    let [selected, setSelected] = useState(0);
    let [endCount, setEndCount] = useState(1);

    //-random generate----------------------------

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
        const res = httpRtestGet();
        if (testStart === false) {
            const uniqueNumbers = await randomGenerator();
            await setUnique(uniqueNumbers);

            await setSelected(uniqueNumbers[0] - 1);
            await setQuestion(questions);

            console.log(unique);
            console.log(questions[unique[1]]);
        }

        setStart(!testStart);
    };

    //-end test-------------------------------
    const endTest = async () => {
        await setEndCount(1);
        setStart(!testStart);
    };
    //---------------------------------------
    const remember = async () => {
        console.log(endCount);
        if (endCount === 5) {
            await endTest();
        } else {
            setEndCount((endCount += 1));

            if (selected === 4) {
                question[unique[selected] - 1].score += 1;

                setSelected(0);
            } else {
                question[unique[selected] - 1].score += 1;
                setSelected((selected += 1));
            }
        }
    };

    const forget = async () => {
        if (endCount === 5) {
            await endTest();
        } else {
            setEndCount((endCount += 1));
            if (selected === 4) {
                question[unique[selected] - 1].score -= 1;
                setSelected(0);
            } else {
                question[unique[selected] - 1].score -= 1;
                setSelected((selected += 1));
            }
        }
    };

    return (
        <div className="rtest container bg-lisght shadow">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {testStart
                ? 'you have 10 question that must answer . if you ready please click on \
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
                question[unique[selected] - 1] ? (
                    <div className="bg-light shadow  p-5 w-50">
                        <div className="text-center ">
                            {question[unique[selected] - 1].word}
                        </div>
                        <form
                            className="text-center mt-3 "
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <button
                                className="btn btn-success  mx-1 my-1"
                                type="submit"
                                onClick={() => remember()}
                            >
                                remamber
                            </button>
                            <button
                                className="btn btn-danger  mx-1 my-1"
                                type="submit"
                                onClick={() => forget()}
                            >
                                forget
                            </button>
                        </form>
                        <span className="badge badge-pill bg-danger text-white">
                            {question[unique[selected] - 1].score}
                        </span>
                    </div>
                ) : null
            ) : null}
        </div>
    );
};

export default Rtest;
