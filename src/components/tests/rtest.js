import React, { useEffect, useState } from 'react';
import './test.css';
import test from './../../services/fakeRTest';

const Rtest = () => {
    const [question, setQuestion] = useState([]);
    const [qTime, setQTime] = useState(0);
    const [usedNumber, setUsedNumber] = useState([]);

    const remember = (id) => {
        let questions = [...question];
        const ques = questions.find((element) => {
            if (element.id === id) return id;
        });
        ques.score++;
    };
    const forget = (id) => {
        let questions = [...question];
        const ques = questions.find((element) => {
            if (element.id === id) return id;
        });
        ques.score--;
    };

    const timeInterval = () => {
        let usedNumbers = [...usedNumber];
        let questions = [...question];
        let randomNumber = () => {
            let index = 0;
            while (index < questions.length) {
                let number = Math.floor(Math.random() * questions.length + 1);
                if (usedNumbers.length === 0) {
                    usedNumbers.push(number);
                    setUsedNumber(usedNumbers);
                    index++;
                } else {
                    let st = usedNumbers.find((value) => {
                        return value === number;
                    });

                    if (!st) {
                        index++;

                        usedNumbers.push(number);
                        setUsedNumber(usedNumbers);
                    }
                }
            }
        };
        randomNumber();
        console.log(usedNumbers);

        if (question.length >= 0) {
            setTimeout(function () {
                if (qTime === 2) {
                    setQTime(1);
                } else {
                    setQTime(2);
                }
            }, 3000);
        }
    };
    useEffect(() => {
        timeInterval();

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
                        <form
                            className="text-center mt-3 "
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <button
                                className="btn btn-success  mx-1 my-1"
                                type="submit"
                                onClick={() => remember(ques.id)}
                            >
                                remamber
                            </button>
                            <button
                                className="btn btn-danger  mx-1 my-1"
                                type="submit"
                                onClick={() => forget(ques.id)}
                            >
                                forget
                            </button>
                        </form>
                        <span>{ques.score}</span>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Rtest;
