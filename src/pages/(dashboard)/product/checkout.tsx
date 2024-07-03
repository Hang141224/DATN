import React from 'react';
import { Switch } from '@/components/ui/switch';


const Checkout = () => {
    return (
        <div className="container" style={{ padding: '0px 64px' }}>
            <header>Header</header>
            <nav>Menu</nav>
            <main>
                <div className="checkout mt-4">
                    <div className="noidung">
                        <h4 className='text-red-500'>Shipping</h4>
                        <hr className="mt-4" />
                        <form action="">
                            <div className="name">
                                <div className="first-name">
                                    <label htmlFor="">FIRST NAME *</label>
                                    <div>
                                        <input type="text" className="first mt-2" />
                                    </div>
                                </div>
                                <div className="last-name">
                                    <label htmlFor="">LAST NAME *</label>
                                    <div>
                                        <input type="text" className="last mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">Country / Region *</label>
                                <div className="mt-2">
                                    <select className="country">
                                        <option value="country-option">Hà Nội</option>
                                        <option value="country-option">Hà Nam</option>
                                        <option value="country-option">Thái Bình</option>
                                        <option value="country-option">Hải Phòng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">Address *</label>
                                <div className="mt-2">
                                    <input type="text" placeholder="House number and street name" className="country" />
                                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="country mt-2" />
                                </div>
                            </div>
                            <div className="Three mt-4">
                                <div className="city">
                                    <label htmlFor="">Town / City *</label>
                                    <div>
                                        <input type="text" className="input-3 mt-2" />
                                    </div>
                                </div>
                                <div className="province">
                                    <label htmlFor="">Province *</label>
                                    <div className="mt-2">
                                        <select className="input-3">
                                            <option value="country-option" />
                                            <option value="country-option">Hà Nam</option>
                                            <option value="country-option">Thái Bình</option>
                                            <option value="country-option">Hải Phòng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="zip">
                                    <label htmlFor="">Postcode / ZIP *</label>
                                    <div>
                                        <input type="text" className="input-3 mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="name mt-4">
                                <div className="phone">
                                    <label htmlFor="">Phone (optional)</label>
                                    <div>
                                        <input type="text" className="first mt-2" />
                                    </div>
                                </div>
                                <div className="email">
                                    <label htmlFor="">Email address *</label>
                                    <div>
                                        <input type="email" className="last mt-2" />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-5" />
                            <div className="mt-4">
                                <p className="title">What would you like us to do if an item is out of stock?</p>
                                <div className="mt-2">
                                    <select className="country">
                                        <option value="country-option" />
                                        <option value="country-option">Cancel the order</option>
                                        <option value="country-option">Wait for restock</option>
                                        <option value="country-option">Contact me with updates</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="mt-5" />
                            <div className="mt-4">
                                <input type="checkbox" />
                                <span className="title-ship">Ship to a different address?</span>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">Order Notes (optional)</label>
                                <div className="mt-2">
                                    <textarea cols={30} rows={10} className="note" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={''} />
                                </div>
                            </div>
                            <hr className="mt-5" />
                            <div className="mt-4">
                                <p className="title">Where did you hear about us?</p>
                                <div className="mt-2">
                                    <textarea cols={30} rows={10} className="note" placeholder="Let us know how you found us." defaultValue={''} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <aside>
                        <div className="noidung-trai">
                            <div className="bang-3">
                                <div className="bang">
                                    <div className="title-bang">Subtotal</div>
                                    <div className="title-info">$497.00</div>
                                </div>
                                <div className="bang">
                                    <div className="title-bang">Shipping</div>
                                    <div className="title-info">New York, US</div>
                                </div>
                                <div className="bang">
                                    <div className="title-bang">Discount</div>
                                    <div className="title-info">$0.0</div>
                                </div>
                            </div>
                            <hr className="mt-4" />
                            <div className="email-money">
                                <p className="title-bang">Email Money Transfer</p>
                                <span>
                                    <img src="/src/assets/images/Icon1.png" className="click-email" alt="Email Money Transfer" />
                                </span>
                            </div>
                            <div className="mt-4">
                                <input type="text" placeholder="Coupon code" className="code" />
                                <button type="button" className="btn-apply">Apply Coupon</button>
                            </div>
                            <div className="bang mt-4">
                                <div className="title-bang">Shipping Costs</div>
                                <div className="title-info">$50.00</div>

                            </div>
                            <hr />
                            <div className="mt-4">
                                <input type="checkbox" />
                                <span className="title-note">
                                    I confirm that my address is 100% correct and will not hold Top Shelf BC liable if this shipment is sent to an incorrect address. *
                                </span>
                            </div>
                            <div className="mt-3">
                                <input type="checkbox" />
                                <span className="title-note">Sign me up to receive email updates and news (optional)</span>
                            </div>
                            <hr />
                            <div className="coin flex">
                                <div className='coin-point'>
                                    <img src="/src/assets/images/Icon.svg" alt="Coin" />
                                    <div className="point">Your point</div>
                                    <div className="diem">10.850</div>
                                </div>
                                <Switch />
                            </div>
                            <div className="mt-4">
                                <button type="button" className="btn-tong">
                                    <span>Place Order</span>
                                    <span>|</span>
                                    <span>$547.00</span>
                                </button>
                            </div>
                            <div className="mt-4">
                                <p className="payment">SECURE PAYMENTS PROVIDED BY</p>
                                <img src="/src/assets/images/Row.svg" alt="Secure Payments" />
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer>123</footer>
        </div>
    );
};

export default Checkout;
