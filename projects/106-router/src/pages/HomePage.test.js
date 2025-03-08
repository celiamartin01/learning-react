import { fireEvent, render } from "@testing-library/react"
import HomePage from "./HomePage"
import { UserProviderWrapper } from "../contexts/user.context"
import { MemoryRouter } from "react-router-dom"

describe("HomePage", () => {
    it("simple test", () => {
        // This is a stupid test just to check if the test enviroment works
        expect(1).toEqual(1)
    })

    it("should get HomePage as title", () => {
        const { getByTestId } = render(
            <MemoryRouter>          {/* Rendering fake Router as the HomePage uses HeaderPage, and that uses router */}
                <UserProviderWrapper>       {/* Rendering user context as it is used in HomePage */}
                    <HomePage />
                </UserProviderWrapper>
            </MemoryRouter>
        )

        const homePageTitle = getByTestId("homepage-title").textContent
        expect(homePageTitle).toEqual("HomePage")
    })

    it("should add one to counter", () => {
        const { getByTestId } = render(
            <MemoryRouter>          {/* Rendering fake Router as the HomePage uses HeaderPage, and that uses router */}
                <UserProviderWrapper>       {/* Rendering user context as it is used in HomePage */}
                    <HomePage />
                </UserProviderWrapper>
            </MemoryRouter>
        )

        const increaseCounterButton = getByTestId("increase-counter")
        fireEvent.click(increaseCounterButton)

        const counter = getByTestId("counter").textContent
        expect(counter).toEqual("1")
    })
})