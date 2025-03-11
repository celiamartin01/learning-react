import { MemoryRouter } from 'react-router-dom';
import BlogPage from './BlogPage';
import { BlogProviderWrapper } from '../contexts/blog.context';
import { UserProviderWrapper } from '../contexts/user.context';
import { render } from '@testing-library/react';
import { BlogContext } from '../contexts/blog.context';

// We are emulating a header component so we don't have to use the MemoryRouter in each it
jest.mock("../components/HeaderComponent", () => {
    return {
        __esModule: true,
        default: () => <></>
    }
})

describe("BlogPage testing suit", () => {
    it("should get BlogPage as title", () => {
        const { getByTestId } = render(
            <BlogProviderWrapper>
                <UserProviderWrapper>
                    <BlogPage />
                </UserProviderWrapper>
            </BlogProviderWrapper>
        )

        const blogPageTitle = getByTestId("blogpage-title").textContent
        expect(blogPageTitle).toEqual("Blog page")
    })

    it("should get error msg", () => {
        const { getByTestId } = render(
            // Here we are emulating context, bringing some fake values as if context provided them
            // This way we can test things in this component that depend on context
            <BlogContext.Provider
                value={{
                    posts: [],
                    error: true,
                    getPosts: () => { }
                }}>
                <UserProviderWrapper>
                    <BlogPage />
                </UserProviderWrapper>
            </BlogContext.Provider>
        )

        const errorMsg = getByTestId("error-msg").textContent
        expect(errorMsg).toEqual("Something went wrong...")
    })

    it("should get loading msg", () => {
        const { getByTestId } = render(
            <BlogContext.Provider
                value={{
                    posts: [],
                    error: false,
                    getPosts: () => { }
                }}>
                <UserProviderWrapper>
                    <BlogPage />
                </UserProviderWrapper>
            </BlogContext.Provider>
        )

        const loadingMsg = getByTestId("loading-msg").textContent
        expect(loadingMsg).toEqual("Loading...")
    })
})