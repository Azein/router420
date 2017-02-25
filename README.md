# router420
Basic browser router based on history package

### Purpose of this yet another clientside SPA router
I built this with a goal of having very simple browser router for my React.js projects. The code is very down-to-earth, yet capable to do it's job - routing, redirecting, working with protected routes.

### How to use
Install the package with [npm](https://www.npmjs.com/):
```
    $ npm install --save router420
```
Then integrate it into your project with bundle like webpack, and start writing the code:
```js
import { Router, Route, browserHistory} from 'router420';
//...your other imports

<Router styles={styles.container} history={browserHistory}>
  <Route exactly pattern='/' component={AuthFormContainer} />
  <Route exactly pattern ='/customer' component={CustomerRoute}  />
  <Route exactly pattern='/customer/orderCreation' component={OrderCreationRoute} />
  <Route exactly pattern='/customer/orderCreation/orderCreationForm' component={OrderCreationFormRoute} />
</Router>
```
You can easily write your own protected routes using Redirect. Just remember that protected route's component needs to access the credentials. In this example I pass them from Redux store, yet Redux isn't a requirement for this router.
```js
import { Redirect } from 'router420';
// ...other imports

class CustomerRoute extends React.Component {

  checkCredentials = () => {
    if (this.props.isLogged && this.props.role === 'customer'){
      return(
       <CustomerMain />
      )
    } else {
      return <Redirect to={'/'} />
    }
  }

  render(){
    return(
      this.checkCredentials()
    )
  }
}
```

###Important issue
Beware that for now React forbids to return array of elements without wrapping tags, so this router will produce one container div which you can style through passing prop "styles". This isn't cool and I will fix that issue.
