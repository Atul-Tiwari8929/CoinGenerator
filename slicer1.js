import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

// createAsyncThunk

// {type:"Coin/fetch",payload:data}
// FetchData(20)

// these actions are gonna get created by this function (thunkAPI) and will be dispatched accordingly
// so you dont need to dispatch manually 


// {type: 'coin/fetch/pending',payload:undefined}
//  { type: 'coin/fetch/fullfilled', payload:data}
// {type: 'coin/fetch/rejected',payload:error_message}


const FetchData=createAsyncThunk(
    //Action: type:payload
    "Coin/fetch",
    async (args, thunkAPI)=>{

    try{

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
        const data= await response.json();

        return data;
    }

    catch(error){
       return rejectWithValue(error.message);
    }

    }
)


const slicer1=createSlice({

    name:'slice1',
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(FetchData.pending,(state)=>{

            state.loading=true;
            state.error=null;

        })

        builder.addCase(FetchData.fulfilled,(state,action)=>{

             state.loading=false;
              state.data=action.payload;

        }) 

        builder.addCase(FetchData.rejected,(state,action)=>{

             state.loading=false;
             state.error=action.payload;
      

        })
    }
})


export default slicer1.reducer;
export {FetchData};