import { paths } from "./config";

import { LoginPage } from "pages/auth/formPage/LoginPage";
import { RegistrationPage } from "pages/auth/formPage/RegistrationPage";

export const RoutesList = [
    {path: paths.loginPage, element: <LoginPage/>},
    {path: paths.registrationPage, element: <RegistrationPage/>},
]