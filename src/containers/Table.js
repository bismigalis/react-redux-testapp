import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable  from 'react-table';
import StarRatingComponent from 'react-star-rating-component';



const TableContainer = ({data, columns}) => (
   <ReactTable data={data} columns={columns}></ReactTable>
);

const mapStateToProps = (state) => ({
   data: state.films,
   columns: [{Header: 'Название фильма',  accessor: 'title', filterable: true,
              filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))},
             {Header: 'Год',   accessor: 'year'},
             {Header: 'Жанр',  accessor: 'genre'},
             {Header: 'Рейтинг', accessor: 'rating', Cell:props => <StarRatingComponent name="rating_cell" editing={false} value={props.value}></StarRatingComponent>},
]
});

export default connect(mapStateToProps, null)(TableContainer);
