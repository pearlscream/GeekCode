    var myTab = function(tabHeader, tabTitleClass, tabItemClass){
        this.tabItems = $('.'+tabItemClass).toArray();
        this.tabTitles = $('.'+tabTitleClass).toArray();

        this.selectedItem = tabItemClass +'_selected';
        this.selectedTitle = tabTitleClass +'_selected';
        var __self = this;

        tabHeader.click(function(e){
            e.preventDefault();

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
    
    var firstTabs = new myTab($('.validation-block__header'),'validation-block__item','validation-block__content');
