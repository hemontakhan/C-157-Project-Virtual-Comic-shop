AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
            id: 'Superman',
            title:'Superman',
            url:'assets/Superman.png'
        },
        {
         id: 'Spiderman',
         title:'Spiderman',
         url:'assets/Spiderman.png'
     },
     {
         id: 'Batman',
         title:'Batman',
         url:'assets/Batman.png'
     },
     {
         id: 'Ironman',
         title:'Ironman',
         url:'assets/Ironman.png'
     }
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderE1 = this.createBorder(position,item.id);
        // Thumbnail Element
        const thumbNail = this.createThumbNailItem(item);
        borderE1.appendChild(thumbNail);
        // Title Text Element
        const titleE1 = this.createTitle(position,item);
        borderE1.appendChild(titleE1);
  
        this.placesContainer.appendChild(borderE1);
      }
    },
    createBorder:function(position,id){
      const entityE1 = document.createElement('a-entity')
      entityE1.setAttribute('id',id)
      entityE1.setAttribute('visible',true)
      entityE1.setAttribute('geometry',{
        primitive: 'plane',
        width: 20,
        height: 30,
      })     
     entityE1.setAttribute('position',position)
     entityE1.setAttribute('material',{
       color:'white',
       opacity:0
     })
     return entityE1
    },
    
    createThumbNailItem: function(item){
     const entityE1 = document.createElement('a-entity')
     entityE1.setAttribute('visible',true)
     entityE1.setAttribute('geometry',{
       primitive:'plane',
       width: 19,
       height: 28,
     })
     entityE1.setAttribute('material',{
       src: item.url
     })
     return entityE1
    },
  
   createTitle: function(position,item){
    const entityE1 = document.createElement('a-entity')
    entityE1.setAttribute('text',{
      font: 'exo2bold',
      align:'center',
      width:70,
      color:'#e65100',
      value:  item.title,
    })
    const elposition = position
    elposition.y = -20
    entityE1.setAttribute('position',elposition)
    entityE1.setAttribute('visible',true)
    return entityE1;
   }
    
  });
  