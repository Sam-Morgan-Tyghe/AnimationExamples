import { useState } from 'react'
import ProgramFilter from '~/components/ProgramFilter'

import { DetailsAndCommunity } from './DetailsAndCommunity'
import { ProgramVideoProgress } from './ProgramVideoProgress'

export const SingleContentProgram = () => {
  const tabs = ['Workouts', 'Details & Community']
  const [filterTab, setFilterTab] = useState(tabs[0])

  return (
    <>
      <ProgramFilter
        activeProgramFilter={filterTab}
        setActiveProgramFilter={setFilterTab}
        types={['Workouts', 'Details & Community']}
        flexStart={true}
      />
      {filterTab === 'Workouts' ? (
        <ProgramVideoProgress />
      ) : (
        <DetailsAndCommunity />
      )}
    </>
  )
}
