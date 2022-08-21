
import React, { Component } from "react";
import Foods from "../Foods";
import Order from "../order";
import './style.css'

class BuildControl extends Component {

    state = {
        foods:[
            {
                id: 1,
                foodName: 'Grilled Corn',
                weight: '150g',
                price: '$1.75',
                ImgUrl: 'https://th.bing.com/th/id/R.e6f08c94fa04e5c173beaca7d48dafc1?rik=uZeg4aXmfMkRGw&pid=ImgRaw&r=0'
            },
            {
                id: 2,
                foodName: 'Ranch Burgers',
                weight: '150g',
                price: '$7.75',
                ImgUrl: 'https://th.bing.com/th/id/R.028f4f3a0b317351e151479d90d2a331?rik=ZwaXf0Exs0V0Ow&pid=ImgRaw&r=0'
            },
            {
                id: 3,
                foodName: 'Becon Pizza',
                weight: '150g',
                price: '$7.00',
                ImgUrl: 'https://th.bing.com/th/id/OIP.rowP2EcqokXxIqqdg3cGfAHaFj?pid=ImgDet&rs=1'
            },
            {
                id: 4,
                foodName: 'Futteccine pasta',
                weight: '150g',
                price: '$7.75',
                ImgUrl: 'https://hoorray-storage-prod.s3.amazonaws.com/images/recipes/6e6222f0-607a-11e5-8adc-b19ddf7fe5c1-large'
            },
            {
                id: 5,
                foodName: 'Stuffed Flank Steak',
                weight: '150g',
                price: '$13.50',
                ImgUrl: 'https://howtofeedaloon.com/wp-content/uploads/2017/06/stuffed-flank-steak-feature.jpg'
            },
            {
                id: 6,
                foodName: 'Tortillas',
                weight: '150g',
                price: '$7.75',
                ImgUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/23031_sfs-easy-flour-tortillas-015'
            },
            {
                id: 7,
                foodName: 'Original Burgers',
                weight: '150g',
                price: '$7.00',
                ImgUrl: 'https://th.bing.com/th/id/OIP.NsFSOdhaQta0u9OlAh668wHaE8?pid=ImgDet&rs=1'
            },
            {
                id: 8,
                foodName: 'Pancakes',
                weight: '150g',
                price: '$1.75',
                ImgUrl: 'https://th.bing.com/th/id/R.d74e278aae3c9cad06e5b4171acf4c95?rik=uK%2bYNuziJK3IuQ&pid=ImgRaw&r=0'
            },
            {
                id: 9,
                foodName: 'Pepperoni Pizza',
                weight: '150g',
                price: '$13.50',
                ImgUrl: 'https://th.bing.com/th/id/OIP.GZwtdeRcBzrJ6Di5a70kYAHaEx?pid=ImgDet&rs=1'
            },
            
            
        ]
    }
     render(){
        return(
            <div>
                <Foods foods={this.state.foods} />
                <Order />
            </div>
        )
    }
}
export default BuildControl;