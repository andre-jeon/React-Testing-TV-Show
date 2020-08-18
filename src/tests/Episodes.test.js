import React from 'react'
import { render } from '@testing-library/react'
import Episodes from '../components/Episodes'

const mockData = {
    image: { 
        original: 'logo192.png' 
    },
    name:'episode',
    summary:'summary',
    season: 'season',
    _embedded: {
        episodes: [
            {
                id:'episode',
                image: {
                medium: 'logo192.png'
                },
                name:'episode',
                number:'number',
                summary:'summary',
                runtime:'runtime',
                season: 'season' 
            },
            {
                id:'episode2',
                image: {
                medium: 'logo192.png'
                },
                name:'episode',
                number:'number',
                summary:'summary',
                runtime:'runtime',
                season: 'season' 
            }
        ]  
    }
}

test('render components', () => {
    render(<Episodes episodes={[]} />)
})

test('component render with the data', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)

    expect(queryAllByTestId('show')).toHaveLength(0)
    expect(queryAllByTestId('show')).toStrictEqual([])

    rerender(<Episodes episodes={mockData}/>)
})