import React from 'react'
import { Text, View, StyleSheet,Pressable } from 'react-native'

function GoalItem({id,itemData, onDeleteGoal}) {
  return (
    <View style={styles.goalItem} >
    <Pressable  android_ripple={{color: "#dddddd"}} onPress={onDeleteGoal.bind(this,id)} style={({pressed}) => pressed && styles.pressedItem }>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        
      },
      goalText : {
        color: "white",
        padding: 8,

      },
      pressedItem: {
        opacity: 0.5
      }
})


export default GoalItem