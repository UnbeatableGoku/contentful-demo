import { gql } from '@apollo/client';

const NAVBAR_QUERY = gql`
  query navbar {
    accelerateMain(id: "3TPcjPkTJkGgbXRRTVDsHK") {
      navbarCollection(limit: 20) {
        items {
          slug
          title
          subItemCollection(limit: 10) {
            items {
              title
              slug
              subItemsCollection(limit: 10) {
                items {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;

const MAIN_BANNER = gql`
  query banner {
    bannerCollection(
      where: { bannerTitle_contains: "Main Banner" }
      order: sys_publishedAt_ASC
    ) {
      items {
        bannerTitle
        bannerUrl {
          title
          url
        }
        bannerAlt
        bannerRef
      }
    }
  }
`;

const SMALL_BANNER = gql`
  query smallbanner {
    bannerCollection(
      where: { bannerTitle_contains: "Small Banner" }
      order: sys_publishedAt_ASC
    ) {
      items {
        bannerTitle
        bannerUrl {
          title
          url
          width
          height
        }
        bannerAlt
        bannerRef
      }
    }
  }
`;

const TOP_CATEGORIES = gql`
  query category {
    accelerateMain(id: "3TPcjPkTJkGgbXRRTVDsHK") {
      topCategoriesCollection {
        items {
          title
          image {
            title
            url
          }
          alt
          categoryItem {
            title
            slug
          }
        }
      }
    }
  }
`;
const OFFER_BANNER = gql`
  query offerbanner {
    bannerCollection(
      where: { bannerTitle_contains: "Offer Banner" }
      order: sys_publishedAt_ASC
    ) {
      items {
        bannerTitle
        bannerUrl {
          title
          url
        }
        bannerAlt
        bannerRef
      }
    }
  }
`;

const FEATURED_PRODUCTS = gql`
  query feature {
    accelerateMain(id: "3TPcjPkTJkGgbXRRTVDsHK") {
      featureProductsCollection {
        items {
          title
          price
          productImage {
            title
            url
          }
        }
      }
    }
  }
`;

const FOOTER_TWO = gql`
  query getFooterLevelTwo {
    footerLevel2ContentCollection(order: sys_publishedAt_ASC) {
      items {
        title
        valueCollection {
          items {
            title
            slug
          }
        }
      }
    }
    footerLevel2LogoCollection {
      items {
        title
        footerLogo {
          title
          description
          url
        }
        logoDetails
      }
    }
    footerLevel2SocialsCollection {
      items {
        title
        dropdown
        url
      }
    }
    footerLevel2DownloadsCollection(order: sys_publishedAt_ASC) {
      items {
        title
        url
      }
    }
  }
`;

const FOOTER_THREE = gql`
  query {
    footerLevel3CopyrightsCollection {
      items {
        copyright
      }
    }
  }
`;

const FOOTER_ONE = gql`
  query newsletter {
    footerLevel1NewsletterCollection {
      items {
        title
        description
      }
    }
  }
`;
export {
  NAVBAR_QUERY,
  MAIN_BANNER,
  SMALL_BANNER,
  TOP_CATEGORIES,
  OFFER_BANNER,
  FEATURED_PRODUCTS,
  FOOTER_TWO,
  FOOTER_THREE,
  FOOTER_ONE,
};
