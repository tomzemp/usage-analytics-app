import React, { useState } from 'react'
import { FAVORITE_VIEWS, TOP_FAVORITES } from '../../constants/categories.js'
import { WEEK } from '../../constants/intervals.js'
import { SUM } from '../../constants/aggregations.js'
import { ALL } from '../../constants/chartTypes.js'
import { CHART_VIEW } from '../../constants/eventTypes.js'
import { PS_25 } from '../../constants/pageSizes.js'
import { ASC } from '../../constants/sortOrders.js'
import FilterFields from '../FilterFields'
import { LayoutContainer, LayoutSidebar, LayoutContent } from '../Layout'
import CategoryField from '../CategoryField'
import AppTitle from '../AppTitle'
import Visualization from '../Visualization'
import './App.css'
import createDefaultDates from './createDefaultDates.js'

const App = () => {
    const { initialStartDate, initialEndDate } = createDefaultDates()

    // State
    const [category, setCategory] = useState(FAVORITE_VIEWS)
    const [startDate, setStartDate] = useState(initialStartDate)
    const [endDate, setEndDate] = useState(initialEndDate)
    const [interval, setInterval] = useState(WEEK)
    const [aggregation, setAggregation] = useState(SUM)
    const [chartType, setChartType] = useState(ALL)
    const [eventType, setEventType] = useState(CHART_VIEW)
    const [pageSize, setPageSize] = useState(PS_25)
    const [sortOrder, setSortOrder] = useState(ASC)

    /**
     * The rendering of the different intervals in the DataValuesTable
     * depends on the props and the data being in sync. To prevent stale
     * props from being used we're tracking the stale status of interval.
     */
    const [stale, setStale] = useState(false)
    const setStaleAndInterval = interval => {
        setStale(true)
        setInterval(interval)
    }

    const isTopFavorites = category === TOP_FAVORITES

    return (
        <LayoutContainer>
            <LayoutSidebar>
                <AppTitle />
                <CategoryField category={category} setCategory={setCategory} />
                <FilterFields
                    aggregation={aggregation}
                    category={category}
                    chartType={chartType}
                    endDate={endDate}
                    eventType={eventType}
                    interval={interval}
                    pageSize={pageSize}
                    setAggregation={setAggregation}
                    setChartType={setChartType}
                    setEndDate={setEndDate}
                    setEventType={setEventType}
                    setInterval={setStaleAndInterval}
                    setPageSize={setPageSize}
                    setSortOrder={setSortOrder}
                    setStartDate={setStartDate}
                    sortOrder={sortOrder}
                    startDate={startDate}
                />
            </LayoutSidebar>
            <LayoutContent>
                <Visualization
                    aggregation={aggregation}
                    category={category}
                    chartType={chartType}
                    endDate={endDate}
                    eventType={eventType}
                    interval={interval}
                    isTopFavorites={isTopFavorites}
                    pageSize={pageSize}
                    setStale={setStale}
                    sortOrder={sortOrder}
                    stale={stale}
                    startDate={startDate}
                />
            </LayoutContent>
        </LayoutContainer>
    )
}

export default App