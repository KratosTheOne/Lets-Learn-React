import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../Utils/store";
import { Provider } from "react-redux";
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MENU_DATA)
        },
    })
});

test("Add items to cart", async () => {

    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(menu.getByTestId("menu")));

    const addBtn = menu.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    
    const cart = menu.getByTestId("cart-items");
    
    expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart - 1 items</a>");

    //console.log(resList);
});