const heroes = [{
    id: 1,
    name: 'Batman'
    },{
    id: 2,
    name: 'Superman'
    }]

    const exist = (heroesArray, id) => heroesArray.find(arrValue => id === arrValue.id);

    console.log(exist(heroes,1));