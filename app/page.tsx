import Cta from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
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
        name='Activation Functions and Their Impact on Learning'
        topic='Neural Networks for Image Classification'
        subject='scince'
        duration={45}
        color='#ffda6e'
        />
        
        <CompanionCard
        id="456"
        name='Applications of Derivatives in Real Life'
        topic='Derivatives & Integrals'
        subject='Maths'
        duration={30}
        color='#e5d0ff'
        />
        
        <CompanionCard
        id="789"
        name='Verba the Vocabulary Builder'
        topic='Language'
        subject='English Literature '
        duration={30}
        color='#bde7ff'
        />
    
     </section>

     <section className=' home-section'>
       <CompanionList
        title='Recently Complete Sessions'
        companions={recentSessions}
        classNames='w-2/3 max-lg:w-full'
       />
       <Cta/>
     </section>
    </main>
  )
}

export default Page