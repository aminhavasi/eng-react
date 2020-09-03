const tests = [
    { id: 1, word: 'sky', score: 0, cat: 'nature' },

    {
        id: 2,
        word: 'hand',
        score: 10,
        cat: 'body',
    },
    {
        id: 3,
        word: 'head',
        score: 14,
        cat: 'body',
    },
    {
        id: 4,
        word: 'foot',
        score: 0,
        cat: 'body',
    },
    {
        id: 5,
        word: 'eye',
        score: 12,
        cat: 'hair',
    },
];

const testQuestion = () => {
    return [...tests];
};

export default testQuestion;
