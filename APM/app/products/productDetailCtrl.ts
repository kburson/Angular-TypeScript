module app.productDetail {

    console.log("define Class -- 'productManagement.ProductDetailCtrl'");

    import DataAccessService = app.common.DataAccessService;

    interface IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService{
        productId: number
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title:string;
        product:app.domain.IProduct;

        static $inject = ['$routeParams','dataAccessService'];

        constructor(private $routeParams,
                    private dataAccessService:DataAccessService) {
            this.title = 'Product Detail';

            dataAccessService.getProductResource().get(
                {productId: $routeParams.productId },
                (data:app.domain.IProduct) => {
                    this.product = data;
                }
            );
        }

    }

    angular
        .module('productManagement')
        .controller("ProductDetailCtrl", ProductDetailCtrl);

}
