import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/start";
import Chat from "./components/chat";

// Create the navigator //
const Stack = createNativeStackNavigator();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ***4.19.24 - below...firestore on CF assignment, but not listed on firebase database?///
import { getFirestore } from "firebase/firestore";

// ignore warning //
LogBox.ignoreLogs(["AsyncStorage has been extracted from", "@firebase/auth", "You are initializing Firebase Auth"]);

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAH5RyGo0uyczq-EJ1m5ETyobNNYLkaf2o",
    authDomain: "chat-app-d8b63.firebaseapp.com",
    projectId: "chat-app-d8b63",
    storageBucket: "chat-app-d8b63.appspot.com",
    messagingSenderId: "1077560553930",
    appId: "1:1077560553930:web:7edcd7816b571ca1ca5f33"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
          name="Start"
          component={Start}
        />
      <Stack.Screen name="Chat" >
          {props => <Chat db={db} {...props} /> }
        </Stack.Screen> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;