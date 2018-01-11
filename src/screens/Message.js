import { StackNavigator } from 'react-navigation';
import colors from '../styles/common/_colors';
import MessageScreen from '../containers/Message';
import TopicScreen from '../containers/TopicDetail';
import IndividualScreen from '../containers/Individual';
import PrivateMessageScreen from '../containers/PmList';
import WebViewScreen from '../containers/Browser';

const Message = StackNavigator({
  Message: {
    screen: MessageScreen
  },
  Topic: {
    screen: TopicScreen
  },
  Individual: {
    screen: IndividualScreen
  },
  PrivateMessage: {
    screen: PrivateMessageScreen
  },
  WebView: {
    screen: WebViewScreen
  }
}, {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue
    }
  }
});

export default Message;
