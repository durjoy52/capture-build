export const pageAnimation = {
    hidden:{
        opacity: 0,
        y:300
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            when:"beforeChildren",
            staggerChildren:0.25
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.50,
        }

    }
}

export const titleAnim = {
    show:{
        y:0,
        transition:{
            duration: .50,
            ease:"easeOut"
        }
    },
    hidden:{
        y:200
    }
}

export const fade = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{duration:.75 }
    }
}

export const photoAnim = {
    hidden:{opacity:0,scale:1.50},
    show:{
        opacity:1,
        scale:1,
        transition:{duration:.75,ease:"easeOut"}
    }
}

export const lineAnim = {
    hidden:{width:'0%'},
    show:{
        width:'100%',
        transition:{duration:1}
    }
}

export const slider = {
    hidden:{x:'-130%',skew:'45deg'},
    show:{
        x:'100%',
        skew:'0deg',
        transition: {ease:'easeOut',duration:1}
    }
}

export const sliderContainer = {
    hidden:{opacity:1},
    show:{opacity:1,transition:{staggerChildren:0.15,ease:'easeOut'}}
}

export const scrollReveal = {
    hidden:{
        opacity: 0,
        scale:.9
    },
    show:{
        opacity: 1,
        scale:1,
        transition:{
            duration:0.5,
            ease:"easeOut"
        }
    }
}

export const swoopAdoop = {
    hidden:{width:"0%"},
    show:{
        width:"100%",
        transition: {ease:'easeOut',duration:1}
    }
}