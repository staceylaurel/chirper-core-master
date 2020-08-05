import * as fs from 'fs';

//defines the object of objects structure for chirps
/*
{
    1: {
        ...
    },
    2: {
        ...
    }
    nextid: 3;
}
*/
interface IChirps {
    [key: number]: IChirp;
    nextid: number;
}

//students can define their chirp's structure
/*
{
    name: 'herp',
    text: 'derp
}
*/
interface IChirp {
    name: string;
    text: string;
}

let chirps: IChirps = { nextid: 0 };



if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json').toString());
}

let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
};

//the route param, prolly req.params.id is a string ...
//so students need to parse the string param into a number
//Number(req.params.id) for example
let getChirp = (id: number) => {
    return Object.assign({}, chirps[id]); //create a copy and return it
};

let createChirp = (chirp: IChirp) => {
    let next = chirps.nextid++;
    chirps[next] = chirp;
    writeChirps();
};

let updateChirp = (id: number, chirp: IChirp) => {
    chirps[id] = chirp;
    writeChirps();
};

let deleteChirp = (id: number) => {
    delete chirps[id];
    writeChirps();
};

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

export default {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};