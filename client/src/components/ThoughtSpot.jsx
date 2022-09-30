import React, { useState } from "react"
import {  Tooltip, LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

import './General.css';

const ThoughtSpot = () => {
  const [measure, setMeasure] = useState("id")
  const [attribute, setAttribute] = useState("amount")
  const [data, setData] = useState("")

  const handleChange = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:4000/api?measure=${measure}&attribute=${attribute}`,
      {
        method: "GET",
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        })
      }
    );
    const postData = await response.json();
    console.log(postData)
    setData(postData)

  };

  

  return (
    <div>

      <form onSubmit={handleChange}>
        <p> <span> TOTAL </span>
        <select className="select" placeholder="Select measure" value={measure} onChange={(e) => setMeasure(e.target.value)} >
            <option value="AMOUNT">AMOUNT</option>
            <option value="FEEAMOUNT">FEE AMOUNT</option>
            <option value="UNITQUANTITY">UNIT QUANTITY</option>
            <option value="RUNNINGBALANCEAMOUNT">RUNNING BALANCEAMOUNT</option>
            <option value="ESCROWTAXAMOUNT">ESCROWTAXAMOUNT</option>
            <option value="ESCROWINSURANCEAMOUNT">ESCROW INSURANCE AMOUNT</option>
            <option value="ESCROWPMIAMOUNT">ESCROW PMI AMOUNT</option>
            <option value="ESCROWFEESAMOUNT">ESCROW FEES AMOUNT</option>
            <option value="ESCROWOTHERAMOUNT">ESCROW OTHER AMOUNT</option>
            <option value="PENALTYAMOUNT">PENALTY AMOUNT</option>
            <option value="SHARESPERCONTRACT">SHARES PER CONTRACT</option>
            <option value="STATEWITHHOLDING">STATE WITH HOLDING</option>
            <option value="TAXESAMOUNT">TAXES AMOUNT</option>
            <option value="UNITPRICE">UNIT PRICE</option>
            <option value="INTERESTAMOUNT">INTEREST AMOUNT</option>
            <option value="PRINCIPALAMOUNT">PRINCIPAL AMOUNT</option>
            <option value="ESCROWAMOUNT">ESCROW AMOUNT</option>
          </select>
          <span> BY </span>
          <select className="select" placeholder="Select attribute" value={attribute} onChange={(e) => setAttribute(e.target.value)}>
            <option value="ID">ID</option>
            <option value="ACCOUNTID">ACCOUNT ID</option>
            <option value="POSTEDDATE">POSTED DATE</option>
            <option value="TRANSACTIONDATE">TRANSACTION DATE</option>
            <option value="STATUS">STATUS</option>
            <option value="CREATEDDATE">CREATED DATE</option>
            <option value="SECURITYID">SECURITY ID</option>
            <option value="OFXCHECKNUMBER">OFX CHECKNUMBER</option>
            <option value="BESTREPRESENTATION">BEST REPRESENTATION</option>
            <option value="SUBACCOUNTSECURITYTYPE">FEE AMOUNT</option>
            <option value="UNITQUANTITY">UNIT QUANTITY</option>
            <option value="CATEGORY">CATEGORY</option>
            <option value="INVESTMENTTRANSACTIONTYPE">INVESTMENT TRANSACTION TYPE</option>
            <option value="TRADEDATE">TRADE DATE</option>
            <option value="CUSIPNO">CUSTOMER IP NO</option>
            <option value="COUNTRY">COUNTRY</option>
            <option value="NORMALIZEDPAYEENAME">NORMALIZED PAYEE NAME</option>
          </select>
        
          <button type="submit">Analyze</button>
        </p>
      </form>
{data !== '404' ?
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 50, left: 50, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'lightblue' }} />
          <Legend />
          <Line type="monotone" dataKey="value" />
        </LineChart>
      </ResponsiveContainer>

: <div> Try Again</div>
}

    </div>
  )
}

export default ThoughtSpot;

