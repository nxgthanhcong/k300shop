import React from 'react'

const BestProduct = function (params) {
    return (
        <div className="row">
            <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                <h4>Best Products</h4>
                </div>
                <div className="card-body">
                <div className="owl-carousel owl-theme" id="products-carousel">
                    <div>
                    <div className="product-item pb-3">
                        <div className="product-image">
                        <img alt="image" src="../assets/img/products/product-4-50.png" className="img-fluid" />
                        </div>
                        <div className="product-details">
                        <div className="product-name">iBook Pro 2018</div>
                        <div className="product-review">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <div className="text-muted text-small">67 Sales</div>
                        <div className="product-cta">
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="product-item">
                        <div className="product-image">
                        <img alt="image" src="../assets/img/products/product-3-50.png" className="img-fluid" />
                        </div>
                        <div className="product-details">
                        <div className="product-name">oPhone S9 Limited</div>
                        <div className="product-review">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half" />
                        </div>
                        <div className="text-muted text-small">86 Sales</div>
                        <div className="product-cta">
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="product-item">
                        <div className="product-image">
                        <img alt="image" src="../assets/img/products/product-1-50.png" className="img-fluid" />
                        </div>
                        <div className="product-details">
                        <div className="product-name">Headphone Blitz</div>
                        <div className="product-review">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <div className="text-muted text-small">63 Sales</div>
                        <div className="product-cta">
                            <a href="#" className="btn btn-primary">Detail</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6">
                <div className="card gradient-bottom">
                    <div className="card-header">
                    <h4>Top 5 Products</h4>
                    <div className="card-header-action dropdown">
                        <a href="#" data-toggle="dropdown" className="btn btn-danger dropdown-toggle">Month</a>
                        <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                        <li className="dropdown-title">Select Period</li>
                        <li><a href="#" className="dropdown-item">Today</a></li>
                        <li><a href="#" className="dropdown-item">Week</a></li>
                        <li><a href="#" className="dropdown-item active">Month</a></li>
                        <li><a href="#" className="dropdown-item">This Year</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="card-body" id="top-5-scroll">
                    <ul className="list-unstyled list-unstyled-border">
                        <li className="media">
                        <img className="mr-3 rounded" width={55} src="../assets/img/products/product-3-50.png" alt="product" />
                        <div className="media-body">
                            <div className="float-right"><div className="font-weight-600 text-muted text-small">86 Sales</div></div>
                            <div className="media-title">oPhone S9 Limited</div>
                            <div className="mt-1">
                            <div className="budget-price">
                                <div className="budget-price-square bg-primary" data-width="64%" />
                                <div className="budget-price-label">$68,714</div>
                            </div>
                            <div className="budget-price">
                                <div className="budget-price-square bg-danger" data-width="43%" />
                                <div className="budget-price-label">$38,700</div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="media">
                        <img className="mr-3 rounded" width={55} src="../assets/img/products/product-4-50.png" alt="product" />
                        <div className="media-body">
                            <div className="float-right"><div className="font-weight-600 text-muted text-small">67 Sales</div></div>
                            <div className="media-title">iBook Pro 2018</div>
                            <div className="mt-1">
                            <div className="budget-price">
                                <div className="budget-price-square bg-primary" data-width="84%" />
                                <div className="budget-price-label">$107,133</div>
                            </div>
                            <div className="budget-price">
                                <div className="budget-price-square bg-danger" data-width="60%" />
                                <div className="budget-price-label">$91,455</div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="media">
                        <img className="mr-3 rounded" width={55} src="../assets/img/products/product-1-50.png" alt="product" />
                        <div className="media-body">
                            <div className="float-right"><div className="font-weight-600 text-muted text-small">63 Sales</div></div>
                            <div className="media-title">Headphone Blitz</div>
                            <div className="mt-1">
                            <div className="budget-price">
                                <div className="budget-price-square bg-primary" data-width="34%" />
                                <div className="budget-price-label">$3,717</div>
                            </div>
                            <div className="budget-price">
                                <div className="budget-price-square bg-danger" data-width="28%" />
                                <div className="budget-price-label">$2,835</div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="media">
                        <img className="mr-3 rounded" width={55} src="../assets/img/products/product-3-50.png" alt="product" />
                        <div className="media-body">
                            <div className="float-right"><div className="font-weight-600 text-muted text-small">28 Sales</div></div>
                            <div className="media-title">oPhone X Lite</div>
                            <div className="mt-1">
                            <div className="budget-price">
                                <div className="budget-price-square bg-primary" data-width="45%" />
                                <div className="budget-price-label">$13,972</div>
                            </div>
                            <div className="budget-price">
                                <div className="budget-price-square bg-danger" data-width="30%" />
                                <div className="budget-price-label">$9,660</div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="media">
                        <img className="mr-3 rounded" width={55} src="../assets/img/products/product-5-50.png" alt="product" />
                        <div className="media-body">
                            <div className="float-right"><div className="font-weight-600 text-muted text-small">19 Sales</div></div>
                            <div className="media-title">Old Camera</div>
                            <div className="mt-1">
                            <div className="budget-price">
                                <div className="budget-price-square bg-primary" data-width="35%" />
                                <div className="budget-price-label">$7,391</div>
                            </div>
                            <div className="budget-price">
                                <div className="budget-price-square bg-danger" data-width="28%" />
                                <div className="budget-price-label">$5,472</div>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="card-footer pt-3 d-flex justify-content-center">
                    <div className="budget-price justify-content-center">
                        <div className="budget-price-square bg-primary" data-width={20} />
                        <div className="budget-price-label">Selling Price</div>
                    </div>
                    <div className="budget-price justify-content-center">
                        <div className="budget-price-square bg-danger" data-width={20} />
                        <div className="budget-price-label">Budget Price</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default BestProduct;