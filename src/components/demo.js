import React, { Component } from 'react';
import './demo.css'

import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import * as R from 'ramda'

import { CARS } from '../data/Cars'

const mutateObj = obj => key => value => {
    obj[key] = value
}


const compose = (...fns) => fns.reduce((prev, next) => value => prev(next(value)), value => value)

const composeMap = (...fns) => fns.reduce((prev, next) => value => prev(value.map(next)), value => value)


const valuePerPrice = (value, price) => value / price

const VPP = c => c.vpp


const calculateVPP = c => Object.assign({}, c, { vpp: valuePerPrice(c.horsepower, c.dollar_value) })
const calculateRV = x => { x.rv = x.vpp * (100 / max); return x }

window.CARS = CARS
window.R = R
window.calulateVPP = calculateVPP
window.VPP = VPP

let cars = R.map(calculateVPP, CARS)
let vpps = cars.map(VPP)
let max = Math.max(...vpps)
let rv = R.map(calculateRV, cars)

console.log(cars, vpps, max, rv)
console.log(rv)

let res = R.compose(Math.max(R.map(VPP, )), R.map(calculateVPP, CARS))

compose(calculateRV, calculateVPP)

console.log(res)



// Exercise 1
var isLastInStock = function (cars) {
    var last_car = R.last(cars);
    return R.prop('in_stock', last_car);
};

var isLastInStock2 = 

console.log(isLastInStock(CARS))








class Demo extends Component {

    render() {
        let data = rv
        return (
            <div className="chart-list">
                {['vpp', 'rv'].map(key => {
                    return Chart(data, key, 1000, 300)
                })}
            </div>
        );
    }
}

export default Demo;

const Chart = (data, key, width = 500, height = 500) => {
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