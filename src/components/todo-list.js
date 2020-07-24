import React from 'react';

import './todo-list.css';
import {loadData, loadDataThunk, changePage} from "../redux/reducer";
import {compose} from "redux";
import {connect} from "react-redux";





class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('TodoList componentDidMount')

        this.props.loadDataThunk();

    }
    render() {
        console.log(this.props)

        let buttonString = [];
        for (let i=1; i < this.props.countPage+1; i++) {
            buttonString.push(
                <button className='btn btn-primary' onClick={()=> {this.props.changePage(i)}}  key={i} >
                    {i}
                </button>
            )
        }

        return (<>
            <table className="table table-responsive table-hover" >
                <tbody>
                {
                    this.props.dataTable.map((item,i) => {
                        console.log(item)

                        let str = '';

                        for (var key in item) {
                            str += '<td>'+item[key]+'</td>';
                            console.log(key)
                        }

                        return (<tr key={i}  dangerouslySetInnerHTML={{ __html: str}} ></tr>)
                    })
                }
                </tbody>
            </table>
            {
                buttonString
            }
        </>)
    }
}


let mapStateToProps = (state) => {
    return {
        dataTable: state.dataTable,
        countPage: state.countPage,
        currentPage: state.currentPage
    }
}


const mapStateDispatch = (dispatch) => {
    return {
        loadDataThunk: ()=> {
            dispatch(loadDataThunk())
        },
        changePage: (page)=> {
            dispatch(changePage(page))
        }

    }
}


export default  compose (
    connect(mapStateToProps,mapStateDispatch)
)(TodoList)


