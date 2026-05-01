const tasks = [];

const addTask = (title) => {
    tasks.push({
        id: Date.now(),
        title,
        completed: false
    });

    console.log(tasks);
}

addTask("Learn Closures");
addTask("Push to Github");