import React, { Fragment, useEffect, useState } from "react"
import { addCurrency, getCurrency } from "../../service/HomeAPi";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import ModalSelect from "../../components/ModalSelect";
import './homepage.css'
import { dataCurrency } from "../../UtilFunction";
import Button from "../../components/Button";

const Homepage = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currDataEntries, setCurrDataEntries] = useState()
    const [currency, setCurrency] = useState([])

    const fetchCurrency = async() => {
        try {
            const resp = await getCurrency()
            let currencys = Object.entries(resp?.data?.rates)
            setCurrDataEntries(currencys)
        } catch (error) {
            console.log(error, 'Error')
        }
    }

    const addedCurrency = (curr) => {
        try {
            let newCurrency = currency.slice()
            newCurrency.push(curr)
            setCurrency(newCurrency)
        } catch (error) {
            console.log(error, 'Error Currency')
        }
    }
    

    useEffect(()=>{
        fetchCurrency()
    },[])

    useEffect(()=>{
        handleCurrency()
    }, [currency])

    const handleCurrency = async() => {
        try {
            const resp = await addCurrency(currency)
            let currencys = Object.entries(resp?.data?.rates)
            setCurrDataEntries(currencys)
        } catch (error) {
            console.log(error, 'Error')
        }
    }

    const onRemove = (item) => {
        const filterCurrency = currDataEntries?.filter(([key, value]) => {
            return key !== item
        })
        setCurrDataEntries(filterCurrency)
    }

    return (
        <div className="container">
            <div className="box">
                <Header/>
                <div className="body">
                    {currDataEntries?.map(([key, value], index) => {
                        return (
                            <CardList
                                idx={index}
                                currency={key}
                                rates={value}
                                onDelete={()=>onRemove(key)}
                            />
                        )
                    })}
                </div>
                <Button onClick={()=>setIsCollapsed(true)} text={'+ Add Currency'}/>
                <ModalSelect show={isCollapsed} setShow={setIsCollapsed} data={dataCurrency} setData={addedCurrency}/>
            </div>
        </div>
    )
}

export default Homepage