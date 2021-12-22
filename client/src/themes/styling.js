export const baseStyling = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '100%',
  overflowX: 'hidden',
  paddingLeft: '20px',
  paddingRight: '20px',
}

export const responsiveLayouts = (isMobile) => {
  const defaultLayout = {
    heading: {
      size: "3xl",
      padding: "20px"
    }
  }
  const mobileLayout = {
    heading: {
      size: 'xl',
      padding: '10px',
    }
  }
  return isMobile ? mobileLayout : defaultLayout
}