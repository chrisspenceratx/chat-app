import { useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { StyleSheet, LogBox, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import Start from "./components/start";
import Chat from "./components/chat";

// Create the navigator //
const Stack = createNativeStackNavigator();

// ignore warning //
LogBox.ignoreLogs(["AsyncStorage has been extracted from", "@firebase/auth", "You are initializing Firebase Auth"]);

const App = () => {
    // stat that represents network connectivity status, initializes as null
    const connectionStatus = useNetInfo();

    // alerts the user when the network connection is lost and prevents Firebase from trying to connect when no network is available
    // enables Firebase to reconnect when network connection restored
    useEffect(() => {
      if (connectionStatus.isConnected === false) {
        Alert.alert("Connection lost!");
        disableNetwork(db);
      } else if (connectionStatus.isConnected === true) {
        enableNetwork(db);
      }
    }, [connectionStatus.isConnected]);

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
          {props => <Chat 
            isConnected={connectionStatus.isConnected}
            db={db} 
            {...props} /> }
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