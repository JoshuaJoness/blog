/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div /* className="bio" */>
      <img src="/leap_of_faith.png" className="splash-image" />

      <section className="centered-text">
        <span
          style={{
            fontSize: 48,
            fontFamily: "sans-serif",
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
        >
          Hi.
        </span>
        <p
          style={{
            color: "var(--bio-text)",
            marginBottom: 100,
            fontFamily: "IBM Plex Sans",
          }}
        >
          I'm Joshua Jones, a software engineer passionate about building for
          the web.
        </p>
      </section>

      {/* <div className="divider" /> */}

      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      {/* {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )} */}
    </div>
  )
}

export default Bio
