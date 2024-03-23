import React, { useState } from "react";
import CoursePlay from "./CoursePlay";
import Lessons from "./Lessons";
import Quiz from "./Quiz";
import StarRating from "./StarRating";
import { useLocation } from "react-router-dom";
import style from "./CourseView.module.css";

function CourseView() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const location = useLocation();
  const courseData = location.state;
  console.log(courseData);

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <>
      <div className="row row-col-2 " style={{ width: "100%" }}>
        <div className="col-4 lessons text-center mt-5">
          <p
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              margin: "20px 0px 0px 20px",
            }}
          >
            Course Content
          </p>
          <Lessons onLessonSelect={handleLessonSelection} Course={courseData} />
          <Quiz Course={courseData} />
        </div>

        <div className={`offset-1 col-7 mb-4 pb-4 rounded-4  ${style.vid}`}>
          {selectedLesson && (
            <CoursePlay lesson={selectedLesson} Course={courseData} />
          )}
          <div className="container">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className={`form-control ${style.formcontrol}`}
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
               <StarRating courseId={courseData._id} />
              <button type="submit"  className="btn btn-primary mb-3 mt-2 download-button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseView;
