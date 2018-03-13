import React, { Component } from 'react'


const ListicleItems = [
    {
        name: 'Arjun',
        age: 33
    },
    {
        name: 'Aziz',
        age: 33
    },
    {
        name: 'Tanya',
        age: 22
    },
    {
        name: 'Richard',
        age: 300
    }
]


export default class Listicle extends Component {


    render() {

        const Listicle = ListicleItems.map((info, index) => {
            return (
                <li key={index}>
                    <span> my name is {info.name} – my age is {info.age} </span>
                </li>
            )
        })

        return (
        <div>
            <ul>
                {Listicle}
            </ul>
        </div>
        )
    }
    }
