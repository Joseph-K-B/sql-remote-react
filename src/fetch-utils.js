// const URL = 'https://frozen-tor-10811.herokuapp.com/';
 const URL = 'http://localhost:3001/'
//GET
export const getChords = async () => {
    const resp = await fetch(`${URL}chords`);
    const data = await resp.json();
    console.log(data)
    return data;
};

export const getChordId = async (id) => {
    const resp = await fetch(`${URL}chords/${id}`)
    const data = await resp.json();
    return data;
}

export const getClasses = async () => {
    const resp = await fetch(`${URL}classes`)
    const data = await resp.json();
    return data;
}

//PUT
export const putChord = async (chordObj) => {
    const resp = await fetch(`${URL}chords/${chordObj.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(chordObj)
    });
    const data = await resp.json();
    console.log(data);
    return data;
};

//POST
export const createChord = async (chordObj) => {
    const resp = await fetch(`${URL}chords/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(chordObj)
    });
    const data = await resp.json();
    return data;
    
};