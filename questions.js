let questions = [
  {
    title: "Caza de gangas",
    alternatives: [
      "Seeking bargains",
      "Finding low-priced items",
      "Hunting for deals",
      "Bargain hunting",
    ],
    correctAnswer: 3,
    file: "/mp3/bargain_hunting.mp3",
  },
  {
    title: "Hacer la compra",
    alternatives: [
      "Buying essentials",
      "Purchasing necessities",
      "Do the shopping",
      "Grocery shopping",
    ],
    correctAnswer: 2,
    file: "/mp3/do_the_shopping.mp3",
  },
  {
    title: "Ir de compras",
    alternatives: [
      "Retail therapy",
      "Shopping trip",
      "Go shopping",
      "Retail expedition",
    ],
    correctAnswer: 2,
    file: "/mp3/go_shopping.mp3",
  },
  {
    title: "Probador",
    alternatives: [
      "Trial room",
      "Changes room",
      "Fitting room",
      "Dressing room",
    ],
    correctAnswer: 2,
    file: "mp3/fitting_room.mp3",
  },
  {
    title: "No me lo puedo permitir",
    alternatives: [
      "Too expensive for me",
      "Beyond my financial means",
      "It's out of my budget",
      "I can't afford it",
    ],
    correctAnswer: 3,
    file: "mp3/I_cant_afford_it.mp3",
  },
  {
    title: "En stock/agotado",
    alternatives: [
      "Stocked/Depleted",
      "In stock/out of stock",
      "In supply/sold out",
      "Available/unavailable",
    ],
    correctAnswer: 1,
    file: "mp3/instock.mp3",
  },
  {
    title: "¡Cuesta una fortuna!",
    alternatives: [
      "It's quite pricey!",
      "It's very expensive!",
      "It's a hefty price!",
      "It costs a fortune!",
    ],
    correctAnswer: 3,
    file: "mp3/cost_a_fortune.mp3",
  },
  {
    title: "¡Cuesta un ojo de la cara!",
    alternatives: [
      "It's a small fortune!",
      "It's exorbitantly priced!",
      "It costs an arm and a leg!",
      "It's a wallet-buster!",
    ],
    correctAnswer: 2,
    file: "mp3/cost_an_arm.mp3",
  },
  {
    title: "¡Es un chollo!",
    alternatives: [
      "What a deal!",
      "Such a good buy!",
      "It's a steal!",
      "It's a yolo!",
    ],
    correctAnswer: 2,
    file: "mp3/a_steal.mp3",
  },
  {
    title: "Buena relación calidad-precio",
    alternatives: [
      "Worth the cost",
      "It's good value for money",
      "Great value",
      "Excellent value",
    ],
    correctAnswer: 1,
    file: "mp3/good_value.mp3",
  },
  {
    title: "Etiqueta de precio",
    alternatives: [ "Price tag", "Price label", "Product tag", "Retail tag"],
    correctAnswer: 0,
    file: "mp3/price_tag.mp3",
  },
  {
    title: "Recibo",
    alternatives: [
      "Transaction record",
      "Purchase receipt",
      "Receipt",
      "Sales slip",
    ],
    correctAnswer: 2,
    file: "mp3/receipt.mp3",
  },
  {
    title: "Reembolso",
    alternatives: [
      "Money backy",
      "Refund",
      "Reimbursement",
      "Return compensation",
    ],
    correctAnswer: 1,
    file: "mp3/refund.mp3",
  },
  {
    title: "Rebajas de verano o invierno",
    alternatives: [
      "Weather-themed sales",
      "Seasonal discounts",
      "Yearly clearance",
      "Summer or Winter sales",
    ],
    correctAnswer: 3,
    file: "mp3/sales.mp3",
  },
  {
    title: "Comparar precios",
    alternatives: [
      "Explore different prices",
      "Seek better deals",
      "Shop around",
      "Compare prices",
    ],
    correctAnswer: 2,
    file: "mp3/shoparound.mp3",
  },
  {
    title: "Asistente de tienda",
    alternatives: [
        "Shop assistant",
      "Store attendant",
      "Retail helper",
      
      "Customer service representative",
    ],
    correctAnswer: 0,
    file: "mp3/shop_assistant.mp3",
  },
  {
    title: "Comprar hasta caer",
    alternatives: [
        "Shop till you drop",
      "Non-stop buying",
      "Exhaustive retail therapy",
      
      "Endless shopping",
    ],
    correctAnswer: 0,
    file: "mp3/shoptill.mp3",
  },
  {
    title: "Adicto/a a las compras",
    alternatives: [
      "Buying fanatic",
      "Retail enthusiast",
      "Shopaholic",
      "Shopping addict",
    ],
    correctAnswer: 2,
    file: "mp3/shopaholic.mp3",
  },
  {
    title: "Compra compulsiva",
    alternatives: [
      "Shopping spree",
      "Retail indulgence",
      "Splurge session",
      "Buying binge",
    ],
    correctAnswer: 0,
    file: "mp3/shoppingspree.mp3",
  },
  {
    title: "Terapia de compras",
    alternatives: [
      "Retail rejuvenation",
      "Buying relief",
      "Shopping therapy",
      "Retail relaxation",
    ],
    correctAnswer: 2,
    file: "mp3/shopping_therapy.mp3",
  },
  {
    title: "Gastar dinero",
    alternatives: [
      "Invest cash",
      "Expend funds",
      "Spend money",
      "Use finances",
    ],
    correctAnswer: 2,
    file: "mp3/spend_money.mp3",
  },
  {
    title: "gastar a manos llenas en algo",
    alternatives: [
        "Splash out on something",
      "Spend lavishly on something",
      "Go all out on something",
      "Invest in something",
      
    ],
    correctAnswer: 0,
    file: "mp3/splash_out.mp3",
  },
  {
    title: "Devolver un artículo",
    alternatives: [
      "Bring something for a refund",
      "Return an item",
      "Give back a purchase",
      "Take something back",
    ],
    correctAnswer: 1,
    file: "mp3/return.mp3",
  },
  {
    title: "¡Eso es una ganga!",
    alternatives: [
      "Incredible price!",
      "Such a steal!",
      "That's a bargain!",
      "What a deal!",
    ],
    correctAnswer: 2,
    file: "mp3/bargain.mp3",
  },
  {
    title: "¡Es un poco caro!",
    alternatives: [
      "A bit costly!",
      "A little on the expensive side!",
      "It's a tad expensive!",
      "That's a bit pricey!",
    ],
    correctAnswer: 3,
    file: "mp3/pricey.mp3",
  },
  {
    title: "¡Estos zapatos me quedan apretados!",
    alternatives: [
      "these shoes are too tight!",
      "this shoe is too tight!",
      "these papes are apreted!",
      "these shoes are fixed!",
    ],
    correctAnswer: 0,
    file: "mp3/tight.mp3",
  },
  {
    title: "¡Eso está regalado!",
    alternatives: [
      "So inexpensive!",
      "Unbelievably low-priced!",
      "It's a giveaway!",
      "That's dirt cheap!",
    ],
    correctAnswer: 3,
    file: "mp3/cheap.mp3",
  },
  {
    title: "¡Es un timo!",
    alternatives: [
      "It's extortionate!",
      "Daylight robbery!",
      "It's a swindle!",
      "That's a rip-off!",
    ],
    correctAnswer: 3,
    file: "mp3/ripoff.mp3",
  },
  {
    title: "Mirar escaparates",
    alternatives: [
      "Window gazing",
      "Strolling past shop displays",
      "Window shopping",
      "Browsing shop windows",
    ],
    correctAnswer: 2,
    file: "mp3/window.mp3",
  },
  {
    title: "¿Qué está buscando?",
    alternatives: [
      "What are you looking for?",
      "What are you looking at?",
      "What are you looking after?",
      "What are you looking forward to?",
    ],
    correctAnswer: 0,
    file: "mp3/lookfor.mp3",
  },
  {
    title: "¿Qué talla usa?",
    alternatives: [
      "What size do you take??",
      "What size do you wear?",
      "What tage do you can?",
      "What is your taille?",
    ],
    correctAnswer: 0,
    file: "mp3/size.mp3",
  },
  {
    title: "Puede recogerlo mañana",
    alternatives: [
      "Tomorro it is a better day",
      "You might help tomorrow",
      "You can manage it tomorrow",
      "You can pick it up tomorrow",
    ],
    correctAnswer: 3,
    file: "mp3/pickup.mp3",
  },
  {
    title: "¿Me puedo probar estos guantes?",
    alternatives: [
      "Can I try these luvas on?",
      "Can I try these shoes on?",
      "Can I try these gloves on?",
      "Can I try these gants on?",
    ],
    correctAnswer: 2,
    file: "mp3/gloves.mp3",
  }
  
];
