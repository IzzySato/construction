import { sanityClient } from '../sanity';

const getHomeData = async () => {
  const homeQuery = `*[_type == "home"]  {
    mainImg
  }`;
  return await sanityClient.fetch(homeQuery);
};

export {
  getHomeData
}