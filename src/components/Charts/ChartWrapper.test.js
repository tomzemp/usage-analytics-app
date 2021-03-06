import React from 'react'
import { shallow } from 'enzyme'
import ChartWrapper from './ChartWrapper.js'

describe('<ChartWrapper>', () => {
    it('renders without errors', () => {
        const props = {
            title: 'Title',
            subtitle: 'Subtitle',
            children: <div>Children</div>,
        }

        shallow(<ChartWrapper {...props} />)
    })
})
