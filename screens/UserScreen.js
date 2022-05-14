import { View, Text, Button, StyleSheet } from 'react-native';




function UserScreen({navigation}) {

function togleDrawerHandler() {
  navigation.toggleDrawer();
}

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open Drwer' onPress={togleDrawerHandler}></Button>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
