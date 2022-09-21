import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import HeaderConatiner from "./Molecules/HeaderConatiner";
import RequestContainer from "./Molecules/RequestContainer";
import { verticalScale } from "react-native-size-matters";

// name,age,qualification,location

const userRequest = [
  {
    id: 1,
    name: "Samer",
    age: "28",
    qualification: "QA Engineer",
    location: "California",
  },
  {
    id: 2,
    name: "Omar",
    age: "28",
    qualification: "Software Engineer",
    location: "New Jersey",
  },
];
const userConversation= [
  {
    id: 1,
    name: "Razeen",
    age: "24",
    qualification: "Product Manager",
    location: "Michigan",
  },
  {
    id: 2,
    name: "Tolba",
    age: "24",
    qualification: "Software Engineer",
    location: "Seattle",
  },
];


const Request = ({navigation}) => {

  const RequestDetail = ({ item, index }) => {
    return (
      <View>
        <RequestContainer
          name={item.name}
          qualification={item.qualification}
          location={item.location}
          age={item.age}
          onChating={()=>{
            navigation.navigate("Chat")
  
  
          }}
        />
      </View>
    );
  };
  
  const ConversationDetail = ({ item, index }) => {
    return (
      <View>
        <RequestContainer
          name={item.name}
          qualification={item.qualification}
          location={item.location}
          age={item.age}
          onChating={()=>{
            navigation.navigate("Chat")
            
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderConatiner label="Request" />
      <View>
      <FlatList
        data={userRequest}
        keyExtractor={(item) => item.id}
        renderItem={RequestDetail}
      />

      </View>

     <View style={{marginVertical:verticalScale(15)}}>
     <HeaderConatiner label="Pass Conversation" />


     </View>

     <View>
     <View>
      <FlatList
        data={userConversation}
        keyExtractor={(item) => item.id}
        renderItem={ConversationDetail}
      />

      </View>

     </View>


    </SafeAreaView>
  );
};

export default Request;

const styles = StyleSheet.create({});
