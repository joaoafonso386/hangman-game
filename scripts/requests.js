const getPuzzle = async () => {

    const request = await fetch('https://random-word-api.herokuapp.com/word?number=1');

    if(request.status === 200) {
        const data = await request.json();
        return data[0];
    } else {
        throw new Error('Unable to get the puzzle')
    }

}



