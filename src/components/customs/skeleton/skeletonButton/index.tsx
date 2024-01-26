import ContentLoader from 'react-content-loader'

interface SkeletonButton {
  borderRadiusCircle?: number
  widthCircle?: number
  heightCircle?: number
  borderRadiusTitle?: number
  widthTitle?: string
}

export default function SkeletonButton(props: SkeletonButton) {
  return (
    <>
      <ContentLoader
        height={props.heightCircle || 44}
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
          rx={`${props.borderRadiusCircle || 6}`}
          ry={`${props.borderRadiusCircle || 6}`}
          width={`${props.widthCircle || 44}`}
          height={`${props.heightCircle || 44}`}
        />
      </ContentLoader>
    </>
  )
}
