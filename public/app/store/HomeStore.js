import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {

  constructor() {
    this.bindActions(HomeActions);
    this.users = [];
  }

  onGetUsersSuccess(data) {
    this.users = data.users.slice(0, 5);
  }

  onGetUsersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }

  onKillUsersSuccess(){
    console.log('Yup killed for sure...');
    this.users = [];
  }

}

export default alt.createStore(HomeStore);