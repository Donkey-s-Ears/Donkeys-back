import { User } from '../models/models.user';

const createUserTable = (): any => {
    User.sync({ force: true })
        .then(() => console.log('Success: Create User Table ✅'))
        .catch((error) => console.log(`Fail: ${error.message} ⛔`));
};

export default createUserTable;
