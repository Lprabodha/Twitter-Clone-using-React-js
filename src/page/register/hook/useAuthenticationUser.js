
import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';
import useAlertProvider from '../../../shared/hook/useAlertProvider';



const useAuthenticateUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const { alertDispatch } = useAlertProvider();
  const authService = new AuthService();

  const authenticateUser = async (provider) => {
    authService
      .authenticateUser(provider)
      .then(async (res) => {
        alertDispatch({
          type: 'ALERT_USER',
          payload: { message: 'Successfull', isError: false },
        });
        authDispatch({ type: 'UPDATE_AUTH', payload: true });
        // alert user succesfull
      })
      .catch((e) => {
        console.log();
        alertDispatch({
          type: 'ALERT_USER',
          payload: { message: 'Unable to proceed.', isError: true },
        });
        // update alert
      });
  };

  return authenticateUser;
};

export default useAuthenticateUser;