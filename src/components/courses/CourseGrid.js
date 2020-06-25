import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import XomeRGrid from "./XomeRGrid";
import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AuthorGrid from "./AuthorGrid";

function CourseGrid(props) {
  const getLink = rowData => {
    return <Link to={"/course/" + rowData.slug}>{rowData.title}</Link>;
  };
  const columns = [
    {
      title: "Title",
      field: "title",
      render: rowData => getLink(rowData, rowData.title, "slug")
    },
    {
      title: "Author",
      field: "authorName"
    },

    {
      title: "Category",
      field: "category"
    }
  ];

  return (
    <XomeRGrid
      columns={columns}
      data={props.courses}
      title="Courses"
      search={true}
      paging={true}
      filtering={true}
      save={props.save}
    />
  );
}

CourseGrid.propTypes = {
  courses: PropTypes.array.isRequired,

  imageUrl: "google.com",
  save: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired
};

export default CourseGrid;
