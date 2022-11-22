import { StyleSheet, View,Button , FlatList} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  const [modalIsVisible,setModalIsVisible] = useState(false)

  


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])

    endAddGoalHandler()
  }

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    const newCourseGoals = courseGoals.filter(goal=> goal.id !== id) 
    setCourseGoals(newCourseGoals)
  }

  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
    <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
      {modalIsVisible &&  <GoalInput onEndAddGoal={endAddGoalHandler} visible={modalIsVisible}  onAddGoal={addGoalHandler}  />
}
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData=> {
       return  <GoalItem id={itemData.item.id} itemData= {itemData} onDeleteGoal= {deleteGoalHandler}/>
      }} keyExtractor={(item,index)=> {
        return item.id
      }}/>
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor: "#1e085a"

  },
  
  goalsContainer: {
    flex:4
  },
  
});
