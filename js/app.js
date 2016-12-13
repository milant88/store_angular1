(function() {
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
        name: 'Dodecahedron',
        price: 2,
        description: '. . .',
        canPurchase: true,
        images: [
            {
                full: '../images/diamond.png'
            }            
        ]
    },
    {
       name: 'Pentagonal Gem',
        price: 5.95,
        description: '. . .',
        canPurchase: false,
        images: [
            {
                full: '../images/ruby.png'
            }            
        ]
    }
    ];
    
    app.controller('PanelController', function() {
       this.tab = 1; 
        
        this.selectTab = function(setTab) {
          this.tab = setTab;  
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;  
        };
    });
})();