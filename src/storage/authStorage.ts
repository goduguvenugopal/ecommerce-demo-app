import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  name: string;
  email: string;
  password: string;
}

// Save user
export const saveUser = async (user: User) => {
  try {

    // Convert object to string
    const jsonValue = JSON.stringify(user);

    await AsyncStorage.setItem('user', jsonValue);

  } catch (error) {
    console.log(error);
  }
};

// Get user
export const getUser = async () => {
  try {

    const user = await AsyncStorage.getItem('user');

    // Convert string back to object
    return user != null ? JSON.parse(user) : null;

  } catch (error) {
    console.log(error);
  }
};

// Remove user
export const removeUser = async () => {
  try {

    await AsyncStorage.removeItem('user');

  } catch (error) {
    console.log(error);
  }
};