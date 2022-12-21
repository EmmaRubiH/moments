import { rest } from "msw"

const baseURL = "https://djangorubiproject.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, rest,ctx) => {
        return rest(ctx.json({"pk":4,"username":"Briann","email":"","first_name":"","last_name":"","profile_id":4,"profile_image":"https://res.cloudinary.com/emmarubih/image/upload/v1/media/images/winter-3089313_1280_qaajzn"}));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];