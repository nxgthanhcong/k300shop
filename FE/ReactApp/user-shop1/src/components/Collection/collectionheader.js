import React from 'react'

const CollectionHeader = function () {
    return (
        <div class="collection-header">
            <label for="filter-check" class="collection-header__filter">Bộ lọc <i class="ti-angle-down"></i>
                <input hidden type="checkbox" name="" id="filter-check" />
                <div class="filter">
                    <div class="filter__header">
                        <h2 class="filter__header-label">Lọc theo</h2>
                        <i class="ti-close"></i>
                    </div>
                    <div class="menu-filter">
                        <li class="filter-item">
                            <label for="protype-check" class="btn-dropdown">Product Type
                                <i class="ti-close"></i>
                            </label>
                            <input hidden type="checkbox" name="" id="protype-check" />
                            <div class="smenu">
                                <a href="" class="smenu__item">Basic</a>
                                <a href="" class="smenu__item">Longline</a>
                            </div>
                        </li>
                        <li class="filter-item">
                            <label for="price-check" class="btn-dropdown">Product Type
                                <i class="ti-close"></i>
                            </label>
                            <input hidden type="checkbox" name="" id="price-check" />
                            <div class="smenu">
                                <a href="" class="smenu__item">Basic</a>
                                <a href="" class="smenu__item">Longline</a>
                            </div>
                        </li>
                    </div>
                </div>
            </label>
            <h1 class="collection-header__label">T-SHIRTS</h1>
            <div class="collection-header__sort">
                <span class="sort__label">Sắp xếp</span>
                <label for="sort" class="sort__option">Tùy chọn <i class="ti-angle-down"></i>
                    <input hidden type="checkbox" name="" id="sort" class="sortcheck" />
                    <ul class="option__list">
                        <li class="option__item">Tất cả</li>
                        <li class="option__item">Best seller</li>
                        <li class="option__item">A-Z</li>
                        <li class="option__item">Z-A</li>
                        <li class="option__item">Giá thấp đến cao</li>
                        <li class="option__item">Giá cao đến thấp</li>
                        <li class="option__item">Mới nhất</li>
                        <li class="option__item">Cũ nhất</li>
                    </ul>
                </label>
            </div>
        </div>
    );
}

export default CollectionHeader;