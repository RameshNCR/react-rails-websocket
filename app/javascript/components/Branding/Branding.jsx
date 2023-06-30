import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Addtemplate } from '../../redux/Action';

export default function Branding() {
  const Branding = useSelector((state)=>state.tempbrand.branding);
  const dispatch = useDispatch();

  const AddModel = (e) => {
    dispatch(Addtemplate(e.target.value,`branding.Model`))
  }
  const AddPrice = (e) => {
    dispatch(Addtemplate(e.target.value,'branding.price'))
  }
  return (
    <div>
      <h1>Branding</h1>
      <label>Model</label>
      <input onChange={(e)=>{AddModel(e)}}></input>
      <br/>
      <label>price</label>
      <input onChange={(e)=>{AddPrice(e)}}></input>
      <br/>
      <h6>{Branding.Model} - {Branding.price}</h6>
    </div>
  )
}
