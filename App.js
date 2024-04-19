import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/start";
import Chat from "./components/chat";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ***4.19.24 - below...firestore on CF assignment, but not listed on firebase database?///
// import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzgT-IveScGSwOp-8W5SLP2jUAEfBtz-A",
  authDomain: "shopping-list-demo-c7887.firebaseapp.com",
  projectId: "shopping-list-demo-c7887",
  storageBucket: "shopping-list-demo-c7887.appspot.com",
  messagingSenderId: "941899882893",
  appId: "1:941899882893:web:9f2366012636966a9c5dc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
          name="Start"
          component={Start}
        />
        <Stack.Screen 
          name="Chat"
          component={Chat}
        />
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