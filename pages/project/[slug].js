import { sanityClient } from '../../sanity';
import Image from '../../components/Image';
import styles from '../../styles/Project.module.css';


const Project = ({
  title,
  images,
  comment,
  customerName
}) => {
  return (
    <div className={styles.prjContainer}>
      <h1 className={styles.projTitle}>{title}</h1>
      <Image images={images}/>
      <div className={styles.commentSection}>
        <h2 className={styles.subTitle}>Customer Comment:</h2>
        <p>{comment}</p>
        <p>by {customerName}</p>
      </div>
    </div>
  )
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[_type == "project" && slug.current == $pageSlug][0] {
    title,
    images,
    comment,
    customerName
  }`
  const project = await sanityClient.fetch(query, {pageSlug});

  if (!project) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        title: project.title,
        images: project.images,
        comment: project.comment,
        customerName: project.customerName
      }
    }
  }
};

export default Project;
