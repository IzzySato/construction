import { sanityClient } from '../sanity';

//&& group._ref == ^._id

const getAllUsers = async () => {
  const userQuery = `*[_type == "user"]  {
    _id,
    email,
    fName,
    lName,
    "userPermission" : *[_type == "group"] {
      permissionName,
      permission
    }
  }`;
  return await sanityClient.fetch(userQuery);
};

export {
  getAllUsers
}