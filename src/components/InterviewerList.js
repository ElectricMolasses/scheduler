import React from 'react';

import "components/InterviewerListItem.scss";

import InterviewerListItem from 'components/InterviewerListItem';

export default function InterviewerList({
  interviewers, value, onChange
}) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
        Interviewer
      </h4>
      <ul className="interviewers__list">
        {interviewers.map((current) => {
          return <InterviewerListItem
            key={current.id}
            name={current.name}
            avatar={current.avatar}
            selected={current.id === value}
            setInterviewer={(event) => onChange(current.id)}
          />
        })}
      </ul>
    </section>
  );
}