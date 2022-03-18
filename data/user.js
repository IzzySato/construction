import { sanityClient } from '../sanity';

const getAllUsers = async () => {
  const userQuery = `*[_type == "user"] {
    email,
    fName,
    lName,
    group
  }`;
  return await sanityClient.fetch(userQuery);
};

export {
  getAllUsers
}