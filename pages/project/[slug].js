import { sanityClient } from '../../sanity';
import Image from '../../components/Image';
import styles from '../../styles/Project.module.css';

const Project = ({
  title,
  mainImage
}) => {
  return (
    <div className={styles.prjContainer}>
      <h1 className={styles.projTitle}>{title}</h1>
      <Image image={mainImage}/>
    </div>
  )
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[_type == "project" && slug.current == $pageSlug][0] {
    title,
    mainImage
  }`
  const property = await sanityClient.fetch(query, {pageSlug});

  if (!property) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        title: property.title,
        mainImage: property.mainImage
      }
    }
  }
};

export default Project;
