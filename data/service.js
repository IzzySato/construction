import { sanityClient } from '../sanity';

const getServiceData = async () => {
  const aboutQuery = `*[_type == "service"]  {
    title,
    serviceImg
  }`;
  return await sanityClient.fetch(aboutQuery);
};

export {
  getServiceData
}