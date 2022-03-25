export const levelOne = [

    {name:"earth",
    type:"sun",
    active: true,
    focus: false,
    children: [


        {name: "zen",
        type:"planet",
        active: false,
        focus: true,
        flow:1,
        children:[


               { name: "valerie",
                type:"moon",
                parent:"yin",
                active: false,
                focus: false,
                flow:1,
                angl:10,
                dist:120},

                { name: "lucy",
                type:"moon",
                parent:"yin",
                active: false,
                focus: false,
                flow:2,
                angl:130,
                dist:80},

                { name:"jay",
                type:"moon",
                parent:"yin",
                active: false,
                focus: false,
                flow:3,
                angl:250,
                dist:90}


        ],
        parent:"earth",
        angl:50,
        dist:220},
            
        { name: "gaia",
        type:"planet",
        done:false,
        active: false,
        focus: false,
        flow:2,
        children:[

            {   name: "venus",
                type:"moon",
                parent:"zen",
                active: false,
                focus: false,
                flow:1,
                angl:10,
                dist:100},

            {   name: "ash",
                type:"moon",
                parent:"zen",
                active: false,
                focus: false,
                flow:2,
                angl:130,
                dist: 110},

                { name: "mo",
                type:"moon",
                parent:"zen",
                active: false,
                focus: false,
                flow:3,
                angl:250,
                dist:80},

        ],
        parent:"earth",
        angl:170,
        dist:250
    },
    
        { name: "yin",
        type:"planet",
        done:false,
        active: false,
        focus: false,
        flow:3,
        children:[

            {   name: "goa",
                type:"moon",
                parent:"gaia",
                active: false,
                focus: false,
                flow:1,
                angl:70,
                dist:110},

            {   name: "runa",
                type:"moon",
                parent:"gaia",
                active: false,
                focus: false,
                flow:2,
                angl:190,
                dist:80},

            {   name: "leo",
                type:"moon",
                parent:"gaia",
                active: false,
                focus: false,
                flow:3,
                angl:310,
                dist:100},


        ],
        parent:"earth",
        angl:290,
        dist:260}

    ],

}]
        
    





