import * as React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./themeToggler"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  const header = (
    <div
      className="divider-bottom"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 className="main-heading">
        <Link to="/" style={{ color: "var(--heading-color)", fontSize: 30 }}>
          {title}
        </Link>
      </h1>
      <Link style={{ color: "var(--link-color)" }}>
        <ThemeToggle />
      </Link>
    </div>
  )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="divider-top" style={{ color: "#7f8ea3" }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a
          href="http://joshuajones.io/"
          target="_blank"
          style={{ color: "#7f8ea3", fontSize: 16, color: "#9f7aea" }}
        >
          joshuajones.io
        </a>
      </footer>
    </div>
  )
}

export default Layout
