import Toast from 'react-native-toast-message';


// Success Toast
export const showSuccessToast = (
  title: string,
  message?: string,
) => {

  Toast.show({

    type: 'success',

    text1: title,

    text2: message,

    position: 'bottom',

  });
};


// Error Toast
export const showErrorToast = (
  title: string,
  message?: string,
) => {

  Toast.show({

    type: 'error',

    text1: title,

    text2: message,

    position: 'bottom',

  });
};


// Info Toast
export const showInfoToast = (
  title: string,
  message?: string,
) => {

  Toast.show({

    type: 'info',

    text1: title,

    text2: message,

    position: 'bottom',

  });
};