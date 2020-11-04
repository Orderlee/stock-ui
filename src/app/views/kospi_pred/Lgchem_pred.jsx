import React , {useEffect, useState} from "react";
import { Breadcrumb, SimpleCard } from "matx";
import { Grid } from "@material-ui/core";
import axios from 'axios'
import {Link} from 'react-router-dom'


const clickbutton = e => {
    axios.get(`http://localhost:8080/kospi/lgchem_pred`)
    .then(
      res => { alert(`SUCCESS`)
    }
    )
    .catch(e => {alert(`Failure`)
    throw (e)
  })
  
  
  const bgClassList = [
    
  ];

  const textClassList = [
    
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "kospi_pred", path: "/kospi_pred" },
            { name: "LG chem" }
          ]}
        />
      </div>
      <SimpleCard title="Background Color Class">
        <Grid container spacing={3}>
          {bgClassList.map((bg, ind) => (
            <Grid item key={ind}>
              <div
                className={`h-132 w-132 border-radius-8 elevation-z6 ${bg.bgClass} flex justify-center items-center`}
              >
                <span className={`${bg.textClass}`}>.{bg.bgClass}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </SimpleCard>
      <div className="py-3" />
      <SimpleCard title="Text Color Class">
        <Grid container spacing={3}>
          {textClassList.map((bg, ind) => (
            <Grid item key={ind}>
              <div
                className={`h-132 w-132 border-radius-8 elevation-z6 ${bg.bgClass} flex justify-center items-center`}
              >
                <span className={`${bg.textClass}`}>.{bg.textClass}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </SimpleCard>
      <button onClick = {clickbutton}>clickbutton</button></div> 
  );
};

export default clickbutton;
