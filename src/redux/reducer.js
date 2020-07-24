import myAxios from "./../utils/myAxios";

const defaultState = {
    windowOpen: false,
    dataTable: [],
    fullTable: [],
    currentPage: 1,
    countRow: 20,
    countPage: 0
}

export const LOAD_DATA = 'LOAD_DATA';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const loadData = (tableData) => {
    return {
        type: LOAD_DATA,
        payload: tableData
    }
}

export const changePage = (page) => {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}


export const rootReducer = (state= defaultState, action) => {
    console.log(action)

    switch (action.type) {
        case LOAD_DATA: {
            return {...state, fullTable: action.payload, dataTable: action.payload.slice(0, 20), countPage: Math.ceil(action.payload.length / state.countRow) };
        }
        case CHANGE_PAGE: {
            return {...state, dataTable: state.fullTable.slice((action.payload-1) * state.countRow, action.payload * state.countRow), currentPage: action.payload};
        }
        default: return state;
    }
}





export const loadDataThunk = () => {
    console.log(`loadDataThunk`);

    return (dispatch) =>{
        console.log('loadDataThunk 2');

        myAxios.get('/rates').then(response => {
            console.log(response);

                dispatch(loadData(response.data))

        })
    }
}
