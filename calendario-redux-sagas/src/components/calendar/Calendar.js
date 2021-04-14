import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Calendar } from "antd";
import Month from "./Month";
import Day from "./Day";
import { READ_REMINDERS } from "../../redux/ActionTypes";

const MyCalendar = ({ readReminders, reminderState, createReminder }) => {
  useEffect(() => {
    readReminders();
  }, [readReminders]);

  const DayToFn = (day) => {
    return (
      <Day
        loading={reminderState.loading}
        reminders={reminderState.reminders}
        currentDay={day}
      ></Day>
    );
  };

  return (
    <>
      <Calendar dateCellRender={DayToFn} monthCellRender={Month} />
    </>
  );
};

const mapStateToProps = ({ reminderState }) => {
  return {
    reminderState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    readReminders: () => dispatch({ type: READ_REMINDERS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
