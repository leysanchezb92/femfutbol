interface HeaderProps {
  color?: string
  backgroundColor?: string
}

function Header({color, backgroundColor}: HeaderProps) {
  return (
    <header style={{ backgroundColor: backgroundColor || 'white', padding: '1rem' }}>
      <h1 style={{ color: color || 'black' }}>FemFutbol</h1>
    </header>
  )
}

export default Header