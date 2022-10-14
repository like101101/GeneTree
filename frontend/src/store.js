import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer, 
    userProfileReducer,
    userUpdateReducer,
    userRecordAllReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userProfile: userProfileReducer,
    userRecord: userRecordAllReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo'))
    : null

const userRegisterFromStorage = localStorage.getItem('userRegister') ?
    JSON.parse(localStorage.getItem('userRegister'))
    : null

const userProfileFromStorage = localStorage.getItem('userProfile') ?
    JSON.parse(localStorage.getItem('userProfile'))
    : null

const userRecordFromStorage = localStorage.getItem('userRecord') ?
    JSON.parse(localStorage.getItem('userRecord'))
    : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    userRegister: {userRegister: userRegisterFromStorage},
    userProfile: {profile: userProfileFromStorage},
    userRecord: {records: userRecordFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;