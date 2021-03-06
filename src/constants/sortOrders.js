import i18n from '@dhis2/d2-i18n'

export const ASC = 'ASC'
export const DESC = 'DESC'

const sortOrders = [
    { value: ASC, label: i18n.t('Ascending') },
    { value: DESC, label: i18n.t('Descending') },
]

export default sortOrders
