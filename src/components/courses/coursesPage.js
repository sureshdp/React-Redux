import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import CourseGrid from "./CourseGrid";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("Courses loading error..." + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Authors loading error..." + error);
      });
    }
  }

  handleDeleteCourse = async course => {
    toast.success("Course deleted...");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed..." + error.message, { autoClose: false });
    }
  };

  handleSave = async course => {
    try {
      await this.props.actions.saveAsyncCourse(course);
      //mapStateToProps;
      console.log(course);
    } catch (error) {
      toast.error("Save failed..." + error.message, { autoClose: false });
    }
  };
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={this.props.courses}
            />
            <CourseGrid courses={this.props.courses} save={this.handleSave} />
          </>
        )}
      </>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors,

    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
      saveAsyncCourse: bindActionCreators(
        courseActions.saveAsyncCourse,
        dispatch
      )
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
