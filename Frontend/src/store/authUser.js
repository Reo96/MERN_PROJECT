import { create } from 'zustand';
import toast from 'react-hot-toast'
import axios from "axios";
export const useAuthStore= create((set)=>({
    user:null,
    isCheckingAuth:true,
    isSigningUp:false,
    isLoggingOut:false,
    isLoggingIn:false,
    signup : async (credentials) => {
        set({isSigningUp:true})
        try{
            const response = await axios.post("/api/v1/auth/signup",credentials);
            set({user:response.data.user,isSigningUp:false})
            toast.success("Account created successfully");
        } catch (error){
            toast.error(error.response.data.message || "Sign Up occurred")
        }
    },
    login : async (credentials) => {
        set({isLoggingIn:true});
        try{
            const response=await axios.post("/api/v1/auth/login",credentials);
            set({user:response.data.user,isLoggingIn:false});
        } catch (error){
            set({isLoggingIn:false,user:null});
            toast.error(error.response.data.message || "Login Falied");
        }
    },
    logout : async () => {
        set({isLoggingOut:true});
        try{
            await axios.post("/api/v1/auth/logout");
            set({user:null, isLoggingOut:false});
            toast.success("logged out successfully");
        } catch (error){
            set({isLoggingOut:false,user:null});
            toast.error(error.response.data.message || "Login Falied");
        }
    },
    authCheck:async ()=>{
        set({isCheckingAuth:true});
        try{
            const response = await axios.get("/api/v1/auth/authCheck");
            set({user:response.data.user,isCheckingAuth:false  });
        } catch (error){
            set({isCheckingAuth:false,user:null});
            console.log(error.response.data.message);
        }
    },
}))