export const level =[

    {name:"caro",
    id: "0",
    scope:0,
    active: true,
    focus: false,
    tracked: true,
    limit:false,
    greens:false,
    goal:false,
    children: [


        {name:"linh",
        id: "1",
        scope:1,
        active: false,
        focus: true,
        tracked: false,
        greens:false,
        goal:false,
        flow:1,
        children:[


               {name:"niklas",
                id: "1.1",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                greens:false,
                children: [],
                limit:true,
                goal:false,
                flow:1,
                angl:10,
                dist:140,
                ring:2},

                {name:"dora",
                id: "1.2",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                greens:false,
                goal:false,
                children: [],
                limit:true,
                flow:2,
                angl:130,
                dist:170,
                ring:1},


        ],
        angl:50,
        dist:200,
        ring:0},
            
        {name:"dennis",
        id: "2",
        scope:1,
        active: false,
        focus: false,
        tracked: false,
        greens:false,
        goal:false,
        flow:2,
        children:[

            {   name:"aramo",
                id: "2.1",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                children: [],
                limit:true,
                greens:true,
                goal:false,
                flow:1,
                angl:10,
                dist:150,
                ring:0},

                { name:"jan",
                id: "2.3",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                greens:false,
                children: [],
                limit:true,
                goal:false,
                flow:2,
                angl:250,
                dist:140,
                ring:0},

        ],
        limit:false,
        angl:170,
        dist:300
    },
    
        { name:"cj",
        id: "3",
        scope:1,
        active: false,
        focus: false,
        tracked: false,
        greens:false,
        goal:false,
        flow:3,
        children:[

            {   name:"lara",
                id: "3.1",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                greens:false,
                children:[],
                limit:true,
                goal:false,
                flow:1,
                angl:170,
                dist:150,
                ring:2},

            {   name:"andreas",
                id: "3.2",
                scope:2,
                active: false,
                focus: false,
                tracked: false,
                greens:false,
                seeds:false,
                goal:true,
                children:[],
                limit:true,
                flow:2,
                angl:290,
                dist:140,
                ring:0}


        ],
        limit:false,
        angl:290,
        dist:130,
        ring:0}]

}]

export const max = 5
export const PositionOne = "caro"
export const FocusOne = "linh"
        
    





