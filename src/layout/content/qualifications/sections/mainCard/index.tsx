import Card from 'components/core/card'
import Tabs from 'components/customs/tabs'
import TabContent from 'components/customs/tabs/section'
import CurrentPeriod from './currentPeriod'
import Historical from './historical'

const QualificacionsCard = () => {
  return (
    <>
      <Card>
        <Tabs>
          <TabContent title="Período actual">
            <CurrentPeriod />
          </TabContent>
          <TabContent title="Históricas">
            <Historical />
          </TabContent>
        </Tabs>
      </Card>
    </>
  )
}

export default QualificacionsCard
