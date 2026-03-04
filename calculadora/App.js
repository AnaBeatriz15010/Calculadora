import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText}
        numberOflines={1}>
          1000
          </Text>
      </View>

{/* linha 1 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

{/* linha 2 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
      </View>

      {/* linha 3 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* linha 4 */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* linha 5 */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidhtButton]}>
          <Text style={styles.funcionText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.funcionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#A5A5A5'
  },
  funcionText: {
    color: '#000',
    fontSize: 28
  },
   operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#A5A5A5'
  },
  operatorText: {
    color: '#000',
    fontSize: 28
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333'
  },
  buttonText: {
    color: '#fff',
    fontSize:32
  },
  doubleWidhtButton : {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  }

});
