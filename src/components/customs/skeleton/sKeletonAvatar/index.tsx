import ContentLoader from 'react-content-loader'

interface SkeletonAvatar {
  borderRadiusCircle?: number
  widthCircle?: number
  heightCircle?: number
  borderRadiusTitle?: number
  widthTitle?: string
}

export default function SkeletonAvatar(props: SkeletonAvatar) {
  return (
    <>
      <ContentLoader
        height={props.heightCircle || 55}
        width={'100%'}
        viewBox="0 0 100% 60"
        backgroundColor={`var(--skeleton-background-color)`}
        foregroundColor={`var(--skeleton-effect-color)`}
        gradientRatio={0.4}
      >
        {/* Only SVG shapes */}
        <rect
          x="0"
          y="4"
          rx={`${props.borderRadiusCircle || 44}`}
          ry={`${props.borderRadiusCircle || 44}`}
          width={`${props.widthCircle || 44}`}
          height={`${props.heightCircle || 44}`}
        />
        <rect
          x="56"
          y="0"
          rx={`${props.borderRadiusTitle || 6}`}
          ry={`${props.borderRadiusTitle || 6}`}
          width={`${props.widthTitle || '30%'}`}
          height="14"
        />
        <rect
          x="56"
          y="19"
          rx={`${props.borderRadiusTitle || 6}`}
          ry={`${props.borderRadiusTitle || 6}`}
          width={`${props.widthTitle || '20%'}`}
          height="12"
        />
        <rect
          x="56"
          y="36"
          rx={`${props.borderRadiusTitle || 6}`}
          ry={`${props.borderRadiusTitle || 6}`}
          width={`${props.widthTitle || '30%'}`}
          height="12"
        />
      </ContentLoader>
    </>
  )
}
