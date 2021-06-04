
import AuthService from '../../../service/auth_service';
import useAuthProvider from '../../../shared/hook/useAuthProvider';

const useAuthenticationUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const authService  =  new AuthService();
  const AuthenticationUser = async (provider) => {
    const res = await authService.authenticationUser(provider);
    authDispatch({ type: 'UPDATE_AUTH', payload: true });
  };
  return AuthenticationUser;
};

export default useAuthenticationUser;