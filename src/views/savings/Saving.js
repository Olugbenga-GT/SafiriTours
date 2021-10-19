import React from 'react'
import SavingForm from '../../components/savings/SavingForm'
import SavingHeader from '../../components/savings/SavingHeader'
import SavingStyle from './SavingStyle'

function Saving() {
       return (
              <SavingStyle>
                     <SavingHeader/>
                     <SavingForm/>
              </SavingStyle>
       )
}

export default Saving
