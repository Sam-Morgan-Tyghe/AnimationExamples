import { describe } from 'vitest'

// import React from 'react'
// import { render } from '../../test-utils'

// import DumbellImage from '../../assets/images/dumbells1.png'
// import DumbellImage2 from '../../assets/images/dumbells2.png'

// import SubscriptionCard from '.'

// describe('<SubscriptionCard />', () => {
//   const monthlySub = {
//     title: 'Monthly',
//     amount: 10,
//     interval: 'month',
//     annualPrice: 120,
//     saving: 0,
//     image: DumbellImage,
//   }

//   const annualSub = {
//     title: 'Annually',
//     amount: 96,
//     interval: 'year',
//     annualPrice: 96,
//     saving: 20,
//     image: DumbellImage2,
//   }

//   it('should display the correct elements', () => {
//     const { getByText } = render(<SubscriptionCard {...annualSub} />)

//     getByText('Annually')
//     getByText('/ year')
//     getByText('£96')
//     getByText('Annual price £96')
//     getByText('SAVE 20%')
//   })

//   it('should not render a save badge if monthly', () => {
//     const { queryByText } = render(<SubscriptionCard {...monthlySub} />)

//     expect(queryByText('SAVE')).toBeNull()
//   })
// })

describe('Logger', () => {
  test.todo('please pass')
})
