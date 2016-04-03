import React, {
  Component,
  View,
  Text,
  ListView
} from 'react-native';
import ControlledRefreshableListView from 'react-native-refreshable-listview/lib/ControlledRefreshableListView';
import mainStyles from '../styles/components/_Main';
import Header from './Header';
import ForumItem from './ForumItem';
import { invalidateForumList, fetchForumListIfNeeded } from '../actions/forumAction';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ForumList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchForumListIfNeeded('all'));
  }

  _refreshForum() {
    this.props.dispatch(invalidateForumList());
    this.props.dispatch(fetchForumListIfNeeded('all'));
  }

  render() {
    let { dispatch, list } = this.props;
    let { forumList } = list;

    if (!forumList.list['all']) {
      forumList.list['all'] = {
        forumList: []
      };
    }

    let source = ds.cloneWithRows(forumList.list['all'].forumList);

    return (
      <View style={mainStyles.container}>
        <Header title='版块' />
        <ControlledRefreshableListView
          dataSource={source}
          renderRow={forum => <ForumItem key={forum.board_category_id} forum={forum} router={this.props.router} />}
          onRefresh={() => this._refreshForum()}
          isRefreshing={forumList.isFetching}
        />
      </View>
    );
  }
}

module.exports = ForumList;
