/**
 * 
 * Objects have states and behaviours, in JS the states are called properties and the behaviours are called methods
 * 
 * properties/states are things like element.style, element.innerText etc.
 * methods are like getElementById();
 * 
 * NOTE objects are able to interact with other objects!!
 * 
 */

class User {
    constructor(username, birthday, status, numFriends) {
        this.username = username;
        this.birthday = birthday;
        this.status = status;
        this.numFriends = numFriends;
    }

    addFriend() {
        // method to add friend
    }

    updateStatus() {
        // method to update status
    }
}