import ContentLoader from 'react-content-loader'

interface SkeletonButtonFullWidth {
  borderRadius?: string
  width?: string
  height?: number
}

export default function SkeletonButtonFullWidth(props: SkeletonButtonFullWidth) {
  return (
    <>
      <ContentLoader
        height={props.height || `108`}
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
          rx={`${props.borderRadius || 12}`}
          ry={`${props.borderRadius || 12}`}
          width={`${props.width || `100%`}`}
          height={`${props.height || `108`}`}
        />
      </ContentLoader>
    </>
  )
}
