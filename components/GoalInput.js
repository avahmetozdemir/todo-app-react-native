import React,{useState} from 'react'
import {StyleSheet, Button, TextInput, View,Modal,Image } from 'react-native'

function GoalInput({onAddGoal,visible, onEndAddGoal}) {
    const [enteredGoalText,setEnteredGoalText] = useState("")

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
      }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText("")
        
    }
  return (
    
    <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.jpg')} />
      <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
      
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>

        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={onEndAddGoal} color="#f31282" />

        </View>
      </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",       
        flex:1,
        padding:16,
        backgroundColor: "#311b6b"
      },
      textInput:  {
        borderWidth:1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        padding:5,
        width:"100%",
        marginRight:8,
        color: 120483,
        borderRadius: 6
      },
      buttonContainer: {
        flexDirection:"row",
        marginTop:16
      },
      button: {
        width: 100,
        marginHorizontal:8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
})


export default GoalInput