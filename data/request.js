import { sanityClient } from '../sanity';

const getAllRequests = async () => {
  const query = `*[_type == "request"] {
    fName,
    lName,
    address,
    email,
    phone,
    comment,
    date
  }`;
  return  await sanityClient.fetch(query);
};

export {
  getAllRequests
}