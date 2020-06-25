git import { Link } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import "@material-ui/icons";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import SortArrow from "@material-ui/icons/Sort";
import Clear from "@material-ui/icons/Clear";
import Editable from "@material-ui/icons/Edit";
import Cancel from "@material-ui/icons/Cancel";

function XomeRGrid(props) {
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const [columns, setColumns] = useState(props.columns);
  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const [state, setState] = React.useState({
    columns: props.columns,
    data: props.data
  });
  const handleSave = newData => {
    props.save(newData);
  };
  return (
    <MaterialTable
      icons={{
        FirstPage: FirstPage,
        LastPage: LastPage,
        Search: Search,
        PreviousPage: ChevronLeft,
        NextPage: ChevronRight,
        Filter: FilterList,
        Remove: Remove,
        Check: Check,
        SaveAlt: SaveAlt,
        ViewColumn: ViewColumn,
        SortArrow: SortArrow,
        ResetSearch: Clear,
        Edit: Editable,
        Clear: Cancel
      }}
      title={props.title}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  debugger;
                  //handleSave(newData, prevState, data);
                  return { ...prevState, data };
                });
              }
            }, 3600);
          })
      }}
      onRowClick={(evt, selectedRow) =>
        setSelectedRow(selectedRow.tableData.id)
      }
      options={{
        search: props.search,
        paging: props.paging,
        filtering: props.filtering,

        rowStyle: rowData => ({
          backgroundColor:
            selectedRow === rowData.tableData.id ? "#EEE" : "#FFF"
        })
      }}
    />
  );
}
XomeRGrid.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
  filtering: PropTypes.bool.isRequired,
  paging: PropTypes.bool.isRequired,
  imageUrl: "google.com",
  onDeleteClick: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired
};

export default XomeRGrid;
