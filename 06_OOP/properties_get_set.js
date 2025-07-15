// all functions are objects on protypial level so we can access its properties by changing properties in its ancestors this is used to provide the context of function to Object properties other it will get empty object in node env and window obj in browser

function User(name, email) {

  this.email = email;
  Object.defineProperty(this, 'name' , {
    get : function(){
        return this._name.toUpperCase()
    },
    set : function(value){
        this._name = value
    }
 }); 
   this.name = name;
}
const user = new User("Shahbaz" , "Shahbaz@openAI.com")
console.log(user.name)
