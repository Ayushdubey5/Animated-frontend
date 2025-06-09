"use client"

import { createContext, useContext, useState } from "react"

const SiteContext = createContext(undefined)

export function SiteProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  return (
    <SiteContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        mousePosition,
        setMousePosition,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteContext() {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error("useSiteContext must be used within a SiteProvider")
  }
  return context
}
