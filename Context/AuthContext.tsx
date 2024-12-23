// import React, {createContext, useState, ReactNode} from 'react';

// interface AuthContextType {
//   phoneNumber: string;
//   setPhoneNumber: (phoneNumber: string) => void;
// }
// export const AuthContext = createContext<AuthContextType>({
//   phoneNumber: '',
//   setPhoneNumber: () => {},
// });

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
//   const [phoneNumber, setPhoneNumber] = useState<string>('');
//   return (
//     <AuthContext.Provider value={{phoneNumber, setPhoneNumber}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
