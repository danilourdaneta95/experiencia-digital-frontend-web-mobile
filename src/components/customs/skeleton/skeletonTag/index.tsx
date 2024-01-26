import ContentLoader from 'react-content-loader'

interface SkeletonTag {
  borderRadius?: string
  width?: number
  height?: number
}

export default function SkeletonTag(props: SkeletonTag) {
  return (
    <>
      <ContentLoader
        height={props.height || 26}
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
          rx={`${props.borderRadius || 16}`}
          ry={`${props.borderRadius || 16}`}
          width={`${props.width || 130}`}
          height={`${props.height || 26}`}
        />
      </ContentLoader>
    </>
  )
}
