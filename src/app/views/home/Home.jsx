import React from 'react'
import axios from 'axios'
export default function Home(props){
    const test = () => {
        axios.get('http://localhost:8080/kospi/lgchem')
        .then(res => {
            alert('Connection Success!')
        }).catch(
            e=> alert('Failure')
        )
    }
    return (<>
            <table className='tab_layer'><tr><td><h1>Home</h1></td></tr>
            <tr><td><button onClick = {test}> Connection Test </button></td></tr></table> 
    </>)
}