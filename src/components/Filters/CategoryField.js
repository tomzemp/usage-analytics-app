import React from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import categories from '../../constants/categories.js'

const CategoryField = ({ category, setCategory }) => (
    <SingleSelectField
        selected={category}
        onChange={({ selected }) => {
            setCategory(selected)
        }}
        label={i18n.t('Category')}
    >
        {categories.map(({ label, value }) => (
            <SingleSelectOption label={label} key={value} value={value} />
        ))}
    </SingleSelectField>
)

CategoryField.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
}

export default CategoryField
