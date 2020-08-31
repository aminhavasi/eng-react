const tests = [
    { id: 1, word: 'sky', score: 0, cat: 'nature' },

    {
        id: 2,
        word: 'hand',
        score: 10,
        cat: 'body',
    },
];

const testQuestion = () => {
    return [...tests];
};

export default testQuestion;
