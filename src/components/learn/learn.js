import React from 'react';
import './learn.css';
const Learn = () => {
    return (
        <div className="learn">
            <div class="container">
                <h2>Learned Words Table</h2>
                <p>you can see the all of the words in the blow:</p>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>English word</th>
                            <th>meaning</th>
                            <th>score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sky</td>
                            <td>آسمان</td>
                            <td>6.2</td>
                        </tr>
                        <tr>
                            <td>sky</td>
                            <td>آسمان</td>
                            <td>6.2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-white bg-primary text-center">
                <a style={{ color: 'white' }} href="/new">
                    New Words ?
                </a>
            </div>
        </div>
    );
};

export default Learn;
