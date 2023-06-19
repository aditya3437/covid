import axios from "axios";

const url='https://disease.sh/v3/covid-19/all';

export const fetchData = async() => {
    try{
      const {data:{cases,deaths,recovered,active}}= await axios.get(url);
     
      return {cases,deaths,recovered,active};

    }
    catch(error){
      console.log(error);
    }
}

export const fetchDailyDate=async() => { 
  try{
    const {data}= await axios.get(url);
    const modifiedData=data.map((dailyData)=> ({
      cases:dailyData.cases,
      deaths:dailyData.deaths,
      active:dailyData.active,

    }))
    return modifiedData;
 

  }catch(error){
    console.log(error);
  }

}
export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(url);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};