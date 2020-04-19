import md5 from 'md5';
export const defaultState = {
    // session:{
    //     authenticated: false
    // },
    users:[{
        id:'U1',
        name: "Dev",
        passwordHash: md5("sandy")
    }],
    groups:[{
        name:"To-Do",
        id:"G1",
        owner:"U1"
    },
    {
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }],
    tasks:[{
        name:"Do Tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great Work!!!"
    }]
}