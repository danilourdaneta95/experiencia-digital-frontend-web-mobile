import Card from 'components/core/card'
import SkeletonAvatar from 'components/customs/skeleton/Avatar'
import SkeletonButton from 'components/customs/skeleton/Button'
import SkeletonButtonBig from 'components/customs/skeleton/buttonBig'
import SkeletonButtonFullWidth from 'components/customs/skeleton/buttonFullWidth'
import SkeletonButtonLabel from 'components/customs/skeleton/ButtonLabel'
import SkeletonTag from 'components/customs/skeleton/tag'
import SkeletonTitleIcon from 'components/customs/skeleton/titleIcon'

export default function Skeleton() {
  return (
    <>
      <Card id={'Skeleton'}>
        <h6 style={{ marginBottom: '1rem' }}>Skeleton Avatar</h6>
        <SkeletonAvatar />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton Button</h6>
        <SkeletonButton />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton ButtonLabel</h6>
        <SkeletonButtonLabel />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton TitleIcon</h6>
        <SkeletonTitleIcon />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton Tag & Title</h6>
        <SkeletonTag />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton ButtonBig</h6>
        <SkeletonButtonBig />
        <h6 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Skeleton ButtonFullWidth</h6>
        <SkeletonButtonFullWidth />
      </Card>
    </>
  )
}
