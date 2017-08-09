'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking,
  ToastAndroid,
  PermissionsAndroid,
  BackHandler,
  ViewPagerAndroid,
  StatusBar,
  DeviceEventEmitter,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import MyLoginComponent from './MyLoginComponent';
import RefreshControlExample from './RefreshControlExample';
var MyAndroidToast = require('./MyNativeModule').MyToast;
var MyIOSModule = require('./MyNativeModule').MyIOSModule;
import codePush from 'react-native-code-push';

var PushNotification = require('react-native-push-notification');

import NavBarItem from './NavBarItem';
import MainComponent from './MainComponent';

import TestScreen from './TestScreen';

import { connect } from 'react-redux';

myName = "Newput";
const var11 = 10;
const make = "adfsa";

var myNumber = new Number(324);

class MySuperClass {
  constructor() {
  }
}

class MyClass extends MySuperClass {

  static myValue = 'Aadutya';
   constructor(height,width) {
     super();
     this.hei = height;
     this.wid = width;
   }

   static myStaticMethod() {
     this.myValue = 'change';
     console.log(this.myValue);
     console.log("Static method called");
   }
}

function myPromiseFunction(v1, v2) {
  var isNegativeValue = function() {
    return v1 < 0 || v2 < 0;
  };
  var myPromise = new Promise(function(resolve, reject) {
    if (!isNegativeValue()) {
      resolve("Its Correct = "  + (v1 + v2));
    } else {
      reject("Not working");
    }
  });
  return myPromise;
}

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Need to take Cool Photo',
        'message': 'Cool photo taken by us'
      }
    )
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      console.log('we can use camera');
    } else {
      console.log('no luck');
    }
  } catch (err) {
    console.warn(err)
  }
}

async function measureScreen() {
  try {
    var {height, width} = await MyAndroidToast.measureScreen();
    console.log("height is " + height + " and width is " + width);
  } catch (e) {
    console.log("error is " + e);
  }
}

class FirstScreen extends React.Component {

  mySuccess (res) {
    console.log(res);
  }

  myError (err) {
    console.log(err);
  }

  componentDidMount() {

    if (Platform.OS == 'android')
      MyAndroidToast.myEventCheckForKeyboard();
    var date = new Date();

    if (Platform.OS == 'ios') {
      MyIOSModule.addEvent('My Birthday Party',{
        'location': '4 Private Water, Surrey',
        'time': date.getTime()
      },(error, events) => {
        if (error) {
          console.log("IOS Module error " + error);
        } else {
          console.log("IOS Module Event name " + events[0]);
        }
      })
    }

    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    var ee = DeviceEventEmitter.addListener('MyTestEvent', function(e: Event) {
      console.log(">> My event " + e.height);
    });

    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION Rec : ', notification );
        },

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "537161610752",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
    });

  }

  constructor(props) {
    super(props);
    var self = this;
    myPromiseFunction(-10,20).
    then(function(result) {
      self.mySuccess(result);
    },function(error) {
      self.myError(error);
    });

    if (Platform.OS == 'android') {
      MyAndroidToast.show('I am Awesome', MyAndroidToast.LONG);
    }
    measureScreen();

    if (Platform.OS == 'android') {
      MyAndroidToast.getDeviceID((deviceID) => {
        console.log('Device Id is ' + deviceID);
      })
    }

    var myClass = new MyClass(30,50);
    console.log(myClass.wid);
    MyClass.myStaticMethod();
    test(78.7, 15);
    testRestParam(10,10,20,34,'sjfks',34823748);
    console.log(myNumber);
    var reg = /apple/;
    var str = "Apple are around, and apple are juicy";
    console.log(str.replace(reg,"aaditya"));
    var date = new Date();
    console.log(date.getTime());

    var mySet = new Set();
    mySet.add("Value");
    mySet.add("Value");
    mySet.add("Value1");
  }

  requestPermission = async () => {
    let hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (!hasPermission) {
      let result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Need to take Cool Photo',
          'message': 'Cool photo taken by us'
        }
      )
      debugger;
    }
  }

handlePress = () => {
  const {navigate} = this.props.navigation;
  //codePush.sync({updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE});
  //navigate('MainComponent', {hasUser: false});
  // Linking.canOpenURL('tel:32423423342').then(supported => {
  //   if (supported)
  //     Linking.openURL('tel:32423423342');
  //   else {
  //     ToastAndroid.show('Not open URL', ToastAndroid.SHORT);
  //   }
  // })
}



  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerPosition: 'right',
  //
  // };

  onPageScroll = (e) => {
    console.log('onScroll Called');
  }

  render() {
    if (Platform.OS == 'android') {
    return (
        <ViewPagerAndroid style = {styles.viewPager} initialPage= {0} onPageScroll = {this.onPageScroll}>
        <View style = {styles.pageStyle}>
        <Text style= {{marginTop: 24}} onPress = {this.handlePress} title = "My Index">
          My,World
        </Text>
        </View>
        <View style = {styles.pageStyle}>
        <Text style= {{marginTop: 24}} onPress = {this.requestPermission} title = "My Index">
          My,World
        </Text>
        </View>
        </ViewPagerAndroid>
    );
  } else {
     return (
       <View style = {styles.pageStyle}>
       <Text style= {{marginTop: 24}} onPress = {this.handlePress} title = "My Index IOS">
         My Testing CodePush Test dsfsdf
       </Text>
       </View>
     );
  }
  }
}

var myArray = ['val1','val2','val3','val4'];
var secondArray = new Array(10,20,30,40);

var foo = (x) => {
  console.log('adsfa');
  return 10 + x;
}

var myName;

function* rainbow(): void {
   yield 'red';
   yield 'orange';
   yield 'yellow';
   yield 'green';
   yield 'blue';
   yield 'indigo';
   yield 'violet';
}

function factorial(num: Number): Number {
  console.log(foo(10) + myName);
  // (function() {
  //   var msg = "Aadi";
  //   console.log(msg);
  // })()

  if (num <= 0) {
    return "";
  } else {
    return " dsfsdf" //(num * factorial(num - 1));
  }
}

var myFunc = new Function("x","y", "return x * y;");

var f = function(name) {
  console.log(factorial(6));
  console.log(myFunc(1,2));
  return "Hello " + name;
}

function testRestParam(...params) {
  const it = rainbow();
  console.log(it.next().value);
  console.log(f("Aadi"));
  console.log('param length : ' + params.length);
}

function test(name, value = 1) {
  const var11 = 10;
  //const var11 = 'shyamsdf';
  //var11 = 'dsfs';
  console.log('Aaditya ' + var11 + ' '+ value + ' ' + name);
}

function Car() {
  this.make = "Honda";
  this.model = "F132";
}

var myObject = new Car();
myObject.make = "Ford";
myObject.model = "Mustang";
myObject.year = "1990";

class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    test(99.7);
    delete myObject.make;
    console.log(myObject.make);
    console.log(mineObj.role);
    console.log(copyObject.money);
  }

  componentDidMount() {
    //requestCameraPermission();
  }

  static navigationOptions = {
    title: 'Chat Screen',
    headerTintColor: 'red',
    headerRight: <Button title="Test" onPress = {() => console.log('dsf')}/>
  };

  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style= {{marginTop: 24}}>
      <StatusBar backgroundColor = "blue"
      barStyle = "light-content"/>
        <Text onPress = {() => goBack(null)}>Heyy This is me And value is</Text>

        <Image source = {{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 200, height: 200}} />
      </View>
    );
  }
}

var mineObj = Object.create(null);
mineObj.money = 1122;
mineObj.role = "Admin";


var copyObject = Object.assign({}, mineObj);

const Stack = {
	MyScreen: {
		screen: FirstScreen
	},
	Stack: {
		screen: ChatScreen
	},
	MyComponent: {
		screen: MyLoginComponent
	},
  MyRefresh: {
    screen: RefreshControlExample
  },
  MainComponent: {
      screen: MainComponent
    }
};

const DrawerRoutes = {
	FirstViewStack: {
		name: 'FirstViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyScreen' })
	},
	SecondViewStack: {
		name: 'SecondViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'Stack' })
	},
	ThirdViewStack: {
		name: 'ThirdViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyComponent' })
	},
  FourthViewStack: {
		name: 'FourthViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyRefresh' })
	}
};

const getDrawerIcon = (iconName, tintColor) => <Image source={require('./navigation1.png')} style = {{width: 20, height: 20}} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('navigation1.png', tintColor);

const homeNavOptions = ({navigation}) => getDrawerNavigationOptions('Home', 'red', 'white', homeDrawerIcon, getDrawerItem(navigation));

const getDrawerItem = navigation => (
  <NavBarItem
    iconName="navigation"
    onPress={() => {

      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerClose');
      } else {
        // else close the drawer
        navigation.navigate('DrawerOpen');

      }
    }}
  />
);

export const getDrawerConfig = (drawerWidth, drawerPosition) => ({
  drawerWidth,
  drawerPosition,
});

const MyNavigator = DrawerNavigator({
  FirstViewStack: {
		name: 'FirstViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyScreen',
    navigationOptions: homeNavOptions })
	},
	SecondViewStack: {
		name: 'SecondViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'Stack' })
	},
	ThirdViewStack: {
		name: 'ThirdViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyComponent' })
	},
  FourthViewStack: {
		name: 'FourthViewStack',
		screen: StackNavigator(Stack, { initialRouteName: 'MyRefresh' })
	}
}, getDrawerConfig(300,'left'));

// MyNavigator.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('RNChat', 'blue', 'white', getDrawerItem(navigation));

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft,
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon,headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
  headerLeft,
});

class App extends Component {
  _onNavigationStateChange = (prevState, currentState,action) => {

  }

  render() {
    console.log('render ' + this.props.isLoggedIn);
    return (
      this.props.isLoggedIn
      ? <TestScreen />
      : <MyNavigator onNavigationStateChange={this._onNavigationStateChange} screenProps={this.state} />
    )
  }
}

function mapStateToProps (state) {
  console.log(state.auth.isLoggedIn);
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center'
  }
});

export default connect(mapStateToProps)(App);
