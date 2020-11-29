import React, { createContext } from 'react'

export const DataContext = createContext();
/*export const ServiceProvider = props => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    }, [])

    const getAccounts = () => {
        axios.get(`http://127.0.0.1:8000/api/accounts`)
             .then(response => {
                const res = response.data
                setAccounts(res)
             })
    }

    return (
        <ServiceProvider.Provider value={{ accounts, setAccounts }}>
            { props.children }
        </ServiceProvider.Provider>
    )
}*/
