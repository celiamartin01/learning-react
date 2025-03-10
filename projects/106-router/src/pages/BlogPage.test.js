import { MemoryRouter } from 'react-router-dom';
import BlogPage from './BlogPage';
import { BlogProviderWrapper } from '../contexts/blog.context';
import { UserProviderWrapper } from '../contexts/user.context';
import { render } from '@testing-library/react';

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
})