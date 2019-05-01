import React from "react"
import containerStyles from "./container.module.css"

// Used for global CSS
export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)