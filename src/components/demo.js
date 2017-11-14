import React, { Component } from 'react';

import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

import * as R from 'ramda'

import {CARS} from '../data/Cars'

const mutateObj = obj => key => value => {
    obj[key] = value
}

const valuePerPrice = (value, price) => value / price

const calulateVPP = c => Object.assign({}, c, {vpp: valuePerPrice(c.horsepower, c.dollar_value)} )

const VPP = c => c.vpp

const calculateRV = x => { x.rv = x.vpp * (100 / max); return x}

window.CARS = CARS
window.R = R
window.calulateVPP = calulateVPP
window.VPP = VPP

let cars = R.map(calulateVPP, CARS)
let vpps = cars.map(VPP)
let max = Math.max(...vpps)
let rv = R.map(calculateRV, cars)

console.log(cars, vpps, max, rv)
console.log(rv)

let res  = R.compose( Math.max(R.map(VPP,)) , R.map(calulateVPP, CARS))

console.log(res)

class Demo extends Component {
    
    render() {
        let data = rv
        return (
            Chart(data, 'rv', 900, 300)
        );
    }
}

export default Demo;

const Chart = (data, key, width=500, height=500) => { 
    return (
        <BarChart width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={key} fill="#8884d8" />
      </BarChart>
    );
}