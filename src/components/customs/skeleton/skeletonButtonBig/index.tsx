import ContentLoader from 'react-content-loader'

interface SkeletonButtonBig {
  borderRadius?: string
  width?: number
  height?: number
}

export default function SkeletonButtonBig(props: SkeletonButtonBig) {
  return (
    <>
      <ContentLoader
        height={props.height || 56}
        width={'100%'}
        viewBox="0 0 100% 60"
        backgroundColor={`var(--skeleton-background-color)`}
        foregroundColor={`var(--skeleton-effect-color)`}
        gradientRatio={0.4}
      >
        {/* Only SVG shapes */}
        <rect
          x="0"
          y="0"
          rx={`${props.borderRadius || 32}`}
          ry={`${props.borderRadius || 32}`}
          width={`${props.width || 174}`}
          height={`${props.height || 56}`}
        />
      </ContentLoader>
    </>
  )
}
