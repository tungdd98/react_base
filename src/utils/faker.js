const faker = require("faker");

const mockApi = () => {
    return {
        movies: {
            id: faker.random.uuid(),
            name: faker.random.words(),
            director: faker.name.firstName() + " " + faker.name.lastName(),
            rating: Math.floor(Math.random() * 100 + 1) / 10
        }
    };
};
const db = {
    movies: []
};
const getFakeData = (db, mockApi, numberRecord) => {
    Object.keys(db).forEach(api => {
        db[api] = Array(numberRecord)
            .fill(null)
            .map(item => mockApi()[api]);
    });
};

getFakeData(db, mockApi, 20);
console.log(JSON.stringify(db));
