import ContentLoader from 'react-content-loader'

interface SkeletonTitleIcon {
  borderRadiusCircle?: number
  widthCircle?: number
  heightCircle?: number
  borderRadiusTitle?: number
  widthTitle?: string
}

export default function SkeletonTitleIcon(props: SkeletonTitleIcon) {
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
          rx={`${props.borderRadiusCircle || 44}`}
          ry={`${props.borderRadiusCircle || 44}`}
          width={`${props.widthCircle || 44}`}
          height={`${props.heightCircle || 44}`}
        />
        <rect
          x="56"
          y="7"
          rx={`${props.borderRadiusTitle || 14}`}
          ry={`${props.borderRadiusTitle || 14}`}
          width={`${props.widthTitle || '30%'}`}
          height="30"
        />
      </ContentLoader>
    </>
  )
}
