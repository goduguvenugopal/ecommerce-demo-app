import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  linkText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
