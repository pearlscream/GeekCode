    var myTab = function(tabHeader, tabTitleClass, tabItemClass){
        console.log(tabHeader);
        this.tabItems = $('.'+tabItemClass).toArray();
        this.tabTitles = $('.'+tabTitleClass).toArray();
        console.log(this.tabItems);
        console.log(this.tabTitles);

        this.selectedItem = tabItemClass +'_selected';
        this.selectedTitle = tabTitleClass +'_selected';
        console.log(this.selectedItem);
        console.log(this.selectedTitle);
        var __self = this;

        tabHeader.click(function(e){
            e.preventDefault();
            console.log('yopt');

            var tabIndex = $(e.target).data('index');

            if($(__self.tabItems[tabIndex]).hasClass(__self.selectedItem)) return;

            $.each(__self.tabTitles, function(index, item){
                $(item).removeClass(__self.selectedTitle);
            });

            $(__self.tabTitles[tabIndex]).addClass(__self.selectedTitle);

            $.each(__self.tabItems, function(index, item){
                $(item).removeClass(__self.selectedItem);
            });

            $(__self.tabItems[tabIndex]).addClass(__self.selectedItem);
        });

    };
    console.log('heeeey');
    
    var firstTabs = new myTab($('.validation-block__header'),'validation-block__item','validation-block__content');
    var secondTabs = new myTab($('.code_area__header'),'code-area__item','code_area__content');
