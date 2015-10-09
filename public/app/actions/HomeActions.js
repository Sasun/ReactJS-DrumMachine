import alt from '../alt';

class HomeActions {
  
  constructor() {
    this.generateActions(
      'getUsersSuccess',
      'getUsersFail',
      'killUsersSuccess'
    );
  }

  getUsers() {

    $.ajax({ url: 'http://localhost:8080/api/users' })
      .done((data) => {
        console.log(data);
        this.actions.getUsersSuccess(data)
      })
      .fail((jqXhr) => {
        console.log(jqXhr);
        this.actions.getFailSuccess(jqXhr)
      });
  }

  killUsers(){
     console.log('users killed');
     this.actions.killUsersSuccess();
  }

};


export default alt.createActions(HomeActions);