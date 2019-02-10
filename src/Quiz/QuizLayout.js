import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTemplate } from "../actions";
import { Header, Content, Title, Subtitle } from "../style";

function QuizLayout({ children, fetchingTemplate, template, onFetchTemplate }) {
  useEffect(() => onFetchTemplate(), []);

  if (fetchingTemplate) {
    return (
      <Header>
        <Title>Loading quiz...</Title>
      </Header>
    );
  }

  return (
    <>
      <Header>
        <Title>{template.name}</Title>
        <Subtitle>Please answer the following questions with care</Subtitle>
      </Header>
      <Content>{children(template)}</Content>
    </>
  );
}

function mapStateToProps({ fetchingTemplate, template }) {
  return {
    fetchingTemplate,
    template
  };
}

const mapDispatchToProps = {
  onFetchTemplate: fetchTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizLayout);