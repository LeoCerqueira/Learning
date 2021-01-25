function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log('My name is', name);
        },
    };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

// each é usado para fazer iterações, o primeiro temo é o item que vai ser lido. Sendo que 
// haverá um loop por todos os seus elementos. O segundo é a função que vai ser executada.
// funcionando como um loop.

// _.each(suspects, function(name) {
//     let suspectObj = CreateSuspectObjects(name);
//     suspectsList.push(suspectObj);
// });

// console.log(suspectsList)

function newSuspect(suspect) {
    let suspectObj = CreateSuspectObjects(suspect);
    suspectsList.push(suspectObj);
}




const _ = {};

_.each = function(list, callback) {


    if (Array.isArray(list)) {

        for (var i = 0; i < list.length; i++) {

            callback(list[i], i, list)


        }
    } else {

        for (var key in list) {

            callback(list[key], key, list)

        }
    }
}

_.each(['sally', 'georgie', 'porgie', 'sarah','noah']),

    function(name, i, list) {

        if (list[i + 1]) {

            console.log(name, 'is younger than', list[i + 1])

        } else {

            console.log(name, 'is the oldest')

        }
    }