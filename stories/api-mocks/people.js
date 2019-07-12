import faker from 'faker';
import { many } from './helpers';

// eslint-disable-next-line
export const createPerson = ({
    name = faker.name.findName(), key, avatar = `https://i.pravatar.cc/300?u=${faker.random.uuid()}`
} = {}) => {
    const person = {
        name,
        avatar,
        key: key || faker.helpers.slugify(name).toLowerCase(),
        username: key || faker.helpers.slugify(name).toLowerCase()
    };
    return person;
};


export const createPersonsList = many(createPerson);
