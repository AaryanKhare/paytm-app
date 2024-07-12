import { useEffect, useState } from "react"
import axios from 'axios';

export const Balance = () => {
const [balance, setBalance] = useState()

useEffect(()=>{
    const fetchBalance = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
        });
        setBalance(response.data.balance.toFixed(2));

        }catch(error){
            console.log("error")
        }
    }
    fetchBalance();  
},[]);

    return (<div className="flex justify-between">
        <div className="font-bold text-lg">
            {balance != null && 
            <div>
                Available balance: ₹{balance}
            </div>
            }
        </div>
        
    </div>
    )
};

export default Balance;