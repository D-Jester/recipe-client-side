const fadeIn = (direction,delay)=>{
    return{
        hidden1:{
            y:(direction === 'up')? 40 : (direction === 'down')? -40 : 0,
            x:(direction === 'left')? 40 : (direction  === 'right')? -40 : 0 
        },
        hidden2:{
            opacity:0
        },
        show1:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration: 1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        },
        show2:{
            opacity:1,
            transition:{
                type:"tween",
                duration: 1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }
}

export default fadeIn