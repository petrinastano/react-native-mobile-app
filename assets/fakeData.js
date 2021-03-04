
const data = [

          {
            id:1,
            category:"Parties",
            events: [

                {
                  id:1,
                  title: "Milan Lieskovský v Miami Clube",
                  image: 'https://cdn-az.allevents.in/banners/5486ff1130fa67dbc22f48f206dff915',
                },

                {
                  id:2,
                  title: "Armin van Buuren in Trenčín /SK/",
                  image: 'https://cdn-az.allevents.in/banners/b942596e74587cb9629b904ef70477df',
                },

                {
                  id:3,
                  title: "Et veliot junak evelit",
                  image: 'https://cdn-az.allevents.in/banners/e0ae0bcbef9aa7bfbac300cd5d9b04c7',
                },

                {
                  id:4,
                  title: "Ipsum dipsum metro",
                  image: 'https://cdn-az.allevents.in/banners/7cff9c55d85c1f2b6553df60731b5988',
                },

            ]
          },


          {
            id:2,
            category:"Concerts",
            events: [

                {
                  id:5,
                  title: "Alle Farben 10.11. Bratislava",
                  image: 'https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-8/20861542_1458924557519509_3685356138527733343_o.jpg?oh=91cde120886870bd8f84111caa59d00e&oe=5A804E35',
                },

                {
                  id:6,
                  title: "BASS Fest+2017",
                  image: 'https://cdn-az.allevents.in/banners/4812465da8dd3b4113a8845e235c491a',
                },

                {
                  id:7,
                  title: "Vendetta - Rock Club Tartaros in Banská Bystrica",
                  image: 'https://cdn-az.allevents.in/banners/3a611ba5b4125c758bc2f47910ad4fce',
                },

                {
                  id:8,
                  title: "Falusi Mariann, Presser Gábor",
                  image: 'https://cdn-az.allevents.in/banners/45b182802e173f51d1ff53c27c276344',
                },

            ]
          },


          {
            id:3,
            category:"Festivals",
            events: [

                {
                  id:9,
                  title: "King of the Gypsy dance a Cigánski diabli",
                  image: 'https://cdn-az.allevents.in/banners/ec0bec67fa2f01226bb30b8b8c358269',
                },

                {
                  id:10,
                  title: "KALI na TMM",
                  image: 'https://cdn-az.allevents.in/banners/d19d8be99e9f30a0cc2844c1ea16732f',
                },

                {
                  id:11,
                  title: "Koncert: Martin Geišberg &amp; Daniel Špiner",
                  image: 'https://cdn-az.allevents.in/banners/ee8420949c2622364e725dd17b993d94',
                },

                {
                  id:12,
                  title: "Nuance Lite",
                  image: 'https://cdn-az.allevents.in/banners/11a067f60bd8e4701ff97e5dbe615f68',
                },

            ]
          },


          {
            id:4,
            category:"Sport",
            events: [

                {
                  id:13,
                  title: "Miliónový Tanečník V Clube Theatro Levice",
                  image: 'https://cdn-az.allevents.in/banners/fced7afcc05f095435313dfda857eb20',
                },

                {
                  id:14,
                  title: "Equinox Session",
                  image: 'https://cdn-az.allevents.in/banners/53a61bf5ef06ccee54dc9c9ea9dee418',
                },

                {
                  id:15,
                  title: "Hunting Season With RICHARD REYNOLDS",
                  image: 'https://cdn-az.allevents.in/banners/1e48b3488a78ca22dee230d2e1c313bb',
                },

                {
                  id:16,
                  title: "Strapo / School Party / Belize",
                  image: 'https://cdn-az.allevents.in/banners/f310846d3bcf1a0671c63283818aefa7',
                },

            ]
          },

          
          {
            id:5,
            category:"Music",
            events: [

                {
                  id:17,
                  title: "Miliónový Tanečník V Clube Theatro Levice",
                  image: 'https://cdn-az.allevents.in/banners/5e6d53b05305c8d65ecf68bbdd61d417',
                },

                {
                  id:18,
                  title: "Equinox Session",
                  image: 'https://cdn-az.allevents.in/banners/8ebf2e8d35f1bf3ba990b8696e9e2767',
                },

                {
                  id:19,
                  title: "Hunting Season With RICHARD REYNOLDS",
                  image: 'https://cdn-az.allevents.in/banners/b632a7a2525041cc91016387bae7e8f7',
                },

                {
                  id:20,
                  title: "Strapo / School Party / Belize",
                  image: 'https://cdn-az.allevents.in/banners/da3e870daabd07c5423cfbc1272839e0',
                },

            ]
          },

          {
            id:6,
            category:"Cool events",
            events: [

                {
                  id:21,
                  title: "Miliónový Tanečník V Clube Theatro Levice",
                  image: 'https://cdn-az.allevents.in/banners/9370cab513f4bc3ddf60d1aee8d1fe10',
                },

                {
                  id:22,
                  title: "Equinox Session",
                  image: 'https://cdn-az.allevents.in/banners/c4a9fd3103641f4a4e347949426db891',
                },

                {
                  id:23,
                  title: "Hunting Season With RICHARD REYNOLDS",
                  image: 'https://cdn-az.allevents.in/banners/ab251f9bc2ba177fd3ea764dac3af3f3',
                },

                {
                  id:24,
                  title: "Strapo / School Party / Belize",
                  image: 'https://cdn-az.allevents.in/banners/f10a36f654c5a3fafb15c2c1c582e71d',
                },

            ]
          },
          

      ];


const subcategories = [

    {
      text:"festivals",
    },

    {
      text:"concert"
    },

    {
      text:"music"
    },

    {
      text:"performing"
    },

    {
      text:"singer"
    },

    {
      text:"live music"
    },

];

const nextcategories = [

    {
      text:"trance music",
    },

    {
      text:"house"
    },

    {
      text:"hip-hop"
    },

    {
      text:"rock"
    },

];

// Data - scrolling event list

const dataGroupFirst = [

    {
      text: "Miliónový Tanečník V Clube Theatro Levice",
      image: 'https://cdn-az.allevents.in/banners/9370cab513f4bc3ddf60d1aee8d1fe10',
    },

    {
      text: "Equinox Session",
      image: 'https://cdn-az.allevents.in/banners/c4a9fd3103641f4a4e347949426db891',
    },

    {
      text: "Hunting Season With RICHARD REYNOLDS",
      image: 'https://cdn-az.allevents.in/banners/ab251f9bc2ba177fd3ea764dac3af3f3',
    },

    {
      text: "Strapo / School Party / Belize",
      image: 'https://cdn-az.allevents.in/banners/f10a36f654c5a3fafb15c2c1c582e71d',
    },

];


const dataGroupSecond = [

    {
      text: "King of the Gypsy dance a Cigánski diabli",
      image: 'https://cdn-az.allevents.in/banners/ec0bec67fa2f01226bb30b8b8c358269',
    },

    {
      text: "KALI na TMM",
      image: 'https://cdn-az.allevents.in/banners/d19d8be99e9f30a0cc2844c1ea16732f',
    },

    {
      text: "Koncert: Martin Geišberg &amp; Daniel Špiner",
      image: 'https://cdn-az.allevents.in/banners/ee8420949c2622364e725dd17b993d94',
    },

    {
      text: "Nuance Lite",
      image: 'https://cdn-az.allevents.in/banners/11a067f60bd8e4701ff97e5dbe615f68',
    },

];

const dataGroupThird = [

    {
      text: "Milan Lieskovský v Miami Clube",
      image: 'https://cdn-az.allevents.in/banners/5486ff1130fa67dbc22f48f206dff915',
    },

    {
      text: "Armin van Buuren in Trenčín /SK/",
      image: 'https://cdn-az.allevents.in/banners/b942596e74587cb9629b904ef70477df',
    },

    {
      text: "Et veliot junak evelit",
      image: 'https://cdn-az.allevents.in/banners/e0ae0bcbef9aa7bfbac300cd5d9b04c7',
    },

    {
      text: "Ipsum dipsum metro",
      image: 'https://cdn-az.allevents.in/banners/7cff9c55d85c1f2b6553df60731b5988',
    },

];


const subdata = [

    {
      text:"Alle Farben 10.11. Bratislava",
      image:"https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-8/20861542_1458924557519509_3685356138527733343_o.jpg?oh=91cde120886870bd8f84111caa59d00e&oe=5A804E35"
    },

    {
      text:"Students Clubbing 9 / 25.10. Streda / Barracuda Nitra",
      image:"https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-0/p600x600/21586649_10155604700400420_7854845632338087190_o.jpg?oh=71cedaafa196c3bd027df24f028a02d8&oe=5A3D948E"
    },

    {
      text:"DJ EKG 12 Hodinový Solo Set /Wakelake 25.8 2018 (sobota)",
      image:"https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-8/q87/p960x960/21083408_10155549947165420_2896701041725471569_o.jpg?oh=ca7a24902da672865a3b85c6d8d8856a&oe=5A7ECDA9"
    },

    {
      text:"Idem Na Techno: III. roky spolu",
      image:"https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-0/q81/p180x540/21543935_1694358600577155_1930855130722149149_o.jpg?oh=47e80aabe10ef99ccf706cae2ed62cb3&oe=5A44C807"
    },

];



export {
    data,
    subdata,
    dataGroupFirst,
    dataGroupSecond,
    dataGroupThird,
    subcategories,
    nextcategories,
}