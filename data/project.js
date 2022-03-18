import { sanityClient } from '../sanity';

const getAllProjects = async () => {
  const query = `*[_type == "project"] {
    mainImage,
    mainImgDisplayLanding,
    slug,
    title
  }`
  return await sanityClient.fetch(query);
};

export {
  getAllProjects
}