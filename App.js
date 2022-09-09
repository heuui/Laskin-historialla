import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const calculateSum = () => {
    setResult(numberOne + numberTwo);
    const sum = (parseInt(numberOne) + parseInt(numberTwo));
    const text = numberOne + " + " + numberTwo + " = " + sum;
    setData([...data, { key: text}]);
    setNumberOne('');
    setNumberTwo('');
  }

  const calculateSubtraction = () => {
    setResult(numberOne - numberTwo)
    const sum = (parseInt(numberOne) - parseInt(numberTwo));
    const text = numberOne + " - " + numberTwo + " = " + sum;
    setData([...data, { key: text}]);
    setNumberOne('');
    setNumberTwo('');
  }

  return (
    <View style={styles.container}>
      <Text>Result {result}</Text>
      <TextInput
              placeholder={'Enter number'}
              style={styles.input}
              keyboardType='number-pad'
              onChangeText={numberOne => setNumberOne(Number(numberOne))}
              value={numberOne}
      />
      <TextInput
              placeholder={'Enter number'}
              style={styles.input}
              keyboardType='number-pad'
              onChangeText={numberTwo => setNumberTwo(Number(numberTwo))}
              value={numberTwo}
      />
      <View style={styles.buttons}>
        <Button 
          onPress={calculateSum}
          title="+"
        />
        <Button 
          onPress={calculateSubtraction} 
          title="-"
        />
        </View>
        <Text>History:</Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>    // = Mitä yhden listan rivissä on (pitää olla item-niminen)
          <Text>{item.key}</Text>  }
          keyExtractor={(item, index) => index.toString()}
        />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{item.key}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    height: 50,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

