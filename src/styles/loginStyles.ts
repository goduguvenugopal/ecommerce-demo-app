import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(175, 8, 209, 0.27)',
    paddingTop: 5,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(58, 55, 58, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },

  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: 'white',
    fontSize: 18,
  },

  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  linkText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
