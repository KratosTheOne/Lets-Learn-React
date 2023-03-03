import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/store"
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering the header component", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>;
        </StaticRouter>
    );
    
    const logo = header.getAllByTestId("logo");
    console.log(logo);

    expect(logo[0].src).toBe("http://localhost/dummyLogo.jpg");

    // Check if logo is loaded

    //console.log(header);
});


test("Online status should be green on rendering the header component", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>;
        </StaticRouter>
    );
    
    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("Green");

});


test("Cart should have 0 items on rendering the header component", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>;
        </StaticRouter>
    );
    
    const cartItems = header.getByTestId("cart-items");

    expect(cartItems.innerHTML).toBe("<a href=\"/cart\">Cart - 0 items</a>");

});