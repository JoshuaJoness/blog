import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export default function ThemeToggle() {
  const [toggle, setToggle] = useState(false)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          style={{ color: "var(--link-color)" }}
          onClick={() => {
            setToggle(!toggle)
            toggleTheme(toggle ? "dark" : "light")
          }}
        />
      )}
    </ThemeToggler>
  )
}
