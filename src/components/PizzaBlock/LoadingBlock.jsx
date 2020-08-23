import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="123" r="119" />
      <rect x="0" y="261" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="310" rx="9" ry="9" width="280" height="81" />
      <rect x="0" y="413" rx="6" ry="6" width="90" height="33" />
      <rect x="130" y="407" rx="25" ry="25" width="150" height="44" />
    </ContentLoader>
  )
}

export default LoadingBlock
