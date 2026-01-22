import React from 'react'
import CardHeading from '../../reusablecomponents/CardHeading'
import { ChartArea, ChevronRight, Laptop } from 'lucide-react'
import Calendarcomponent from '../../reusablecomponents/Calendarcomponent'

export default function Schedule() {
  return (
  <>
  
   <CardHeading
        title="Schedule"
        icon={<Laptop  size={16} />}
        actionText="See All"
        actionIcon={<ChevronRight size={14} />}
      />
      <Calendarcomponent />
  
  </>
  )
}
