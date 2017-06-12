import Immutable from 'immutable'
import {SEARCH_PAGE, COMPANY_PAGE} from '../Action/Index'

const defaultlState = Immutable.fromJS({data: {}, isFetching: false})

export const openCompany = (state = defaultlState, action={}) => {
    switch(action.type){
        case COMPANY_PAGE:
            return state.set('showDetailCompany', true)
    }
}