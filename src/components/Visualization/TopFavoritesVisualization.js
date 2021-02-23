import React from 'react'
import PropTypes from '@dhis2/prop-types'
import { TopFavoritesTable } from '../Tables/index.js'
import { TopFavoritesQuery } from '../Queries/index.js'

const fields = ['position', 'name', 'views', 'id', 'created']

const TopFavoritesVisualization = ({
    countPassiveViews,
    eventType,
    pageSize,
    sortOrder,
}) => (
    <TopFavoritesQuery
        countPassiveViews={countPassiveViews}
        eventType={eventType}
        fields={fields}
        pageSize={pageSize}
        sortOrder={sortOrder}
    >
        {data => <TopFavoritesTable data={data} />}
    </TopFavoritesQuery>
)

TopFavoritesVisualization.propTypes = {
    countPassiveViews: PropTypes.bool.isRequired,
    eventType: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
}

export default TopFavoritesVisualization
