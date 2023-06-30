import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { Removetemplate, Addtemplate } from '../../redux/Action';
import axios from 'axios';
import consumer from '../../channels/consumer';

export default function Template() {
  const _ = require('lodash');
  // const dispatch = useDispatch();
  const templates = useSelector((state)=>state.tempbrand.template);
  const branding = useSelector((state)=>state.tempbrand.branding);

  const [color, setColor] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [dbData, setDbData] = useState()

  const addData = () =>{
    // dispatch(Addtemplate(data, `template.${templates.length}`));
    // const data2 = {
    //   dataname : branding.Model,
    //   data : [{color: color, number: number}]
    // }
    const data1 = {
      resource : branding.Model,
      config : {color: color, number: number}
    }

    consumer.subscriptions.subscriptions[0].send({ data: data1, type: 'add_template' });
    setColor('');
    setNumber('');
  }

  const deletedata = (id) =>{
    consumer.subscriptions.subscriptions[0].send({ data: id, type: 'delete_template' });
  }

  const handleFetch = async() => {
    const response = await fetch('api/get_test_app_data');
    let ls = await response.json();
    setDbData(ls);
    // axios.get('api/get_test_app_data')
    // .then(response => setDbData(response.data))
  }

  useEffect(()=>{
    handleFetch();
    const channel = consumer.subscriptions.create('MyRailsChannel', {
      received: (data) => {
        setDbData(data.message)
      },  
    });
    // Clean up the subscription when the component unmounts
    return () => {
      channel.unsubscribe();
    };
  },[])

  

  return (
    <div>
      <h1>Template</h1>
      <label>color</label>
      <input type='text' value = {color} onChange={(e)=>{setColor(e.target.value)}}></input>
      <br/>
      <label>number</label>
      <input type='number' value = {number} onChange={(e)=>{setNumber(e.target.value)}}></input>
      <button onClick={()=>{addData()}}>Add</button>
      <ul>
        {_.map(dbData,(data, index)=>{
          return(
            <li key={index}>{`${data.config.color} - ${data.config.number}`}
            <button onClick={()=>{deletedata(data.id,)}}>delete</button></li>
          )
        })}
      </ul>
    </div>
  )
}
