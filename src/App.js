 
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card, 
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <>  

    <h1>asif mahmud </h1>
    <title> 
    "You only live once, but if you do it right, 
    once is enough."  
    
     — Mae West
      
      
       </title>
    
      <View className="App">
      <Card>
        
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    </>

  );
}

export default withAuthenticator(App);