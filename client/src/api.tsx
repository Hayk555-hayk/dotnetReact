import axios from "axios"
import {CompanySearch} from './company'

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(``);
        return data;
    } catch(err) {
        console.log(err)
    }
}