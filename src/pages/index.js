import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "@fontsource/ibm-plex-sans"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />

      <div
        className="divider-bottom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "var(--heading-color)" }}>Latest Posts</h2>
        {/* <a href="#" style={{ color: "var(--heading-color)", fontSize: 20 }}>
          Read all posts
        </a> */}
      </div>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div style={{ lineHeight: 0 }}>
                  <h3>
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      style={{ color: "var(--blog-title)" }}
                    >
                      <span
                        itemProp="headline"
                        style={{ fontFamily: "IBM Plex Sans" }}
                      >
                        {title}
                      </span>
                    </Link>
                  </h3>
                  <span
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontSize: 20,
                      color: "var(--link-color)",
                    }}
                  >
                    {post.frontmatter.date}
                  </span>
                </div>
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
