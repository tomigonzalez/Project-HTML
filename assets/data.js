const products = [
    {
      id: 1,
      img: "img/shoes.png",
      name: "Snekeando",
      desc: "Este e-commerce lo diseñe/desarrolle con las tecnologias HTML , CSS Y JS,aplicando partes renderizadas con js , el funcionamiento de carrito de compras y otras funcionalidades. Fue un proyecto propio para una formacion en un bootcamp.",
    },
    {
      id: 2,
      img: "img/zappi.png",
      name: "Zappi",
      desc: "Este e-commerce lo diseñamos/desarrollamos con las tecnologias HTML , CSS Y JS,aplicando partes renderizadas con js , el funcionamiento de carrito de compras y otras funcionalidades. Fue un proyecto grupal en el cual nos dividimos las partes/funcionalidades y agrupamos lo realizado usando git , fue una formacion en bootcamp.",
    },
    {
      id: 3,
      img: "img/9z.png",
      name: "9Z WEB",
      desc: "Esta web la diseñe/desarrolle con las tecnologias HTML , CSS aplicando animaciones , transciciones y distintos estilos creados con css. Fue un proyecto propio para una formacion en un bootcamp.",
    },
    {
      id: 4,
      img: "img/todo.png",
      name: "To Do List react ",
      desc: "Este proyecto lo desarrolle con React, en el cual consumi una API y trabaje con distintos componentes. Fue un proyecto propio para una formacion en un bootcamp.",
    },
    {
      id: 5,
      img: "img/mas.jpg",
      name: `Ver mas proyectos`,
      desc:"",
    },
  ];
  
  const mostPopularProducts = () => {
    const popularProducts = [];
  
    for (let i = 0; i < 5; i++) {
       
      popularProducts.push(products[i]);
    }
  
    return popularProducts;
  };