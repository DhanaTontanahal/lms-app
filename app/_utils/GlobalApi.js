import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists {
        name
        demoUrl
        author
        id
        free
        description
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            youtubeUrl
          }
        }
        totalChapters
        sourceCode
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        url
        banner {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export default {
  getAllCourseList,
  getSideBanner,
};
