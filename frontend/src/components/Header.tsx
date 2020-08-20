import React from 'react'

interface HeaderProps {
  heading: string
}

export const Header = ({heading}: HeaderProps) => {
  return (
    <header>
      <h1>{heading}</h1>
    </header>
  )
}