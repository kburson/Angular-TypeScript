module app.productList {

    console.log("define Class -- 'productManagement.ProductListCtrl'");

    import DataAccessService = app.common.DataAccessService;

    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title:string;
        showImage:boolean;
        products:app.domain.IProduct[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: DataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];

            dataAccessService.getProductResource().query(
                (data: app.domain.IProduct[]) => {
                    this.products = data;
                }
            );
        }

        toggleImage():void {
            this.showImage = !this.showImage;
        }
    }

    angular
        .module('productManagement')
        .controller("ProductListCtrl", ProductListCtrl);
}