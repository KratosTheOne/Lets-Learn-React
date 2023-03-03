import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../Utils/store";
import { Provider } from "react-redux";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(RESTAURANT_DATA)
        },
    })
});

test("Shimmer function should load", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    
    expect(shimmer.children.length).toBe(15);

    //console.log(shimmer);
});

test("Restaurant should load on homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");
    
    expect(resList.children.length).toBe(15);

    //console.log(resList);
});

test("Search for string(food) on homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId("search-btn")));

    const searchInput = body.getByTestId("search-input");

    fireEvent.change(searchInput, { 
        target: {
            value : "snacks",
        },
    });

    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);
    
    const resList = body.getByTestId("res-list");
    
    expect(resList.children.length).toBe(1);

    //console.log(resList);
});