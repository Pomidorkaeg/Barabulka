
import{c as o,r as d,j as e,a}from"./index.js";
import{N as b,F as u}from"./Footer.js";
import{U as p}from"./users.js";
import{c as cn} from"./calendar.js";
import{Flag} from"lucide-react";

const M=()=>{
  const[l,n]=d.useState("gudauta");
  const[i,r]=d.useState("all");
  const[t,x]=d.useState(null);

  const gudautaPlayers = [
    {id:"1",name:"Александр Иванов",position:"Вратарь",number:1,birthDate:"15.05.1992",height:192,weight:87,nationality:"Россия",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",matches:24,goals:0,assists:1,yellowCards:1,redCards:0},
    {id:"2",name:"Дмитрий Петров",position:"Защитник",number:4,birthDate:"23.09.1994",height:186,weight:82,nationality:"Россия",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",matches:22,goals:2,assists:3,yellowCards:4,redCards:0},
    {id:"3",name:"Артем Смирнов",position:"Защитник",number:6,birthDate:"07.12.1995",height:184,weight:78,nationality:"Россия",image:"https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:26,goals:0,assists:1,yellowCards:5,redCards:1}
  ];

  const sportSchoolPlayers = [
    {id:"4",name:"Игорь Соколов",position:"Полузащитник",number:8,birthDate:"18.03.2006",height:177,weight:72,nationality:"Россия",image:"https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:28,goals:5,assists:7,yellowCards:3,redCards:0},
    {id:"5",name:"Сергей Козлов",position:"Полузащитник",number:10,birthDate:"05.07.2007",height:179,weight:74,nationality:"Россия",image:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:25,goals:8,assists:10,yellowCards:2,redCards:0},
    {id:"6",name:"Андрей Попов",position:"Нападающий",number:9,birthDate:"12.02.2008",height:183,weight:78,nationality:"Россия",image:"https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",matches:27,goals:15,assists:5,yellowCards:2,redCards:0}
  ];

  const activePlayers = l === 'gudauta' ? gudautaPlayers : sportSchoolPlayers;
  const filteredPlayers = activePlayers.filter(s => i === 'all' ? true : s.position === i);

  return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[
    e.jsx(b,{}),
    e.jsxs("main",{className:"flex-grow pt-16 page-transition",children:[
      e.jsxs("div",{className:"relative bg-fc-green text-white py-16",children:[
        e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80",style:{backgroundImage:"url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay"}}),
        e.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:
          e.jsxs("div",{className:"flex flex-col items-center text-center space-y-8",children:[
            e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Наши команды"}),
            e.jsx("p",{className:"max-w-2xl text-white/80 text-lg mb-8",children:"Выберите команду для просмотра состава"}),
            e.jsxs("div",{className:"flex gap-6",children:[
              e.jsxs("button",{
                onClick:()=>n("gudauta"),
                className:cn(
                  "px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300",
                  l==="gudauta"
                    ? "bg-white text-fc-green"
                    : "bg-white/10 text-white hover:bg-white/20"
                ),
                children:[
                  e.jsx(Flag,{className:"w-5 h-5 inline-block mr-2"}),
                  "ФК Гудаута"
                ]
              }),
              e.jsxs("button",{
                onClick:()=>n("sport-school"),
                className:cn(
                  "px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300",
                  l==="sport-school"
                    ? "bg-white text-fc-green"
                    : "bg-white/10 text-white hover:bg-white/20"
                ),
                children:[
                  e.jsx(Flag,{className:"w-5 h-5 inline-block mr-2"}),
                  "СШ Гудаута"
                ]
              })
            ]})
          ]})
        })
      ]}),
      e.jsxs("div",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[
        e.jsx("div",{className:"mb-8 flex justify-center",children:
          e.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-full",children:[
            e.jsx("button",{onClick:()=>r("all"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",i==="all"?"bg-fc-green text-white":"text-gray-700 hover:bg-gray-200"),children:"Все"}),
            e.jsx("button",{onClick:()=>r("Вратарь"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",i==="Вратарь"?"bg-fc-green text-white":"text-gray-700 hover:bg-gray-200"),children:"Вратари"}),
            e.jsx("button",{onClick:()=>r("Защитник"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",i==="Защитник"?"bg-fc-green text-white":"text-gray-700 hover:bg-gray-200"),children:"Защитники"}),
            e.jsx("button",{onClick:()=>r("Полузащитник"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",i==="Полузащитник"?"bg-fc-green text-white":"text-gray-700 hover:bg-gray-200"),children:"Полузащитники"}),
            e.jsx("button",{onClick:()=>r("Нападающий"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",i==="Нападающий"?"bg-fc-green text-white":"text-gray-700 hover:bg-gray-200"),children:"Нападающие"})
          ]})
        }),
        e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:
          filteredPlayers.map(s=>
            e.jsx("div",{className:"bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex",children:
              e.jsxs("div",{className:"flex",children:[
                e.jsxs("div",{className:"w-1/3 relative",children:[
                  e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover aspect-[3/4]"}),
                  e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent"}),
                  e.jsx("div",{className:"absolute top-3 left-3 bg-fc-green text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg",children:s.number})
                ]}),
                e.jsx("div",{className:"w-2/3 p-4",children:
                  e.jsxs("div",{className:"flex flex-col h-full",children:[
                    e.jsxs("div",{children:[
                      e.jsx("div",{className:"text-xs font-medium text-fc-green mb-1",children:s.position}),
                      e.jsx("h3",{className:"text-lg font-bold mb-3",children:s.name})
                    ]}),
                    e.jsxs("div",{className:"mt-auto grid grid-cols-3 gap-2 text-center",children:[
                      e.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[
                        e.jsx("div",{className:"text-xs text-gray-500",children:"Матчи"}),
                        e.jsx("div",{className:"font-bold",children:s.matches})
                      ]}),
                      e.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[
                        e.jsx("div",{className:"text-xs text-gray-500",children:"Голы"}),
                        e.jsx("div",{className:"font-bold",children:s.goals})
                      ]}),
                      e.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[
                        e.jsx("div",{className:"text-xs text-gray-500",children:"Передачи"}),
                        e.jsx("div",{className:"font-bold",children:s.assists})
                      ]})
                    ]})
                  ]})
                })
              ]})
            },s.id)
          )
        })
      ]})
    ]}),
    e.jsx(u,{})
  ]})
};

export{M as default};
