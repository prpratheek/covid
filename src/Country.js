import React,{ useState,useEffect } from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import {fetchcountry} from './api/index'

const Country =(props)=>{
    
    const[fetchedCountries,setFetchedCountries]=useState([]);

    useEffect(()=>{
        const fetchCountries=async ()=>{
            setFetchedCountries(await fetchcountry());
        }

        fetchCountries();
    },[setFetchedCountries]);

    return(
        <div>
            <FormControl className="formControl" >
                <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)}>
                    <option style={{color:"#FFFAFA",background:"#151515"}} value="">Global</option>
                    {fetchedCountries.map((country,i)=><option style={{color:"#FFFAF0",background:"#151515"}} key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Country;