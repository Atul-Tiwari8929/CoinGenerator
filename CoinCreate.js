import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";

function CoinCreate(){

const dispatch=useDispatch();

const {data,loading,error} = useSelector((state)=>state.slice1);


useEffect(()=>{

    dispatch(FetchData(20));  //here it goes to store but it does not have action so redux Middleware intercepts it and run that asyncthunk functions and then send action to store to update the state

// 1. goes to store ✅
// 2. store sees it's not a plain action ✅
// 3. Middleware intercepts ✅
// 4. runs AsyncThunk function (API call) ✅
// 5. sends plain actions to store ✅
// 6. store updates state ✅





},[]) //Display Data of 20 users

if(loading ){

 return (

    <h1>Data is loading</h1>
 )

}


if(error){

    return (

        <h1>Error has occured</h1>
    )

}

return (
        <>
        <div style={{display:"flex" , flexWrap:"wrap", justifyContent:'center'}}>
            {data.map((value)=><CoinCard key={value.id} coin={value}></CoinCard>)}
        </div>
        </>

)

}


export default CoinCreate;