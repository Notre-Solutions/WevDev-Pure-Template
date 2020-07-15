import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

const download = ({ data }) => {
  console.log(data);
  const img1 = data.markdownRemark.frontmatter.downloadPage.logo01;
  const img2 = data.markdownRemark.frontmatter.downloadPage.logo02;
  const { title, paragraph } = data.markdownRemark.frontmatter.downloadPage;
  return (
    <Layout>
      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <div class="section-container-spacer">
                <div class="text-center">
                  <h1>{title}</h1>
                </div>
                <p>{paragraph}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 ">
              <div class="download-card ">
                <p>
                  Bibendum enim facilisis gravida <br />
                  neque convallis a cras semper{" "}
                </p>
                <br />
                <a href="https://itunes.apple.com/fr/genre/mac/" title="">
                  {" "}
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img1.childImageSharp.fluid}
                  />
                </a>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="download-card">
                <p>
                  Bibendum enim facilisis gravida <br />
                  neque convallis a cras semper{" "}
                </p>
                <br />
                <a href="https://play.google.com/store/apps" title="">
                  {" "}
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img2.childImageSharp.fluid}
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="text-center">
                <blockquote>
                  <p>
                    “Eu augue ut lectus arcu bibendum at varius”
                    <small class="">Francois Mathieu</small>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default download;

export const pageQuery = graphql`
  query DownloadPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        downloadPage {
          title
          paragraph
          logo01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
