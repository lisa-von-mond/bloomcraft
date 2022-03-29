export const levelOne =[

    {name:"earth",
    type:"sun",
    active: true,
    focus: false,
    tracked: false,
    children: [


        {name: "zen",
        active: false,
        focus: true,
        tracked: false,
        flow:1,
        children:[


               { name: "valerie",
                type:"moon",
                parent:"yin",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:1,
                angl:10,
                dist:140},

                { name: "lucy",
                active: false,
                focus: false,
                tracked: false,
                children: [     {name: "max",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:1,
                                angl:100,
                                dist:80},
            
                                {name: "anna",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:2,
                                angl:190,
                                dist:80},
                            
                                {name: "sam",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:3,
                                angl:290,
                                dist:80}],

                flow:2,
                angl:130,
                dist:170},

                { name:"jay",
                parent:"yin",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:3,
                angl:250,
                dist:130}


        ],
        parent:"earth",
        angl:50,
        dist:300},
            
        { name: "gaia",
        done:false,
        active: false,
        focus: false,
        tracked: false,
        flow:2,
        children:[

            {   name: "venus",
                active: false,
                focus: false,
                tracked: false,
                base:true,
                children: [],
                limit:true,
                flow:1,
                angl:10,
                dist:150},

            {   name: "ash",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit: true,
                flow:2,
                angl:130,
                dist: 150},

                { name: "mona",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:3,
                angl:250,
                dist:140},

        ],
        angl:170,
        dist:300
    },
    
        { name: "yin",
        active: false,
        focus: false,
        tracked: false,
        flow:3,
        children:[

            {   name: "goa",
                active: false,
                focus: false,
                tracked: false,
                children:[],
                limit:true,
                flow:1,
                angl:70,
                dist:150},

            {   name: "runa",
                parent:"gaia",
                order:3,
                active: false,
                focus: false,
                tracked: false,
                children: 
                
                        [       {name: "max",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:1,
                                angl:90,
                                dist:90},
                            
                                {name: "anna",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:2,
                                angl:250,
                                dist:120},
                            
                                {name: "sam",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:3,
                                angl:320,
                                dist:80}]
                
                ,
                flow:2,
                angl:190,
                dist:140},

            {   name: "leo",
                active: false,
                focus: false,
                tracked: false,
                limit:true,
                children: [],
                flow:3,
                angl:310,
                dist:120},


        ],
        angl:290,
        dist:300}]

}]
        
    





