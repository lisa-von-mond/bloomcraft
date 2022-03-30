export const levelOne =[

    {name:"new earth",
    active: true,
    focus: false,
    tracked: false,
    limit:false,
    children: [


        {name: "zen",
        id: "1",
        active: false,
        focus: true,
        tracked: false,
        flow:1,
        children:[


               { name: "valerie",
               id: "1.1",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:1,
                angl:10,
                dist:140},

                {name: "lucy",
                id: "1.2",
                active: false,
                focus: false,
                tracked: false,
                children: [     {name: "max",
                                id: "1.2.1",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:1,
                                angl:100,
                                dist:80},
            
                                {name: "anna",
                                id: "1.2.2",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:2,
                                angl:190,
                                dist:80},
                            
                                {name: "sam",
                                id: "1.2.3",
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
                id:"1.3",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:3,
                angl:250,
                dist:130}


        ],
        angl:50,
        dist:300},
            
        { name: "gaia",
        id: "2",
        active: false,
        focus: false,
        tracked: false,
        flow:2,
        children:[

            {   name: "venus",
                id: "2.1",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                flow:1,
                angl:10,
                dist:150},

            {   name: "ash",
                id: "2.2",
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit: true,
                flow:2,
                angl:130,
                dist: 150},

                { name: "mona",
                id: "2.3",
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
        id: "3",
        active: false,
        focus: false,
        tracked: false,
        flow:3,
        children:[

            {   name: "goa",
                id: "3.1",
                active: false,
                focus: false,
                tracked: false,
                children:[],
                limit:true,
                flow:1,
                angl:70,
                dist:150},

            {   name: "runa",
                id: "3.2",
                parent:"gaia",
                order:3,
                active: false,
                focus: false,
                tracked: false,
                children: 
                
                        [       {name: "jose",
                                id: "3.2.1",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:1,
                                angl:90,
                                dist:90},
                            
                                {name: "mars",
                                id: "3.2.2",
                                active: false,
                                focus: false,
                                tracked: false,
                                children: [],
                                limit:true,
                                flow:2,
                                angl:250,
                                dist:120},
                            
                                {name: "svea",
                                id: "3.2.3",
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
                id: "3.3",
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

export const max = 12
        
    





