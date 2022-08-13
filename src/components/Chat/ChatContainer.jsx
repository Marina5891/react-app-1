import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/chatReducer';
import { connect } from 'react-redux';
import { Chat } from './Chat';

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
