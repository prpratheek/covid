import axios from 'axios';

const url ='https://api.covid19api.com/summary';

export const fetchdata =async (country) =>{
    try {
        if(!country)
        {
            const {data:{Global}}= await axios.get(url);

            const mData={
                
                NewConfirmed: Global.NewConfirmed,
                NewDeaths: Global.NewDeaths,
                NewRecovered: Global.NewRecovered,

                TotalConfirmed: Global.TotalConfirmed,
                TotalDeaths: Global.TotalDeaths,
                TotalRecovered: Global.TotalRecovered,
            }
            return mData;
    }
    else{
        const {data:{Countries}}= await axios.get(url);
        const selectedCountry=Countries.filter((e)=>e.Country===country)[0];

        const mData={
            
            NewConfirmed: selectedCountry.NewConfirmed,
            NewDeaths: selectedCountry.NewDeaths,
            NewRecovered: selectedCountry.NewRecovered,

            TotalConfirmed: selectedCountry.TotalConfirmed,
            TotalDeaths: selectedCountry.TotalDeaths,
            TotalRecovered: selectedCountry.TotalRecovered,
        }

        return mData;
    }
    } catch (error) {
        
    }
} 

export const fetchcountry=async()=>{
    try {
        const {data:{Countries}}=await axios.get(url);
        return Countries.map((country)=>country.Country);
    } catch (error) {
        
    }
}


