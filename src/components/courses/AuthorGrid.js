import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import XomeRGrid from "./XomeRGrid";
import React from "react";

function AuthorGrid(props) {
  const getLink = rowData => {
    return <Link to={"/course/" + rowData.slug}>{rowData.title}</Link>;
  };
  const columns = [
    {
      title: "Author",
      field: "name"
    }
  ];

  return (
    <XomeRGrid
      columns={columns}
      data={props.data}
      title="Authors"
      search={false}
      paging={false}
      filtering={false}
    />
  );
}

AuthorGrid.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired
};

export default AuthorGrid;
