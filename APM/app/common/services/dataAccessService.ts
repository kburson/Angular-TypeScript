module app.common {

    console.log("define Service -- 'common.services.DataAccessService'");

    import IResource = angular.resource.IResource;
    import IProduct = app.domain.IProduct;
    import IResourceClass = ng.resource.IResourceClass;
    import IResourceService = ng.resource.IResourceService;


    export interface IProductResource extends IResource<IProduct> {

    }

    export interface IDataAccessService {
        getProductResource() : IResourceClass<IProductResource>;
    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ["$resource"];
        constructor(private $resource: IResourceService) {

        }

        getProductResource():IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }

    }

    angular
        .module("common.services")
        .service("dataAccessService", DataAccessService);
}