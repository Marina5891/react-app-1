import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/chatReducer';
import { connect } from 'react-redux';
import { Chat } from './Chat';


/* const ChatContainer = (props) => {
  let state = props.store.getState().chatPage;

  const onSendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  const onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  }
  return (
    <Chat
      state={state}
      onMessageChange={onMessageChange}
      onSendMessage={onSendMessage}
    />
  )
} */

const mapStateToProps = (state) => {
  return {
    chatPage: state.chatPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
