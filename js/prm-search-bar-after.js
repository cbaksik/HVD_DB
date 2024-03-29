/**
 * Created by mferrarini on 2/24/22.
 * Adds placeholder text below the search bar.
 */

 angular.module('viewCustom')
 .controller('prmSearchBarAfterCtrl',[function () {
		 var vm=this;		 
		 vm.$onInit=function () {
			vm.parentCtrl.showTabsAndScopes = true;
		 };

 }]);

angular.module('viewCustom')
 .component('prmSearchBarAfter',{
		 bindings:{parentCtrl:'<'},
		 controller: 'prmSearchBarAfterCtrl',
		 controllerAs:'vm',
		 templateUrl:'/primo-explore/custom/HVD_DB/html/prm-search-bar-after.html'
 });