import React from 'react';
import styled, {StyledComponent} from "@emotion/styled";
import TockTheme from "../../../TockTheme";
import {readableColor} from "polished";

const DefaultContainer: StyledComponent<{}, {}, TockTheme> = styled.div`
  width: 100%;
  max-width: ${props => (props.theme && props.theme.conversationWidth) || '720px'};
  margin: 0.5em auto;
`;

const Default: StyledComponent<{}, {}, TockTheme> = styled.div`
  display: inline-block;
  background: ${props => (props.theme && props.theme.botColor) || 'black'};
  color: ${props => readableColor((props.theme && props.theme.botColor) || 'black')};
  padding: 0.5em 1.5em;
  margin-left: 1em;
  white-space: pre-line;
  border-radius: ${props =>
  (props.theme &&
    props.theme.borderRadius &&
    `${props.theme.borderRadius} ${props.theme.borderRadius} ${props.theme.borderRadius} 0`) ||
  '1em'};

  ${props => (props.theme && props.theme.styles && props.theme.styles.messageBot) || ''}
`;

const DefaultWidget: (props: any) => JSX.Element = (props) => {
  return (
    <DefaultContainer>
      <Default>
        <pre>{JSON.stringify(props)}</pre>
      </Default>
    </DefaultContainer>
  );
};

export default DefaultWidget;
