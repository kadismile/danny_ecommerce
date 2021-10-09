import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {selectUser} from "../../redux/userSlice";
import ProductService from '../../services/products'
import {updateItemQuantity, selectCart, removeItem, resetState} from "../../redux/cartSlice";
import {Link} from "react-router-dom";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import toastr from "toastr";
import {DisabledCheckout, DisabledLoginButton} from "../libs";
import {createOrder} from "../../services/tesst-service"


export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart)
  const user = useSelector(selectUser);
  const [formValues, setFormValues] = useState({
    notes: "",
    address: {
      country: "",
      fullAddress: "",
      countryCode: "",
      latitude: "",
      longitude: "",
      city: "",
      postalCode: ""
    },
    submitForm: true,
    errors: {
      address: {
        country: "",
        fullAddress: "",
        countryCode: "",
        latitude: 1,
        longitude: 1
      },
    }

  });
  const handleChange = (event: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
    event.preventDefault();
    let { name, value } = event.target;
    setFormValues(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };
  const total = (c:any) => {
    return [c].reduce((a:any,b:any) => a + Number(b.price * b.quantity), 0)
  }
  const subTotal = () => {
    return cart.reduce((a:any,b:any) => a + Number(b.price * b.quantity), 0)
  }

  const changeValue = (id: number, value: string) => {
    const cartItem = cart.find( (c: any)=> c.id === id)
    let quantity = cartItem.quantity
    if (value === "increase") {
      if (quantity >= 10) {
        quantity = 10
      } else {
        quantity+=1
      }
    } else {
      if (quantity <= 1) {
        quantity = 1
      } else {
        quantity-=1
      }
    }
    let finalItem = {...cartItem, quantity}
    dispatch( updateItemQuantity(finalItem))
  }

  const removeProduct = (id: number) => {
    dispatch(removeItem(id))
  }

  const transformCart = () => {
    let finalCart: any = []
    cart.forEach((c:any) => {
      finalCart.push({product_id: c.id, quantity: c.quantity})
    })
    return finalCart
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleMapInput = (e: { target: { value: string; }; }) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }: any) => () => {
    console.log("description ", description)
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    getGeocode ({ address: description })
      .then( async (results) => {

        const latLng = await getLatLng(results[0]);
        const {lat, lng } = latLng;
        const result = results[0].address_components;
        let countryData = result.find((res: any)=> { return (res.types).includes('country', 'political') });
        let cityData = result.find((res: any)=> { return (res.types).includes('locality', 'political') });
        let postalCode = result.find((res: any)=> { return (res.types).includes('postal_code') });
        const {long_name, short_name} = countryData;

        // @ts-ignore
        setFormValues( prevState => {
          return {
            ...prevState,
            address: {
              country: long_name,
              fullAddress: description,
              countryCode: short_name,
              longitude: lng,
              latitude: lat,
              city: cityData?.short_name,
              postalCode: postalCode?.short_name || ""
            },
          };
        });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        reference,
        structured_formatting: {main_text, secondary_text},
      } = suggestion;

      return (
        <li className="list-search" key={reference} onClick={handleSelect(suggestion)}>
          <b><i className="bx bx-map-pin"> </i> {main_text}</b> <small>{secondary_text}</small>
        </li>
      );
    });
  }

  const prepareOrder = async () => {
    console.log("hello ...........", process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET)
    const {address, notes} = formValues
    const orderData = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: false,
      billing: {
        first_name: user.first_name,
        last_name: user.last_name,
        address_1: address.fullAddress,
        address_2: "",
        city: address.city,
        state: address.city,
        postcode: address.postalCode,
        country: address.country,
        email: user.email,
        phone: user.phone
      },
      shipping: {
        first_name: user.first_name,
        last_name: user.last_name,
        address_1: address.fullAddress,
        address_2: "",
        city: address.city,
        state: address.city,
        postcode: address.postalCode,
        country: address.country,
      },
      line_items: transformCart(),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: ""
        }
      ]
    };
    let response = await createOrder(orderData)
    //let response = await ProductService.createOrder(orderData)
    const { data: data } = response
    console.log("data ", data)
    if (data.id) {
      await ProductService.createNote({id: data.id, notes })
      dispatch(resetState())
      toastr.success("Order Successfully Placed");
      setTimeout(()=> {
        window.location.replace("/")
      }, 500)
    }
  }

  return (
    <>
      <section className="heading-content">
        <div className="heading-wrapper">
          <div className="container">
            <div className="row">
              <div className="page-heading-inner heading-group">
                <div className="breadcrumb-group">
                  <h1 className="hidden">Your Cart</h1>
                  <div className="breadcrumb clearfix">
                      <span itemScope itemType="http://data-vocabulary.org/Breadcrumb"><a href="index.html" title="Fast Food" itemProp="url"><span itemProp="title"><i className="fa fa-home" /></span></a>
                      </span>
                    <span className="arrow-space" />
                    <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                        <a href="cart.html" title="Your Cart" itemProp="url"><span itemProp="title">Your Cart</span></a>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        cart.length ? <section className="cart-content">
          <div className="cart-wrapper">
            <div className="container">
              <div className="row">
                <div id="shopify-section-cart-template" className="shopify-section">
                  <div className="cart-inner">
                    <div id="cart">
                      <div className="cart-form">
                        <form action="http://demo.themeforshop.com/html_fastfood/cart.html" method="post" id="cartform">
                          <table>
                            <thead>
                            <tr>
                              <th className="image" colSpan={2}>Product</th>
                              <th className="price">Price</th>
                              <th className="qty">Quantity</th>
                              <th className="total">Total</th>
                              <th className="remove">Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            { cart.map((c:any, index:number) => <tr>
                              <td className="image" key={index}>
                                <div className="product_image">
                                  <Link
                                    to={{ pathname: `/product/${c.name}/${c.id}`, state: { productId: c.id, catId: c.categories[0].id},
                                    }}>
                                    <img src={c.images[0].src} alt="" />
                                  </Link>
                                </div>
                              </td>
                              <td className="image-info">
                                <div className="product_name">
                                  <Link to={{ pathname: `/product/${c.name}/${c.id}`}}>
                                    {c.name}
                                  </Link>
                                  <div className="group_mobile">
                                    <div className="remove-mobile">
                                      <span style={{color: "#c72b2b"}} onClick={ () => {removeProduct(c.id)}}> <i className="cs-icon icon-bin" style={{fontSize: "12px"}} /> </span>
                                      {/*<span onClick={()=> {alert("hello --->")}} className="cart"><span className="lnr lnr-trash" style={{color: "red", fontSize: "15px" }}/></span>*/}
                                    </div>
                                  </div>

                                  <div className="group_mobile">
                                    <span className="price-mobile"><span className="money" data-currency-usd="$20.00">${c.price}.00</span></span>
                                    <div className="quantity-mobile">
                                      <div className="quantity-wrapper">

                                        <div className="input-group">
                                        <span className="input-group-btn">
                                           <button type="button" className="btn btn-default btn-number">
                                             <span className="qty-down fa fa-minus" title="Decrease" onClick={()=> {changeValue(c.id,"")}}> </span>
                                          </button>
                                        </span>
                                          <input type="text" style={{ marginLeft: "10px" }} name="quant[1]" className="form-control input-number" value={c.quantity} min="1" max="10" />
                                          <span className="input-group-btn">
                                          <button type="button" className="btn btn-default btn-number">
                                              <span className="qty-down fa fa-plus" title="Increase" onClick={()=> {changeValue(c.id, "increase")}}> </span>
                                          </button>
                                        </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </td>
                              <td className="price"><span className="money" data-currency-usd="$20.00">${c.price}.00</span></td>
                              <td className="qty">
                                <div className="quantity-wrapper">
                                  <div className="input-group">
                                        <span className="input-group-btn">
                                           <button type="button" className="btn btn-default btn-number">
                                             <span className="qty-down fa fa-minus" title="Decrease" onClick={()=> {changeValue(c.id,"")}}> </span>
                                          </button>
                                        </span>
                                    <input type="text" name="quant[1]" className="form-control input-number" value={c.quantity} min="1" max="10" />
                                    <span className="input-group-btn">
                                          <button type="button" className="btn btn-default btn-number">
                                              <span className="qty-down fa fa-plus" title="Increase" onClick={()=> {changeValue(c.id, "increase")}}> </span>
                                          </button>
                                        </span>
                                  </div>
                                </div>
                                {/*End quantily wrapper*/}
                              </td>
                              <td className="total title-1"><span className="money" data-currency-usd="$20.00">${total(c)}.00</span></td>
                              <td className="remove"><a href="#" className="cart"><span className="lnr lnr-trash" /></a></td>
                            </tr>)

                            }

                            <tr className="summary">
                              <td className="total_label" colSpan={5}>Subtotal</td>
                              <td className="price" colSpan={1}>
                              <span className="total">
                                <span className="total_label">${subTotal()}.00</span>
                              </span>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                          <div className="group-button">
                            <a href="/" className="_btn">Continue Shopping</a>
                            <div className="group_btn_right">
                              <input type="button" className="_btn clearAllCart" defaultValue="Clear all" />
                            </div>
                          </div>
                          <div className="group-checkout-input">
                            <div className="shipping-calculator col-sm-6 col-xs-12 ">
                              <div id="shipping-calculator">
                                <h3>Add Shipping Address</h3>
                                <div className="group_form">
                                  <div className="form-item">
                                    <label htmlFor="address_zip">Address</label>
                                    <div ref={ref}>
                                      <input
                                        value={value}
                                        onChange={handleMapInput}
                                        disabled={!ready}
                                        placeholder="Address"
                                      />
                                      {status === "OK" && <ul className="google_autocomplete">{renderSuggestions()}</ul>}
                                    </div>
                                  </div>


                                </div>
                              </div>
                            </div>
                            <div className="checkout-buttons col-sm-6 col-xs-12">
                              <div className="note-content group_form">
                                <div className="form-item">
                                  <label htmlFor="note">Add special instructions for your order</label>
                                  <textarea id="note" onChange={handleChange} value={formValues.notes} name="note" placeholder="Enter text here..."  />
                                </div>
                              </div>
                              <div className="checkout-content">
                                <div className="buttons clearfix">
                                  {
                                    !user.email ?
                                      <input type="submit" id="checkout" onClick={()=> { window.location.replace("/login") }} className="_btn" name="checkout"
                                             value="Login to Continue" style={{ borderColor: "#499d14", backgroundColor: "#499d14"}}
                                      /> :
                                      formValues.address.country.length === 0 ?
                                      <DisabledCheckout/> :
                                        <input value="submit" onClick={ prepareOrder } className="_btn" name="checkout" />
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> :
          <section className="cart-content">
            <div className="cart-wrapper">
              <div className="container">
                <div className="row">
                  <div id="shopify-section-cart-template" className="shopify-section">
                    <div className="cart-inner">
                      <div id="cart">
                        <h2> No Cart Items </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }

    </>
  );
}