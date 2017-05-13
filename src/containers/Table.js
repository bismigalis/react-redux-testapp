import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable  from 'react-table';

const TableContainer = ({data, columns}) => (
   <ReactTable data={data} columns={columns}></ReactTable>
);

const Rating = function({value}) {
   var stars = [];
   for (var i = 0; i < value; i++) {
        stars.push(<b key={i}>*</b>);
    }
   return <div>{stars}</div>;
};

const mapStateToProps = (state) => ({
   data: state.films,
   columns: [{Header: 'Title',  accessor: 'title', filterable: true,
              filterMethod: (filter, row) => (row[filter.id].toLowerCase().includes(filter.value.toLowerCase()))},
             {Header: 'Year',   accessor: 'year'},
             {Header: 'Genre',  accessor: 'genre'},
             {Header: 'Rating', accessor: 'rating', Cell:Rating},
]
});

export default connect(mapStateToProps, null)(TableContainer);
