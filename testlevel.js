export const levelOne =[

    {name:"new earth",
    id: "0 (BASE)",
    scope:0,
    active: false,
    focus: false,
    tracked: true,
    limit:false,
    seedpack:false,
    goal:false,
    children: [


        {name: "zen",
        id: "1",
        scope:1,
        active: false,
        focus: false,
        tracked: true,
        seedpack:false,
        goal:false,
        flow:1,
        children:[


               { name: "valerie",
               id: "1.1",
               scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                children: [],
                limit:true,
                goal:false,
                flow:1,
                angl:10,
                dist:140},

                {name: "lucy",
                id: "1.2",
                scope:2,
                active: true,
                focus: false,
                tracked: true,
                seedpack:false,
                goal:false,
                children: [     {name: "max",
                                id: "1.2.1",
                                scope:3,
                                active: false,
                                focus: true,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:false,
                                flow:1,
                                angl:100,
                                dist:80},
            
                                {name: "anna",
                                id: "1.2.2",
                                scope:3,
                                active: false,
                                focus: false,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:false,
                                flow:2,
                                angl:190,
                                dist:80},
                            
                                {name: "sam",
                                id: "1.2.3",
                                scope:3,
                                active: false,
                                focus: false,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:false,
                                flow:3,
                                angl:290,
                                dist:80}],

                flow:2,
                angl:130,
                dist:170},

                { name:"jay",
                id:"1.3",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                children: [],
                limit:true,
                goal:false,
                flow:3,
                angl:250,
                dist:130}


        ],
        angl:50,
        dist:300},
            
        { name: "gaia",
        id: "2",
        scope:1,
        active: false,
        focus: false,
        tracked: false,
        seedpack:false,
        goal:false,
        flow:2,
        children:[

            {   name: "venus",
                id: "2.1 SEEDS",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                seedpack:true,
                goal:false,
                flow:1,
                angl:10,
                dist:150},

            {   name: "ash",
                id: "2.2",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                children: [],
                limit: true,
                goal:false,
                flow:2,
                angl:130,
                dist: 150},

                { name: "mona",
                id: "2.3",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                children: [],
                limit:true,
                goal:false,
                flow:3,
                angl:250,
                dist:140},

        ],
        angl:170,
        dist:300
    },
    
        { name: "yin",
        id: "3",
        scope:1,
        active: false,
        focus: false,
        tracked: false,
        seedpack:false,
        goal:false,
        flow:3,
        children:[

            {   name: "goa",
                id: "3.1",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                children:[],
                limit:true,
                goal:false,
                flow:1,
                angl:70,
                dist:150},

            {   name: "runa",
                id: "3.2",
                scope:2,
                parent:"gaia",
                order:3,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                seeds:false,
                goal:false,
                children: 
                
                        [       {name: "jose",
                                id: "3.2.1",
                                scope:3,
                                active: false,
                                focus: false,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:false,
                                flow:1,
                                angl:90,
                                dist:90},
                            
                                {name: "mars",
                                id: "3.2.2",
                                scope:3,
                                active: false,
                                focus: false,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:false,
                                flow:2,
                                angl:250,
                                dist:120},
                            
                                {name: "svea",
                                id: "3.2.3 GOAL",
                                scope:3,
                                active: false,
                                focus: false,
                                tracked: false,
                                seedpack:false,
                                children: [],
                                limit:true,
                                goal:true,
                                flow:3,
                                angl:320,
                                dist:80}]
                
                ,
                flow:2,
                angl:190,
                dist:140},

            {   name: "leo",
                id: "3.3",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                seedpack:false,
                limit:true,
                goal:false,
                children: [],
                flow:3,
                angl:310,
                dist:120},


        ],
        angl:290,
        dist:300}]

}]

export const max = 14
        
    





