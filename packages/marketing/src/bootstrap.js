import React from 'react'
import {render} from 'react-dom'
import App from "./App";




const mount = (el) => {
    console.log('mounting marketing on el', el)
    render(<App/>, el)
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev-root');
    if(el){
        mount(el)
    }
}

export {mount}