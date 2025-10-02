import Cta from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>
     <section className='home-section'>
        <CompanionCard
        id="123"
        name=''
        />
        <CompanionCard/>
        <CompanionCard/>
     </section>

     <section className=' home-section'>
       <CompanionList/>
       <Cta/>
     </section>
    </main>
  )
}

export default Page