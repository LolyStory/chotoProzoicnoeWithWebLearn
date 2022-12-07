import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//     .then((data) => data.json())
//     .then((body) => {
//         const zalupa = body.reduce(
//             (acc, element) => ({
//                 ...acc,
//                 [element.name]: element.address?.geo,
//             }),
//             {}
//         );
//         return console.log(zalupa);
//     });
// fetch(url)
//     .then

async function Todoshki(url) {
    const dataJson = await fetch(url);
    const data = await dataJson.json();

    // const sortByUserTodo = data.reduce((acc, element) => {
    //     acc[element.userId] = {
    //         ...acc[element.userId],
    //         [`Task ${element.id}`]: element?.title,
    //         [`Task ${element.id} completed?`]: element.completed,
    //     };
    //     return acc;
    // });

    const sortByUserTodo = data.reduce((acc, elem) => {
        acc[elem.userId - 1] ? null : (acc[elem.userId - 1] = []);
        acc[elem.userId - 1].push({
            [elem.id]: elem?.title,
            isCompleted: elem.completed,
        });

        return acc;
    }, []);

    return console.log(sortByUserTodo);
}

Todoshki(url);
