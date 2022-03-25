import { sanityClient } from '../sanity';

const getAboutData = async () => {
  const aboutQuery = `*[_type == "about"]  {
    title,
    desc,
    aboutImg
  }`;
  return await sanityClient.fetch(aboutQuery);
};

export {
  getAboutData
}