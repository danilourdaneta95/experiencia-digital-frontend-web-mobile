import Breadcrumb from 'components/breadcrumb'
import Layout from 'layout'
import Header from 'layout/content/header'
import SidebarRender from 'layout/content/sidebar'
import DashboardContent from 'layout/content/dashboard'
import Footerbar from 'layout/content/footerBar'
import React, { useEffect, useState } from 'react'
import MyWeek from 'layout/content/dashboard/sections/myWeek'
import TitleNavigation from 'components/core/titleNavigation'
import { ModalPopUp } from 'components/customs/modalPopUp'
import { useQuery } from '@apollo/client'
import { gqlClassWeekCalendar } from 'gql'

type StateGql = {
  loading: boolean
  error: any
  data: any
}

export default function MiSemana() {
  const [dataHorarioSemana, setDataHorarioSemana] = useState<StateGql | undefined[]>([])
  const [modalData, setModalData] = useState<any[]>([])
  const [isActiveClasses, setIsActiveClasses] = useState(false)

  const toggleState = () => setIsActiveClasses((prev) => !prev)

  const { loading, error, data } = useQuery(gqlClassWeekCalendar.queries.GET_CLASS_WEEK_CALENDAR, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
    variables: { fechaInput: '' },
  })

  useEffect(() => {
    const saveQueryState = async () => {
      await setDataHorarioSemana({ loading, error, data })
    }
    saveQueryState()
  }, [data])

  return (
    <>
      <ModalPopUp
        variant={'ClassesPopUp'}
        stateActive={isActiveClasses}
        handleClickClassesPopUp={toggleState}
        classDate={modalData[0]} // Data set on component dayWeek.tsk a set on useState array 0 = data.fecha
        classTime={`${modalData[1]} - ${modalData[2]}`} // 1 = data.horario_inicio - 2 = data.horario_fin
        titleClass={modalData[3]} // 3 = data.materia_nombre
        codeClass={modalData[4]} // 4 = data.materia_codigo
        classRoomCode={modalData[5]} // 5 = data.sala
        teacherName={modalData[6]} // 6 = data.profesor
      />

      <Layout title="Mi Semana">
        <SidebarRender />
        <Header hideGreeting={true} backgroundColor="#ffffff">
          <TitleNavigation title={'Mi Semana'} marginProps={'0'} hideXl={true} hideSm={false} />
        </Header>
        <Breadcrumb />
        <DashboardContent labelSection="Mi Semana">
          <MyWeek handleClick={toggleState} gqlData={[dataHorarioSemana]} setmodalData={setModalData} />
        </DashboardContent>
        <Footerbar />
      </Layout>
    </>
  )
}
